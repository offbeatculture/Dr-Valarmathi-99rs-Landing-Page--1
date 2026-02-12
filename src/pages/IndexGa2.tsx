import { useEffect } from "react";
import { StrugglesSection } from "@/components/StrugglesSection";
import { HowWeHelpSection } from "@/components/HowWeHelpSection";
import { TransformationSection } from "@/components/TransformationSection";
import { CoachSection } from "@/components/CoachSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { StickyBottomCTA } from "@/components/StickyBottomCTA";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import { HeroSectionGa2 } from "@/components/HeroSectionga2";

const IndexGa2 = () => {
  useFadeInAnimation();

  useEffect(() => {
    // Update meta tags for SEO
    document.title = "Energy Transformation Challenge - From Chaotic Overthinker to Peaceful Powerhouse";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your energy in 2 days! Heal your gut, calm your mind, and reset your energy with Dr. Valarmathi Srinivasan. Join the Energy Reset Challenge for ₹99.');
    }
  }, []);
  

  return (
<main className="min-h-screen bg-[#F8F6E8]">
  <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1525232074920142&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
  <HeroSectionGa2 />
  <StrugglesSection />
  <HowWeHelpSection />
  <TransformationSection />
  <CoachSection />
  <TestimonialsSection />
  <FinalCTASection />
  <StickyBottomCTA />
</main>

  );
};

export default IndexGa2;