"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/20" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 w-24 h-24 border border-rose/20 rounded-full hidden xl:block"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-40 w-16 h-16 bg-rose/10 rounded-full hidden xl:block"
      />

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="subtitle !text-rose-light mb-6">
              ✦ New Season Collection 2024
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="heading-xl text-white mb-6"
          >
            Elegance
            <br />
            <span className="italic text-gradient bg-gradient-to-r from-blush via-rose-light to-rose bg-clip-text text-transparent">
              Redefined
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-poppins text-base sm:text-lg text-white/70 max-w-lg mb-10 leading-relaxed"
          >
            Discover curated collections of premium Indian fashion. From
            timeless traditional wear to contemporary fusion — find your perfect
            look.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link href="/shop" className="group">
              <span className="btn-primary !bg-white !text-charcoal hover:!bg-rose hover:!text-white flex items-center gap-3">
                Shop New Arrivals
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <Link href="/about" className="group">
              <span className="btn-secondary !border-white/40 !text-white hover:!bg-white/10 hover:!border-white flex items-center gap-3">
                <Play className="w-4 h-4" />
                Our Story
              </span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center gap-10 mt-16 pt-10 border-t border-white/10"
          >
            {[
              { number: "10K+", label: "Happy Customers" },
              { number: "500+", label: "Unique Designs" },
              { number: "9+", label: "Years of Trust" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-playfair text-2xl sm:text-3xl text-white font-semibold">
                  {stat.number}
                </p>
                <p className="font-poppins text-[10px] sm:text-xs text-white/50 tracking-wider uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="font-poppins text-[10px] text-white/40 tracking-[0.3em] uppercase">
          Scroll
        </p>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}