import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/pricing-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <hr className="border-1 mx-8 my-8 h-px" />
      <FeaturesSection />
      <hr className="border-1 mx-8 my-8 h-px" />
      <PricingSection />
    </div>
  );
}
