"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ShoppingBag, Star, Minus, Plus } from "lucide-react";
import { Product, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { useToast } from "@/lib/toast-context";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({
  product,
  onClose,
}: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(
      product,
      selectedSize || product.sizes[0],
      selectedColor || product.colors[0]
    );
    addToast(`${product.name} added to cart!`);
    onClose();
  };

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-luxury-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:bg-beige transition-colors"
            >
              <X className="w-5 h-5 text-charcoal" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Images */}
              <div className="relative aspect-square md:aspect-auto md:h-full bg-beige/20">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {/* Thumbnails */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {product.images.slice(0, 3).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-14 h-14 relative overflow-hidden border-2 transition-colors ${
                        activeImage === i
                          ? "border-rose"
                          : "border-white/50 hover:border-white"
                      }`}
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <p className="subtitle mb-2">
                  {product.category.replace("-", " ")}
                </p>
                <h2 className="heading-sm text-charcoal mb-3">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating)
                            ? "fill-gold-soft text-gold-soft"
                            : "text-beige"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-poppins text-xs text-taupe">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-playfair text-2xl font-semibold text-charcoal">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="font-poppins text-base text-taupe line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <p className="body-text mb-6 line-clamp-2">
                  {product.description}
                </p>

                {/* Size */}
                <div className="mb-5">
                  <p className="font-poppins text-xs tracking-wider uppercase text-charcoal mb-3">
                    Size
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 font-poppins text-xs tracking-wider border transition-all duration-300 ${
                          selectedSize === size
                            ? "bg-charcoal text-white border-charcoal"
                            : "border-beige text-charcoal hover:border-rose"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <p className="font-poppins text-xs tracking-wider uppercase text-charcoal mb-3">
                    Quantity
                  </p>
                  <div className="flex items-center border border-beige w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-beige/50 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-12 h-10 flex items-center justify-center font-poppins text-sm border-x border-beige">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-beige/50 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="btn-primary flex-1 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      toggleWishlist(product.id);
                      addToast(
                        isInWishlist(product.id)
                          ? "Removed from wishlist"
                          : "Added to wishlist",
                        "info"
                      );
                    }}
                    className={`w-[52px] h-[52px] border flex items-center justify-center transition-all duration-300 ${
                      isInWishlist(product.id)
                        ? "bg-rose/10 border-rose text-rose"
                        : "border-beige text-charcoal hover:border-rose hover:text-rose"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isInWishlist(product.id) ? "fill-rose" : ""
                      }`}
                    />
                  </button>
                </div>

                <Link
                  href={`/shop/${product.id}`}
                  className="mt-4 text-center font-poppins text-xs text-taupe hover:text-rose underline underline-offset-4 transition-colors"
                  onClick={onClose}
                >
                  View Full Details →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}