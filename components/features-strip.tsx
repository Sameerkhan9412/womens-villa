"use client";

import { Truck, RefreshCw, Shield, Headphones } from "lucide-react";
import FadeIn from "./fade-in";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹2,999",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "7-day hassle-free returns",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer care",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="bg-white border-y border-beige/50">
      <div className="section-padding py-10 sm:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1}>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-beige/50 flex items-center justify-center group-hover:bg-rose/10 transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-charcoal group-hover:text-rose transition-colors duration-500" />
                </div>
                <h4 className="font-playfair text-sm sm:text-base font-semibold text-charcoal mb-1">
                  {feature.title}
                </h4>
                <p className="font-poppins text-[11px] text-taupe">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}