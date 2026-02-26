import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import { ToastProvider } from "@/lib/toast-context";
import ToastContainer from "@/components/toast-container";

export const metadata: Metadata = {
  title: "Women's Villa | Premium Fashion Boutique",
  description:
    "Discover curated collections of premium Indian fashion at Women's Villa. Ready-made suits, unstitched fabrics, Indo-Western wear & festive collections.",
  keywords:
    "women fashion, Indian suits, ethnic wear, indo western, festive collection, women's boutique, designer suits",
  openGraph: {
    title: "Women's Villa | Premium Fashion Boutique",
    description:
      "Your destination for premium Indian fashion that celebrates the modern woman's spirit.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <CartProvider>
          <WishlistProvider>
            <ToastProvider>
              <Navbar />
              <main className="min-h-screen">{children}</main>
              <Footer />
              <ToastContainer />
            </ToastProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}