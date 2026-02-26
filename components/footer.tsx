"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";
import FadeIn from "./fade-in";

const footerLinks = {
  shop: [
    { name: "Ready-Made Suits", href: "/shop?category=ready-made" },
    { name: "Unstitched Suits", href: "/shop?category=unstitched" },
    { name: "Indo-Western", href: "/shop?category=indo-western" },
    { name: "Festive Collection", href: "/shop?category=festive" },
    { name: "New Arrivals", href: "/shop" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Store Locator", href: "/contact" },
    { name: "Careers", href: "#" },
  ],
  support: [
    { name: "Shipping Policy", href: "#" },
    { name: "Returns & Exchange", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="section-padding py-14 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <p className="subtitle !text-rose-light mb-3">Stay Connected</p>
              <h3 className="heading-md text-white mb-4">
                Join the Women&apos;s Villa Family
              </h3>
              <p className="body-text !text-white/50 mb-8 max-w-lg mx-auto">
                Be the first to know about new collections, exclusive offers, and
                styling tips delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white font-poppins text-sm placeholder:text-white/40 focus:outline-none focus:border-rose/50 transition-colors"
                />
                <button className="btn-rose !px-6 group flex items-center justify-center gap-2">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <h2 className="font-playfair text-3xl font-bold mb-2">
                Women&apos;s Villa
              </h2>
            </Link>
            <p className="font-poppins text-[9px] tracking-[0.4em] uppercase text-rose-light mb-6">
              Premium Fashion Boutique
            </p>
            <p className="font-poppins text-sm text-white/50 leading-relaxed mb-8 max-w-sm">
              Curating elegance since 2015. Your destination for premium Indian
              fashion that celebrates the modern woman&apos;s spirit.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose mt-0.5 flex-shrink-0" />
                <p className="font-poppins text-sm text-white/60">
                  Shop No. 42, Main Market,
                  <br />
                  Rajouri Garden, New Delhi - 110027
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rose flex-shrink-0" />
                <p className="font-poppins text-sm text-white/60">
                  +91 98765 43210 / +91 11 2345 6789
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-rose flex-shrink-0" />
                <p className="font-poppins text-sm text-white/60">
                  hello@womensvilla.com
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-playfair text-base font-semibold mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-poppins text-sm text-white/50 hover:text-rose transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-base font-semibold mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-poppins text-sm text-white/50 hover:text-rose transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-base font-semibold mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-poppins text-sm text-white/50 hover:text-rose transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-xs text-white/40">
            © {new Date().getFullYear()} Women&apos;s Villa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-rose hover:border-rose hover:text-white transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-rose hover:border-rose hover:text-white transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-rose hover:border-rose hover:text-white transition-all duration-300"
            >
              <span className="text-xs font-medium">Pin</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}