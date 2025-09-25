import { Activity, Brain, Sparkles, Users, Trophy, BadgeCheck } from "lucide-react";
import coachImage from "@/assets/Valar.png";

// ⬇️ Add your certificate image(s)
import certificate1 from "@/assets/Certificate.jpeg"; // change the path/name to your file

export const CoachSection = () => {
  return (
    <section className="px-4 py-2 lg:py-20 bg-[#F8F6E8]">
      {/* light top separator */}
      <div className="mx-auto max-w-6xl h-px bg-[#E9E4D6] mb-10" />

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* ===== LEFT: Photo + awards + CERTIFICATE ===== */}
        <div className="order-2 lg:order-1">
          <div className="relative max-w-md mx-auto w-full">
            {/* Coach image (taller on mobile) */}
            <div className="rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.12)] h-[420px] sm:h-[480px] lg:h-auto lg:aspect-square">
              <img
                src={coachImage}
                alt="Dr. Valarmathi Srinivasan - Wellness transformation coach and gut health expert"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Awards — one line; scrolls if tight */}
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-[#0F2925] font-bold">
              <span className="inline-flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#175B53]" />
                Unicorn Coach Award
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-[#175B53]" />
                Certified Breath Coach
              </span>
            </div>

            {/* Certificate block (replaces testimonials) */}
            <div className="mt-5">
              <div
                className="
                  rounded-2xl border border-[#E9E4D6] bg-white
                  shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                  p-3 sm:p-4
                "
              >
                <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px] rounded-xl overflow-hidden bg-[#FAF9F2] flex items-center justify-center">
                  <img
                    src={certificate1}
                    alt="Certification — Breath Coach"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                {/* Optional caption line */}
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT: Content ===== */}
        <div className="order-1 lg:order-2 space-y-6">
          <div>
            <h2 className="heading-serif text-lg md:text-3xl text-[#312B24]">
              Meet your <span className="heading-italic">Coach</span>
            </h2>
            <p className="mt-2 text-xl md:text-3xl font-bold text-[#312B24]">
             Dr. Valarrmathi Srinivasan
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-[#0F2925] text-white text-xs md:text-sm px-3 py-1">
                India’s Peak Energy Transformation Coach
              </span>
              <span className="inline-flex items-center rounded-full bg-[#0F2925] text-white text-xs md:text-sm px-3 py-1">
                Founder — Chaitanya Jyoti Kriya
              </span>
            </div>

            <p className="mt-4 text-[#312B24]/80 md:text-lg leading-relaxed">
              For 15+ years, Dr Valarrmathi  has helped thousands transform their
              health, reset their energy, and reclaim their best selves—using a blend
              of science-backed breathwork and ancient wisdom.
            </p>
          </div>

          {/* Credentials grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#0F2925] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDE68A] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Certified in Nervous System Regulation
              </p>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#0F2925] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDE68A] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Expert in Gut–Brain Healing
              </p>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#0F2925] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDE68A] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Specialist in Energy Medicine & Kriya Yoga
              </p>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#0F2925] text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDE68A] flex-shrink-0 mt-0.5" />
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
