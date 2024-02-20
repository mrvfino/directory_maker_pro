import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import NavigationBar from "@/components/navigation-bar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
