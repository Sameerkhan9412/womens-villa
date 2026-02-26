"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data";
import FadeIn from "./fade-in";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-spacing bg-ivory overflow-hidden">
      <div className="section-padding">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="subtitle mb-4">Testimonials</p>
            <h2 className="heading-lg text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <div className="luxury-divider mx-auto" />
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-0">
            <Quote className="w-20 h-20 text-beige" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center relative z-10"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-soft text-gold-soft"
                    />
                  )
                )}
              </div>

              {/* Text */}
              <p className="font-playfair text-xl sm:text-2xl md:text-3xl text-charcoal/80 italic leading-relaxed mb-10 max-w-2xl mx-auto">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-rose flex items-center justify-center mb-3">
                  <span className="font-playfair text-lg font-semibold text-white">
                    {testimonials[current].avatar}
                  </span>
                </div>
                <p className="font-playfair text-lg font-semibold text-charcoal">
                  {testimonials[current].name}
                </p>
                <p className="font-poppins text-xs text-taupe tracking-wider">
                  {testimonials[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-beige flex items-center justify-center hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-rose w-8" : "bg-beige hover:bg-taupe"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-beige flex items-center justify-center hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}