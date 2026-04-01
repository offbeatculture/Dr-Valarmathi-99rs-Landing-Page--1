import { useEffect } from "react";
import { HeroSectionGa } from "@/components/ga5/HeroSectionGa";
import { StrugglesSectionGa } from "@/components/ga5/StrugglesSectionGa";
import { HowWeHelpSectionGa } from "@/components/ga5/HowWeHelpSectionGa";
import { TransformationSectionGa } from "@/components/ga5/TransformationSectionGa";
import { CoachSectionGa } from "@/components/ga5/CoachSectionGa";
import { TestimonialsSectionGa } from "@/components/ga5/TestimonialsSectionGa";
import { FAQSectionGa } from "@/components/ga5/FAQSectionGa";
import { FinalCTASectionGa } from "@/components/ga5/FinalCTASectionGa";
import { StickyBottomCTAGa } from "@/components/ga5/StickyBottomCTAGa";
import {ThankYouPageGa } from "@/components/ga5/ThankuGa";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import { useFacebookPixel } from "@/hooks/useFacebookPixelHome";

const IndexGa5 = () => {
  useFadeInAnimation();

  useEffect(() => {
    // Update meta tags for SEO
    document.title = "Energy Transformation Challenge - From Chaotic Overthinker to Peaceful Powerhouse";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your energy in 2 days! Heal your gut, calm your mind, and reset your energy with Dr. Valarmathi Srinivasan. Join the Energy Reset Challenge for ₹99.');
    }
  }, []);
  useFacebookPixel();

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
  <HeroSectionGa />
  <StrugglesSectionGa />
  <HowWeHelpSectionGa />
  <TransformationSectionGa />
  <CoachSectionGa />
  <TestimonialsSectionGa />
  <FinalCTASectionGa />
  <StickyBottomCTAGa />
</main>

  );
};

export default IndexGa5;