"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import FadeIn from "@/components/fade-in";
import { motion, AnimatePresence } from "framer-motion";
import {
  Minus,
  Plus,
  X,
  ShoppingBag,
  ArrowRight,
  Gift,
  Truck,
} from "lucide-react";

export default function CartPage() {
  const { state, cartTotal, cartCount, removeFromCart, updateQuantity } =
    useCart();

  const shippingCost = cartTotal >= 2999 ? 0 : 199;
  const orderTotal = cartTotal + shippingCost;

  if (state.items.length === 0) {
    return (
      <div className="pt-36 pb-20 section-padding min-h-screen">
        <div className="max-w-lg mx-auto text-center py-20">
          <FadeIn>
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-beige/50 flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-taupe" />
            </div>
            <h1 className="heading-md text-charcoal mb-4">
              Your Cart is Empty
            </h1>
            <p className="body-text mb-8">
              Looks like you haven&apos;t added anything to your cart yet.
              Explore our collection and find something you love.
            </p>
            <Link href="/shop" className="btn-primary">
              Continue Shopping
            </Link>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 sm:pt-36 pb-20 section-padding min-h-screen">
      <FadeIn>
        <div className="mb-12">
          <h1 className="heading-lg text-charcoal mb-2">Shopping Cart</h1>
          <p className="body-text">{cartCount} items in your cart</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-beige font-poppins text-[10px] tracking-[0.2em] uppercase text-taupe">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          <AnimatePresence>
            {state.items.map((item) => (
              <motion.div
                key={`${item.product.id}-${item.size}-${item.color}`}
                layout
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-6 border-b border-beige/50 items-center"
              >
                {/* Product */}
                <div className="sm:col-span-6 flex gap-4">
                  <Link
                    href={`/shop/${item.product.id}`}
                    className="w-20 h-24 sm:w-24 sm:h-32 flex-shrink-0 relative overflow-hidden bg-beige/20"
                  >
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex flex-col justify-center">
                    <Link
                      href={`/shop/${item.product.id}`}
                      className="font-playfair text-sm sm:text-base text-charcoal hover:text-rose transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="font-poppins text-[10px] text-taupe tracking-wider mt-1">
                      Size: {item.size} • Color: {item.color}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="flex items-center gap-1 mt-2 font-poppins text-[10px] text-taupe hover:text-rose transition-colors w-fit"
                    >
                      <X className="w-3 h-3" />
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="sm:col-span-2 text-center hidden sm:block">
                  <span className="font-poppins text-sm text-charcoal">
                    {formatPrice(item.product.price)}
                  </span>
                </div>

                {/* Quantity */}
                <div className="sm:col-span-2 flex justify-center">
                  <div className="flex items-center border border-beige">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-8 h-8 flex items-center justify-center hover:bg-beige/50 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-10 h-8 flex items-center justify-center font-poppins text-xs font-medium border-x border-beige">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-8 h-8 flex items-center justify-center hover:bg-beige/50 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="sm:col-span-2 text-right">
                  <span className="font-poppins text-sm font-semibold text-charcoal">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="mt-6">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 font-poppins text-xs tracking-wider uppercase text-taupe hover:text-charcoal transition-colors"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-36 bg-beige/20 border border-beige/50 p-6 sm:p-8">
            <h3 className="font-playfair text-xl font-semibold text-charcoal mb-6">
              Order Summary
            </h3>

            {/* Coupon */}
            <div className="mb-6 pb-6 border-b border-beige/50">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Gift className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="input-field !pl-10 !py-2.5 !text-xs"
                  />
                </div>
                <button className="px-4 py-2.5 bg-charcoal text-white font-poppins text-xs tracking-wider uppercase hover:bg-rose transition-colors">
                  Apply
                </button>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-3 mb-6 pb-6 border-b border-beige/50">
              <div className="flex justify-between">
                <span className="font-poppins text-sm text-taupe">
                  Subtotal
                </span>
                <span className="font-poppins text-sm text-charcoal">
                  {formatPrice(cartTotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-poppins text-sm text-taupe">
                  Shipping
                </span>
                <span className="font-poppins text-sm text-charcoal">
                  {shippingCost === 0 ? "Free" : formatPrice(shippingCost)}
                </span>
              </div>
              {shippingCost > 0 && (
                <div className="flex items-center gap-2 p-3 bg-rose/5 border border-rose/10">
                  <Truck className="w-4 h-4 text-rose flex-shrink-0" />
                  <p className="font-poppins text-[10px] text-rose">
                    Add {formatPrice(2999 - cartTotal)} more for free shipping
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-between mb-8">
              <span className="font-playfair text-lg font-semibold text-charcoal">
                Total
              </span>
              <span className="font-playfair text-lg font-semibold text-charcoal">
                {formatPrice(orderTotal)}
              </span>
            </div>

            <Link
              href="/checkout"
              className="btn-primary w-full flex items-center justify-center gap-2 !py-4"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="font-poppins text-[10px] text-taupe text-center mt-4">
              Tax included. Shipping calculated at checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}