"use client";

import Link from "next/link";
import Image from "next/image";
import { collections } from "@/lib/data";
import FadeIn from "./fade-in";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedCollections() {
  return (
    <section className="section-padding section-spacing bg-ivory">
      <div className="text-center mb-16">
        <FadeIn>
          <p className="subtitle mb-4">Curated For You</p>
          <h2 className="heading-lg text-charcoal mb-4">
            Our Collections
          </h2>
          <div className="luxury-divider mx-auto" />
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((collection, index) => (
          <FadeIn key={collection.id} delay={index * 0.15} direction="up">
            <Link href={`/shop?category=${collection.slug}`}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[450px] sm:h-[500px] overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-poppins text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">
                        {collection.productCount} Styles
                      </p>
                      <h3 className="font-playfair text-xl sm:text-2xl text-white font-medium mb-1">
                        {collection.name}
                      </h3>
                      <p className="font-poppins text-xs text-white/50">
                        {collection.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-rose group-hover:scale-110 transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-500" />
              </motion.div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}