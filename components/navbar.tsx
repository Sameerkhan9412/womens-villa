"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  User,
  ChevronDown,
} from "lucide-react";
import { useWishlist } from "@/lib/wishlist-context";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Shop",
    href: "/shop",
    submenu: [
      { name: "All Collections", href: "/shop" },
      { name: "Ready-Made Suits", href: "/shop?category=ready-made" },
      { name: "Unstitched Suits", href: "/shop?category=unstitched" },
      { name: "Indo-Western", href: "/shop?category=indo-western" },
      { name: "Festive Collection", href: "/shop?category=festive" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const navBg = isScrolled || !isHome || mobileOpen;

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-charcoal text-white text-center py-2 px-4 relative z-[60]">
        <p className="font-poppins text-[10px] sm:text-xs tracking-[0.2em] uppercase">
          Free shipping on orders above ₹2,999 ✦ Use code{" "}
          <span className="text-blush font-medium">VILLA15</span> for 15% off
        </p>
      </div>

      <header
        className={`fixed top-8 sm:top-[32px] left-0 right-0 z-50 transition-all duration-500 ${
          navBg
            ? "bg-white/90 backdrop-blur-xl shadow-luxury border-b border-beige/50"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left - Menu Button (Mobile) + Nav Links (Desktop) */}
            <div className="flex items-center gap-8">
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-1"
                aria-label="Open menu"
              >
                <Menu
                  className={`w-6 h-6 ${
                    navBg ? "text-charcoal" : "text-white"
                  }`}
                />
              </button>

              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() =>
                      link.submenu && setActiveSubmenu(link.name)
                    }
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 font-poppins text-[13px] font-medium tracking-[0.1em] uppercase transition-colors duration-300 ${
                        pathname === link.href
                          ? "text-rose"
                          : navBg
                          ? "text-charcoal hover:text-rose"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {link.submenu && (
                        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {link.submenu && (
                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white shadow-luxury-lg border border-beige/50 py-3"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="block px-5 py-2.5 font-poppins text-xs tracking-wider uppercase text-charcoal/70 hover:text-rose hover:bg-beige/30 transition-all duration-200"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Center - Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <div className="text-center">
                <h1
                  className={`font-playfair text-xl sm:text-2xl md:text-[28px] font-bold tracking-wide transition-colors duration-300 ${
                    navBg ? "text-charcoal" : "text-white"
                  }`}
                >
                  Women&apos;s Villa
                </h1>
                <div
                  className={`hidden sm:block font-poppins text-[8px] tracking-[0.45em] uppercase mt-0.5 transition-colors duration-300 ${
                    navBg ? "text-taupe" : "text-white/70"
                  }`}
                >
                  Premium Fashion Boutique
                </div>
              </div>
            </Link>

            {/* Right - Icons */}
            <div className="flex items-center gap-3 sm:gap-5">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`hidden sm:block p-1 transition-colors duration-300 ${
                  navBg ? "text-charcoal hover:text-rose" : "text-white/90 hover:text-white"
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/admin"
                className={`hidden sm:block p-1 transition-colors duration-300 ${
                  navBg ? "text-charcoal hover:text-rose" : "text-white/90 hover:text-white"
                }`}
              >
                <User className="w-5 h-5" />
              </Link>

              <Link
                href="/shop"
                className={`relative p-1 transition-colors duration-300 ${
                  navBg ? "text-charcoal hover:text-rose" : "text-white/90 hover:text-white"
                }`}
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose text-white text-[10px] font-poppins font-medium rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link
                href="/cart"
                className={`relative p-1 transition-colors duration-300 ${
                  navBg ? "text-charcoal hover:text-rose" : "text-white/90 hover:text-white"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-rose text-white text-[10px] font-poppins font-medium rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-white border-t border-beige/50"
            >
              <div className="section-padding py-4">
                <div className="relative max-w-xl mx-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                  <input
                    type="text"
                    placeholder="Search for suits, collections..."
                    className="w-full pl-12 pr-4 py-3 bg-beige/30 border-0 font-poppins text-sm text-charcoal placeholder:text-taupe/60 focus:outline-none focus:ring-2 focus:ring-rose/30"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[70]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[80] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h2 className="font-playfair text-2xl font-bold text-charcoal">
                      Women&apos;s Villa
                    </h2>
                    <p className="font-poppins text-[9px] tracking-[0.4em] uppercase text-taupe mt-0.5">
                      Premium Fashion Boutique
                    </p>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2"
                  >
                    <X className="w-5 h-5 text-charcoal" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        className={`block py-3.5 px-2 font-poppins text-sm tracking-[0.15em] uppercase border-b border-beige/50 transition-colors ${
                          pathname === link.href
                            ? "text-rose"
                            : "text-charcoal hover:text-rose"
                        }`}
                      >
                        {link.name}
                      </Link>
                      {link.submenu && (
                        <div className="pl-4 bg-beige/20">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block py-2.5 px-2 font-poppins text-xs tracking-wider uppercase text-taupe hover:text-rose transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-10 pt-8 border-t border-beige">
                  <p className="font-poppins text-xs text-taupe mb-4 tracking-wider uppercase">
                    Get in Touch
                  </p>
                  <p className="font-poppins text-sm text-charcoal/80 mb-2">
                    📞 +91 98765 43210
                  </p>
                  <p className="font-poppins text-sm text-charcoal/80 mb-4">
                    📧 hello@womensvilla.com
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-beige flex items-center justify-center text-charcoal hover:bg-rose hover:text-white transition-all duration-300"
                    >
                      <span className="text-xs font-medium">IG</span>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-beige flex items-center justify-center text-charcoal hover:bg-rose hover:text-white transition-all duration-300"
                    >
                      <span className="text-xs font-medium">FB</span>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-beige flex items-center justify-center text-charcoal hover:bg-rose hover:text-white transition-all duration-300"
                    >
                      <span className="text-xs font-medium">PIN</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}