"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getProduct,
  getRelatedProducts,
  formatPrice,
  Product,
} from "@/lib/data";
import ProductCard from "@/components/product-card";
import QuickViewModal from "@/components/quick-view-modal";
import FadeIn from "@/components/fade-in";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { useToast } from "@/lib/toast-context";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  Star,
  Minus,
  Plus,
  Truck,
  RefreshCw,
  Shield,
  ChevronRight,
  Share2,
} from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const product = getProduct(params.id as string);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();

  if (!product) {
    return (
      <div className="pt-36 section-padding min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-lg text-charcoal mb-4">Product Not Found</h1>
          <Link href="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);

  const handleAddToCart = () => {
    addToCart(
      product,
      selectedSize || product.sizes[0],
      selectedColor || product.colors[0]
    );
    addToast(`${product.name} added to cart!`);
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="pt-32 sm:pt-36 pb-20">
      {/* Breadcrumb */}
      <div className="section-padding mb-8">
        <nav className="flex items-center gap-2 font-poppins text-xs text-taupe">
          <Link
            href="/"
            className="hover:text-charcoal transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href="/shop"
            className="hover:text-charcoal transition-colors"
          >
            Shop
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <FadeIn direction="left">
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="hidden sm:flex flex-col gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 relative overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-rose"
                        : "border-beige hover:border-taupe"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 relative">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[3/4] overflow-hidden bg-beige/20"
                >
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-charcoal text-white font-poppins text-xs tracking-wider uppercase">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Mobile Thumbnails */}
                <div className="flex sm:hidden gap-2 mt-3 overflow-x-auto">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-20 flex-shrink-0 relative overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-rose"
                          : "border-beige"
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
            </div>
          </FadeIn>

          {/* Product Info */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <p className="subtitle mb-3">
                {product.category.replace("-", " ")}
              </p>
              <h1 className="heading-md text-charcoal mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-gold-soft text-gold-soft"
                          : "text-beige"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-poppins text-sm text-taupe">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-beige">
                <span className="font-playfair text-3xl font-semibold text-charcoal">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="font-poppins text-lg text-taupe line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="px-2.5 py-1 bg-rose/10 text-rose font-poppins text-xs font-semibold">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="body-text mb-8">{product.description}</p>

              {/* Color */}
              <div className="mb-6">
                <p className="font-poppins text-xs tracking-[0.15em] uppercase text-charcoal mb-3">
                  Color:{" "}
                  <span className="text-taupe">
                    {selectedColor || product.colors[0]}
                  </span>
                </p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border font-poppins text-xs tracking-wider transition-all duration-300 ${
                        (selectedColor || product.colors[0]) === color
                          ? "border-charcoal text-charcoal bg-beige/30"
                          : "border-beige text-taupe hover:border-taupe"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-poppins text-xs tracking-[0.15em] uppercase text-charcoal">
                    Size:{" "}
                    <span className="text-taupe">
                      {selectedSize || product.sizes[0]}
                    </span>
                  </p>
                  <button className="font-poppins text-xs text-rose underline underline-offset-2">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-12 px-4 border font-poppins text-sm tracking-wider transition-all duration-300 ${
                        (selectedSize || product.sizes[0]) === size
                          ? "bg-charcoal text-white border-charcoal"
                          : "border-beige text-charcoal hover:border-charcoal"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-poppins text-xs tracking-[0.15em] uppercase text-charcoal mb-3">
                  Quantity
                </p>
                <div className="flex items-center border border-beige w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-beige/50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-16 h-12 flex items-center justify-center font-poppins text-sm font-medium border-x border-beige">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-beige/50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 flex items-center justify-center gap-3 !py-4"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    toggleWishlist(product.id);
                    addToast(
                      isInWishlist(product.id)
                        ? "Removed from wishlist"
                        : "Added to wishlist ♡",
                      "info"
                    );
                  }}
                  className={`w-14 h-14 border flex items-center justify-center transition-all duration-300 ${
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
                <button className="w-14 h-14 border border-beige flex items-center justify-center text-charcoal hover:border-charcoal transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 p-5 bg-beige/30 border border-beige/50">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-rose flex-shrink-0" />
                  <span className="font-poppins text-[10px] text-charcoal/70">
                    Free Shipping
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-rose flex-shrink-0" />
                  <span className="font-poppins text-[10px] text-charcoal/70">
                    7-Day Returns
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-rose flex-shrink-0" />
                  <span className="font-poppins text-[10px] text-charcoal/70">
                    Secure Pay
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Details Tabs */}
        <div className="mt-20">
          <div className="flex border-b border-beige mb-8">
            {["description", "details", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-poppins text-xs tracking-[0.15em] uppercase transition-all duration-300 border-b-2 -mb-[1px] ${
                  activeTab === tab
                    ? "border-charcoal text-charcoal"
                    : "border-transparent text-taupe hover:text-charcoal"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "description" && (
            <div className="max-w-3xl">
              <p className="body-text leading-relaxed">{product.description}</p>
            </div>
          )}

          {activeTab === "details" && (
            <div className="max-w-3xl">
              <ul className="space-y-3">
                {product.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-poppins text-sm text-charcoal/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-center">
                  <p className="font-playfair text-4xl font-bold text-charcoal">
                    {product.rating}
                  </p>
                  <div className="flex items-center gap-0.5 mt-1">
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
                  <p className="font-poppins text-xs text-taupe mt-1">
                    {product.reviews} reviews
                  </p>
                </div>
              </div>
              <p className="body-text">
                Customer reviews will appear here. Be the first to review this
                product!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="section-padding mt-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="subtitle mb-2">You May Also Like</p>
              <h2 className="heading-md text-charcoal">Related Products</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
            {relatedProducts.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                index={i}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      )}

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}