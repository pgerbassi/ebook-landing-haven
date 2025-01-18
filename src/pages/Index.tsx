import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { ObjectivesSection } from "@/components/ObjectivesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ObjectivesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default Index;