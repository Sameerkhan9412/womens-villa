"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "./fade-in";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section-spacing bg-beige/40 overflow-hidden">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <Image
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80"
                  alt="About Women's Villa"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 sm:right-10 bg-white shadow-luxury-lg p-6 sm:p-8 max-w-[240px]">
                <p className="font-playfair text-4xl font-bold text-rose mb-1">
                  9+
                </p>
                <p className="font-poppins text-xs tracking-wider uppercase text-charcoal">
                  Years of Crafting Elegance
                </p>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-rose/20" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.2}>
            <div className="max-w-lg">
              <p className="subtitle mb-4">Our Story</p>
              <h2 className="heading-lg text-charcoal mb-6">
                Where Tradition
                <br />
                Meets <span className="italic text-rose">Grace</span>
              </h2>
              <p className="body-text mb-6">
                Women&apos;s Villa is a premium fashion boutique based in the
                heart of Rajouri Garden, New Delhi. Since 2015, we have been
                curating the finest collection of women&apos;s ethnic and
                contemporary fashion that celebrates the elegance and spirit of
                the modern Indian woman.
              </p>
              <p className="body-text mb-8">
                Every piece in our collection is thoughtfully selected — from
                luxurious fabrics to intricate embroidery — ensuring you feel
                nothing less than extraordinary.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10 pt-6 border-t border-beige">
                {[
                  { number: "500+", label: "Designs" },
                  { number: "10K+", label: "Customers" },
                  { number: "100%", label: "Authentic" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-playfair text-2xl font-semibold text-charcoal">
                      {stat.number}
                    </p>
                    <p className="font-poppins text-[10px] tracking-wider uppercase text-taupe mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/about" className="group">
                <span className="btn-secondary flex items-center gap-2 w-fit">
                  Read Our Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}