import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { LogosSection } from "@/components/sections/logos-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { PricingIntelSection } from "@/components/sections/pricing-intel-section";
import { MobileSection } from "@/components/sections/mobile-section";
import { AiSection } from "@/components/sections/ai-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LogosSection />
        <FeaturesSection />
        <ShowcaseSection />
        <PricingIntelSection />
        <MobileSection />
        <AiSection />
        <PricingSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
