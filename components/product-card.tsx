"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { Product, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { useToast } from "@/lib/toast-context";

interface ProductCardProps {
  product: Product;
  index?: number;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({
  product,
  index = 0,
  onQuickView,
}: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0]);
    addToast(`${product.name} added to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    addToast(
      isInWishlist(product.id)
        ? "Removed from wishlist"
        : "Added to wishlist",
      "info"
    );
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView?.(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/shop/${product.id}`}>
        <div
          className="group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-beige/30 mb-4">
            {!imageLoaded && (
              <div className="absolute inset-0 skeleton" />
            )}
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className={`object-cover transition-all duration-[1.2s] group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              onLoad={() => setImageLoaded(true)}
            />

            {/* Second image on hover */}
            {product.images[1] && (
              <Image
                src={product.images[1]}
                alt={product.name}
                fill
                className={`object-cover absolute inset-0 transition-opacity duration-700 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            )}

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-block px-3 py-1.5 bg-charcoal text-white font-poppins text-[10px] tracking-[0.15em] uppercase">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Discount Badge */}
            {discount > 0 && (
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-block px-2 py-1 bg-rose text-white font-poppins text-[10px] font-semibold">
                  -{discount}%
                </span>
              </div>
            )}

            {/* Hover Actions */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-2"
                >
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-charcoal/90 backdrop-blur-sm text-white font-poppins text-xs tracking-wider uppercase hover:bg-rose transition-colors duration-300"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleQuickView}
                    className="w-11 h-11 flex items-center justify-center bg-white/90 backdrop-blur-sm text-charcoal hover:bg-white transition-colors duration-300"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Wishlist Button (always visible) */}
            <button
              onClick={handleWishlist}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 group/heart"
              style={{ display: discount > 0 ? "none" : "flex" }}
            >
              <Heart
                className={`w-4 h-4 transition-colors duration-300 ${
                  isInWishlist(product.id)
                    ? "fill-rose text-rose"
                    : "text-charcoal group-hover/heart:text-rose"
                }`}
              />
            </button>
          </div>

          {/* Info */}
          <div className="space-y-2">
            {/* Category */}
            <p className="font-poppins text-[10px] tracking-[0.2em] uppercase text-taupe">
              {product.category.replace("-", " ")}
            </p>

            {/* Name */}
            <h3 className="font-playfair text-base sm:text-lg text-charcoal group-hover:text-rose transition-colors duration-300 line-clamp-2">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? "fill-gold-soft text-gold-soft"
                        : "text-beige"
                    }`}
                  />
                ))}
              </div>
              <span className="font-poppins text-[10px] text-taupe">
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2.5">
              <span className="font-poppins text-base font-semibold text-charcoal">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-poppins text-sm text-taupe line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Colors */}
            <div className="flex items-center gap-1.5 pt-1">
              {product.colors.slice(0, 3).map((color) => (
                <div
                  key={color}
                  className="w-3.5 h-3.5 rounded-full border border-beige"
                  style={{
                    backgroundColor:
                      color === "Rosewood"
                        ? "#7B3F52"
                        : color === "Dusty Pink"
                        ? "#D991A6"
                        : color === "Pearl White"
                        ? "#F5F0EB"
                        : color === "Ivory"
                        ? "#FFFFF0"
                        : color === "Midnight Blue"
                        ? "#191970"
                        : color === "Wine"
                        ? "#722F37"
                        : color === "Blush Pink"
                        ? "#F9D5D3"
                        : color === "Gold"
                        ? "#C4A96A"
                        : color === "Royal Red"
                        ? "#C41E3A"
                        : color === "Bridal Red"
                        ? "#C41E3A"
                        : color === "Charcoal"
                        ? "#2D2D2D"
                        : "#A89F91",
                  }}
                  title={color}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="font-poppins text-[10px] text-taupe">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}