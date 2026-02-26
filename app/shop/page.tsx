"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  products,
  categories,
  priceRanges,
  sortOptions,
  Product,
} from "@/lib/data";
import ProductCard from "@/components/product-card";
import QuickViewModal from "@/components/quick-view-modal";
import FadeIn from "@/components/fade-in";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlidersHorizontal,
  X,
  Grid3X3,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSort, setSelectedSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [gridCols, setGridCols] = useState<3 | 4>(4);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPrice !== "all") {
      const [min, max] = selectedPrice.split("-").map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // Sort
    switch (selectedSort) {
      case "newest":
        result = result.filter((p) => p.new).concat(result.filter((p) => !p.new));
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result = result
          .filter((p) => p.featured)
          .concat(result.filter((p) => !p.featured));
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedSort]);

  return (
    <div className="pt-32 sm:pt-36 pb-20">
      {/* Page Header */}
      <div className="section-padding mb-12">
        <FadeIn>
          <div className="text-center">
            <p className="subtitle mb-3">Discover</p>
            <h1 className="heading-lg text-charcoal mb-4">Our Collection</h1>
            <p className="body-text max-w-lg mx-auto">
              Explore our carefully curated selection of premium Indian fashion.
              Each piece tells a story of craftsmanship and elegance.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Filters Bar */}
      <div className="section-padding mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-beige">
          {/* Left - Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex-shrink-0 px-4 py-2 font-poppins text-xs tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? "bg-charcoal text-white"
                    : "text-taupe hover:text-charcoal hover:bg-beige/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right - Controls */}
          <div className="flex items-center gap-3">
            <span className="font-poppins text-xs text-taupe">
              {filteredProducts.length} products
            </span>

            {/* Sort Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 border border-beige font-poppins text-xs tracking-wider uppercase text-charcoal hover:border-charcoal transition-colors">
                <span className="hidden sm:inline">Sort by:</span>
                {sortOptions.find((s) => s.value === selectedSort)?.label}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute right-0 top-full mt-1 w-48 bg-white shadow-luxury-lg border border-beige/50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelectedSort(opt.value)}
                    className={`block w-full text-left px-4 py-2 font-poppins text-xs tracking-wider ${
                      selectedSort === opt.value
                        ? "text-rose bg-beige/30"
                        : "text-charcoal/70 hover:bg-beige/30 hover:text-charcoal"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="sm:hidden flex items-center gap-2 px-4 py-2 border border-beige font-poppins text-xs tracking-wider uppercase text-charcoal"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter
            </button>

            {/* Grid Toggle */}
            <div className="hidden lg:flex border border-beige">
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 ${
                  gridCols === 3 ? "bg-charcoal text-white" : "text-taupe"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 ${
                  gridCols === 4 ? "bg-charcoal text-white" : "text-taupe"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      <AnimatePresence>
        {filtersOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="section-padding overflow-hidden mb-8"
          >
            <div className="p-6 bg-beige/20 border border-beige/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-lg font-semibold">Filters</h3>
                <button onClick={() => setFiltersOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mb-4">
                <p className="font-poppins text-xs tracking-wider uppercase text-charcoal mb-3">
                  Price Range
                </p>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setSelectedPrice(range.value)}
                      className={`px-3 py-1.5 font-poppins text-xs border transition-all ${
                        selectedPrice === range.value
                          ? "bg-charcoal text-white border-charcoal"
                          : "border-beige text-charcoal hover:border-rose"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar + Products */}
      <div className="section-padding">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden sm:block w-60 flex-shrink-0">
            <div className="sticky top-36">
              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-playfair text-base font-semibold text-charcoal mb-4">
                  Price Range
                </h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setSelectedPrice(range.value)}
                      className={`block w-full text-left px-3 py-2 font-poppins text-xs tracking-wider transition-all duration-300 ${
                        selectedPrice === range.value
                          ? "text-rose bg-rose/5 border-l-2 border-rose"
                          : "text-charcoal/60 hover:text-charcoal hover:bg-beige/30 border-l-2 border-transparent"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric Filter (decorative) */}
              <div className="mb-8">
                <h4 className="font-playfair text-base font-semibold text-charcoal mb-4">
                  Fabric
                </h4>
                <div className="space-y-2">
                  {[
                    "Georgette",
                    "Silk",
                    "Cotton",
                    "Chiffon",
                    "Velvet",
                    "Net",
                  ].map((fabric) => (
                    <label
                      key={fabric}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="w-4 h-4 border border-beige group-hover:border-rose transition-colors" />
                      <span className="font-poppins text-xs text-charcoal/60 group-hover:text-charcoal transition-colors">
                        {fabric}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div
                className={`grid gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 ${
                  gridCols === 3
                    ? "grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="heading-sm text-charcoal/40 mb-4">
                  No products found
                </p>
                <p className="body-text">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedPrice("all");
                  }}
                  className="btn-secondary mt-6"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-36 section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i}>
                <div className="aspect-[3/4] skeleton mb-4" />
                <div className="h-3 skeleton w-20 mb-2" />
                <div className="h-5 skeleton w-3/4 mb-2" />
                <div className="h-4 skeleton w-1/3" />
              </div>
            ))}
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}