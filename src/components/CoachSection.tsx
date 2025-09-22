import { Activity, Brain, Sparkles, Users, Award } from "lucide-react";
import coachImage from "@/assets/Valar.png";

export const CoachSection = () => {
  return (
    <section className="px-4 py-14 lg:py-20 bg-[#F8F6E8]">
      {/* light separators */}
      <div className="mx-auto max-w-6xl h-px bg-[#E9E4D6] mb-10" />

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Photo (mobile after heading, desktop left) */}
        <div className="order-2 lg:order-1">
          <div className="relative max-w-md mx-auto">
            {/* Increased height on mobile, square again on lg+ */}
            <div className="rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.12)] h-[420px] sm:h-[480px] lg:h-auto lg:aspect-square">
              <img
                src={coachImage}
                alt="Dr. Valarmathi Srinivasan - Wellness transformation coach and gut health expert"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 space-y-6">
          {/* Mobile-first heading */}
          <div>
            <h2 className="heading-serif text-2xl md:text-3xl text-[#312B24]">
              Meet your <span className="heading-italic">Coach</span>
            </h2>

            {/* Name */}
            <p className="mt-2 text-2xl md:text-3xl font-semibold text-[#312B24]">
              Dr. Valarmathi Srinivasan
            </p>

            {/* Two highlight badges (use #0F2925) */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-[#0F2925] text-white text-xs md:text-sm px-3 py-1">
                India’s Peak Energy Transformation Coach
              </span>
              <span className="inline-flex items-center rounded-full bg-[#0F2925] text-white text-xs md:text-sm px-3 py-1">
                Founder — Chaitanya Jyoti Kriya
              </span>
            </div>

            {/* Unicorn Awards ribbon */}
            <div className="mt-4 flex items-center justify-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0F2925] text-white px-4 py-2 shadow-sm">
                <Award className="w-4 h-4 text-[#FDE68A]" />
                <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">
                  Unicorn Coach Award
                </span>
                <Award className="w-4 h-4 text-[#FDE68A]" />
              </div>
            </div>

            {/* Short description */}
            <p className="mt-4 text-[#312B24]/80 md:text-lg leading-relaxed">
              For 15+ years, Dr. Valarmathi has helped thousands transform
              their health, reset their energy, and reclaim their best selves—using a
              blend of science-backed breathwork and ancient wisdom.
            </p>
          </div>

          {/* Credentials — 2 per row on mobile/desktop */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#0F2925] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-0.5">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#C6FF3E] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Certified in Nervous System Regulation
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#0F2925] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-0.5">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-[#C6FF3E] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Expert in Gut–Brain Healing
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#0F2925] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-0.5">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#C6FF3E] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Specialist in Energy Medicine & Kriya Yoga
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#0F2925] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-0.5">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#C6FF3E] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Helped 10,000+ People Transform
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom separator */}
      <div className="mx-auto max-w-6xl h-px bg-[#E9E4D6] mt-10" />
    </section>
  );
};
