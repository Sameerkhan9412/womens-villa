"use client";

import Image from "next/image";
import FadeIn from "@/components/fade-in";
import { motion } from "framer-motion";
import { Heart, Award, Leaf, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Crafted with Love",
    description:
      "Every piece is carefully curated with attention to detail, quality, and comfort.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We source only the finest fabrics and work with skilled artisans across India.",
  },
  {
    icon: Leaf,
    title: "Sustainable Fashion",
    description:
      "Committed to ethical practices and sustainable sourcing of materials.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. Personalized styling and dedicated support.",
  },
];

const milestones = [
  { year: "2015", title: "The Beginning", description: "Women's Villa opens its first store in Rajouri Garden, New Delhi." },
  { year: "2017", title: "Growing Community", description: "Crossed 1,000+ happy customers and expanded our collection." },
  { year: "2019", title: "Online Presence", description: "Launched our online store to serve customers across India." },
  { year: "2021", title: "Premium Collections", description: "Introduced exclusive designer collaborations and festive lines." },
  { year: "2024", title: "Today & Beyond", description: "10,000+ customers served, continuing our journey of elegance." },
];

export default function AboutPage() {
  return (
    <div className="pt-32 sm:pt-36 pb-20">
      {/* Hero */}
      <section className="section-padding mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div>
              <p className="subtitle mb-4">Our Story</p>
              <h1 className="heading-xl text-charcoal mb-8">
                The Art of
                <br />
                <span className="italic text-rose">Indian Elegance</span>
              </h1>
              <div className="space-y-5">
                <p className="body-text text-base leading-relaxed">
                  Women&apos;s Villa is a premium fashion boutique based in the
                  heart of Rajouri Garden, New Delhi. Founded in 2015, we set
                  out with a simple mission — to bring the finest quality
                  Indian fashion to the modern woman who appreciates
                  craftsmanship, elegance, and individual expression.
                </p>
                <p className="body-text text-base leading-relaxed">
                  What started as a small boutique has grown into a beloved
                  destination for thousands of women across India. From
                  exquisite ready-made suits to luxurious unstitched fabrics,
                  from contemporary Indo-Western fusion to grand festive
                  collections — each piece in our store tells a story of
                  heritage, artistry, and modern sophistication.
                </p>
                <p className="body-text text-base leading-relaxed">
                  We believe that every woman deserves to feel extraordinary.
                  That&apos;s why we go beyond fashion — we create experiences
                  that celebrate confidence, beauty, and the unique spirit of
                  every woman who walks through our doors.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80"
                  alt="Women's Villa Boutique"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-rose text-white p-8 max-w-[200px]">
                <p className="font-playfair text-4xl font-bold mb-1">9+</p>
                <p className="font-poppins text-xs tracking-wider uppercase">
                  Years of Crafting Elegance
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 border border-rose/20" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-beige/30 section-spacing">
        <div className="section-padding">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="subtitle mb-4">What We Stand For</p>
              <h2 className="heading-lg text-charcoal mb-4">Our Values</h2>
              <div className="luxury-divider mx-auto" />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 text-center shadow-luxury border border-beige/30 h-full"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rose/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-rose" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="body-text text-sm">{value.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing">
        <div className="section-padding">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="subtitle mb-4">Our Journey</p>
              <h2 className="heading-lg text-charcoal mb-4">Milestones</h2>
              <div className="luxury-divider mx-auto" />
            </FadeIn>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <FadeIn key={milestone.year} delay={index * 0.1}>
                <div className="flex gap-6 sm:gap-10 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center font-playfair text-sm font-semibold flex-shrink-0">
                      {milestone.year.slice(2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-[1px] h-full bg-beige mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="font-poppins text-[10px] tracking-[0.3em] uppercase text-rose mb-1">
                      {milestone.year}
                    </p>
                    <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">
                      {milestone.title}
                    </h3>
                    <p className="body-text">{milestone.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <FadeIn>
          <div className="relative overflow-hidden bg-charcoal text-white p-12 sm:p-16 md:p-20 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-luxury" />
            </div>
            <div className="relative z-10">
              <p className="subtitle !text-rose-light mb-4">
                Visit Our Store
              </p>
              <h2 className="heading-lg text-white mb-6 max-w-2xl mx-auto">
                Experience Elegance in Person
              </h2>
              <p className="font-poppins text-sm text-white/60 mb-8 max-w-lg mx-auto">
                Visit our boutique in Rajouri Garden, New Delhi and discover
                the magic of Women&apos;s Villa firsthand.
              </p>
              <a href="/contact" className="btn-rose">
                Get Directions
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}