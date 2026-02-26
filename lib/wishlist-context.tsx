"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface WishlistContext {
  wishlist: string[];
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContext | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("womens-villa-wishlist");
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("womens-villa-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (id: string) =>
    setWishlist((prev) => [...prev, id]);

  const removeFromWishlist = (id: string) =>
    setWishlist((prev) => prev.filter((item) => item !== id));

  const isInWishlist = (id: string) => wishlist.includes(id);

  const toggleWishlist = (id: string) => {
    if (isInWishlist(id)) removeFromWishlist(id);
    else addToWishlist(id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}