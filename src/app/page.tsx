import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AIInteractionSection } from "@/components/sections/AIInteractionSection";
import { TrustAudienceSection } from "@/components/sections/TrustAudienceSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen pt-20">
        <HeroSection />
        <ProblemSolutionSection />
        <ProductShowcaseSection />
        <FeaturesSection />
        <AIInteractionSection />
        <TrustAudienceSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
