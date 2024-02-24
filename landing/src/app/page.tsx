import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import NavigationBar from "@/components/navigation-bar";
import PricingSection from "@/components/pricing-section";
import ReviewsSection from "@/components/reviews-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <HeroSection />
      <hr className="border-1 mx-8 my-8 h-px" />
      <FeaturesSection />
      <hr className="border-1 mx-8 my-8 h-px" />
      <PricingSection />
      <hr className="border-1 mx-8 my-8 h-px" />
      <ReviewsSection />
    </div>
  );
}
