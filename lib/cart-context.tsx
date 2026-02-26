"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Product } from "./data";

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | {
      type: "ADD_ITEM";
      payload: { product: Product; size: string; color: string };
    }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  cartTotal: number;
  cartCount: number;
  addToCart: (product: Product, size: string, color: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingIndex = state.items.findIndex(
        (item) =>
          item.product.id === action.payload.product.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      if (existingIndex > -1) {
        const newItems = [...state.items];
        newItems[existingIndex].quantity += 1;
        return { ...state, items: newItems };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            product: action.payload.product,
            quantity: 1,
            size: action.payload.size,
            color: action.payload.color,
          },
        ],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.payload
        ),
      };
    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.product.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    case "LOAD_CART":
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("womens-villa-cart");
    if (saved) {
      try {
        dispatch({ type: "LOAD_CART", payload: JSON.parse(saved) });
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("womens-villa-cart", JSON.stringify(state.items));
  }, [state.items]);

  const cartTotal = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const cartCount = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const addToCart = (product: Product, size: string, color: string) => {
    dispatch({ type: "ADD_ITEM", payload: { product, size, color } });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        cartTotal,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}