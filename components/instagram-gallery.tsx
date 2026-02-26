"use client";

import Image from "next/image";
import { instagramImages } from "@/lib/data";
import FadeIn from "./fade-in";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function InstagramGallery() {
  return (
    <section className="section-spacing">
      <div className="text-center mb-14 section-padding">
        <FadeIn>
          <p className="subtitle mb-4">Follow Us</p>
          <h2 className="heading-lg text-charcoal mb-3">
            @womensvilla
          </h2>
          <p className="body-text max-w-lg mx-auto">
            Join our community and get inspired by the latest styles, behind-the-scenes content, and exclusive previews.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 sm:gap-2">
        {instagramImages.map((img, index) => (
          <FadeIn key={index} delay={index * 0.1} direction="none">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square block overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={img}
                alt={`Instagram post ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
              </div>
            </motion.a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}