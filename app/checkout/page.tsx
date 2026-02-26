"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import FadeIn from "@/components/fade-in";
import { useToast } from "@/lib/toast-context";
import { Lock, CreditCard, Banknote, ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const { state, cartTotal, dispatch } = useCart();
  const { addToast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [isProcessing, setIsProcessing] = useState(false);

  const shippingCost = cartTotal >= 2999 ? 0 : 199;
  const orderTotal = cartTotal + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    addToast("Order placed successfully! Thank you for shopping with us.");
    dispatch({ type: "CLEAR_CART" });
    setIsProcessing(false);
  };

  if (state.items.length === 0) {
    return (
      <div className="pt-36 pb-20 section-padding min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-md text-charcoal mb-4">No items to checkout</h1>
          <Link href="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 sm:pt-36 pb-20 section-padding min-h-screen bg-ivory">
      <FadeIn>
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 font-poppins text-xs tracking-wider uppercase text-taupe hover:text-charcoal transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </Link>

        <h1 className="heading-lg text-charcoal mb-12">Checkout</h1>
      </FadeIn>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact */}
            <FadeIn delay={0.1}>
              <div className="bg-white p-6 sm:p-8 shadow-luxury border border-beige/30">
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-6">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    required
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    required
                    className="input-field"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="input-field"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="input-field"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Address */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 sm:p-8 shadow-luxury border border-beige/30">
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-6">
                  Shipping Address
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Street Address *"
                    required
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, Suite, etc. (optional)"
                    className="input-field"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="City *"
                      required
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="State *"
                      required
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="PIN Code *"
                      required
                      className="input-field"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Payment */}
            <FadeIn delay={0.3}>
              <div className="bg-white p-6 sm:p-8 shadow-luxury border border-beige/30">
                <div className="flex items-center gap-2 mb-6">
                  <Lock className="w-4 h-4 text-rose" />
                  <h3 className="font-playfair text-xl font-semibold text-charcoal">
                    Payment Method
                  </h3>
                </div>

                <div className="space-y-3">
                  <label
                    className={`flex items-center gap-4 p-4 border cursor-pointer transition-all duration-300 ${
                      paymentMethod === "razorpay"
                        ? "border-charcoal bg-beige/20"
                        : "border-beige hover:border-taupe"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="razorpay"
                      checked={paymentMethod === "razorpay"}
                      onChange={() => setPaymentMethod("razorpay")}
                      className="accent-rose"
                    />
                    <CreditCard className="w-5 h-5 text-charcoal" />
                    <div>
                      <p className="font-poppins text-sm font-medium text-charcoal">
                        Pay with Razorpay
                      </p>
                      <p className="font-poppins text-[10px] text-taupe">
                        Cards, UPI, Net Banking, Wallets
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 border cursor-pointer transition-all duration-300 ${
                      paymentMethod === "cod"
                        ? "border-charcoal bg-beige/20"
                        : "border-beige hover:border-taupe"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="accent-rose"
                    />
                    <Banknote className="w-5 h-5 text-charcoal" />
                    <div>
                      <p className="font-poppins text-sm font-medium text-charcoal">
                        Cash on Delivery
                      </p>
                      <p className="font-poppins text-[10px] text-taupe">
                        Pay when you receive your order
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.2}>
              <div className="sticky top-36 bg-white p-6 sm:p-8 shadow-luxury border border-beige/30">
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-6">
                  Your Order
                </h3>

                {/* Items */}
                <div className="space-y-4 mb-6 pb-6 border-b border-beige/50 max-h-64 overflow-y-auto">
                  {state.items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3"
                    >
                      <div className="w-16 h-20 relative flex-shrink-0 bg-beige/20">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-charcoal text-white text-[10px] rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-poppins text-xs text-charcoal truncate">
                          {item.product.name}
                        </p>
                        <p className="font-poppins text-[10px] text-taupe mt-0.5">
                          {item.size} • {item.color}
                        </p>
                        <p className="font-poppins text-xs font-medium text-charcoal mt-1">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
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
                </div>

                <div className="flex justify-between mb-8">
                  <span className="font-playfair text-lg font-bold text-charcoal">
                    Total
                  </span>
                  <span className="font-playfair text-lg font-bold text-charcoal">
                    {formatPrice(orderTotal)}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn-primary w-full !py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Place Order — {formatPrice(orderTotal)}
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <Shield className="w-3.5 h-3.5 text-taupe" />
                  <p className="font-poppins text-[10px] text-taupe">
                    Your payment is 100% secure
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </form>
    </div>
  );
}