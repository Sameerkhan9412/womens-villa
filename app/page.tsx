import HeroSection from "@/components/hero-section";
import MarqueeBanner from "@/components/marquee-banner";
import FeaturedCollections from "@/components/featured-collections";
import TrendingProducts from "@/components/trending-products";
import AboutPreview from "@/components/about-preview";
import FeaturesStrip from "@/components/features-strip";
import Testimonials from "@/components/testimonials";
import InstagramGallery from "@/components/instagram-gallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeBanner />
      <FeaturedCollections />
      <TrendingProducts />
      <AboutPreview />
      <FeaturesStrip />
      <Testimonials />
      <InstagramGallery />
    </>
  );
}