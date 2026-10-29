import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <Newsletter />
    </main>
  );
}
