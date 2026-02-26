"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "./product-card";
// import QuickViewModal from "./quick-view-modal";
import FadeIn from "./fade-in";
import { Product } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuickViewModal from "./quick-view-modal";

export default function TrendingProducts() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(
    null
  );

  const trendingProducts = products.filter((p) => p.trending).slice(0, 8);

  return (
    <section className="section-padding section-spacing">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
        <FadeIn>
          <p className="subtitle mb-3">What&apos;s Hot</p>
          <h2 className="heading-lg text-charcoal">
            Trending Now
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            href="/shop"
            className="group flex items-center gap-2 font-poppins text-sm font-medium text-charcoal hover:text-rose tracking-wider uppercase transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12">
        {trendingProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onQuickView={setQuickViewProduct}
          />
        ))}
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}