import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-cream px-4 py-10 md:py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* === MOBILE VERSION (stacked) === */}
          <div className="order-1 lg:hidden space-y-6 fade-in text-center">
            {/* Heading */}
            <h1 className="font-lora text-[#312B24] text-[32px] leading-tight">
              From <span className="font-medium italic">Chaotic Overthinker</span><br />
              To <span className="font-medium italic">Peaceful Powerhouse</span>
            </h1>

            {/* Subheadline with dots in one line */}
            <h2 className="text-sm font-bold tracking-tight whitespace-nowrap">
              <span className="text-[#1E3A8A]">Heal your gut</span> •{" "}
              <span className="text-[#B91C1C]">Calm your mind</span> •{" "}
              <span className="text-[#14532D]">Reset your energy</span>
            </h2>
          </div>

          {/* Image (mobile centered, desktop right column) */}
          <div className="order-2 lg:order-2 fade-in">
            <div className="mx-auto w-full max-w-[420px] sm:max-w-none aspect-[3/4] sm:aspect-[3/4] md:aspect-[4/5] max-h-[320px] sm:max-h-none rounded-3xl overflow-hidden shadow-wellness">
              <img
                src={heroImage}
                alt="Peaceful woman meditating in a serene, light-filled space representing energy transformation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile details + CTA */}
          <div className="order-3 lg:hidden space-y-4 fade-in text-center">
            <p className="text-base text-wellness-text/80 leading-relaxed">
              2-Day Energy Reset Challenge with Dr. Valarmathi Srinivasan —{" "}
              <span className="inline-block font-bold text-primary-dark bg-[#FDE68A] px-3 py-1 rounded-lg animate-pulse-slow">
                Join today for just ₹99
              </span>
            </p>

            

            <button className="hero-cta group w-full sm:w-auto bg-[#175B53] hover:bg-[#134741] transition-colors duration-300 mx-auto">
              <div className="cta-content">
                <span className="cta-text">Book Your Spot Now</span>
                <div className="cta-icon">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>

            <div className="flex justify-center items-center gap-2 text-sm text-wellness-text font-bold">
              <Calendar className="w-4 h-4 text-primary-dark" />
              <span>Sunday, 21 September — 11:00 AM IST</span>
            </div>
            
          </div>

          {/* === DESKTOP VERSION (two-column original) === */}
          <div className="hidden lg:block order-1 space-y-6 fade-in">
            <h1 className="heading-serif text-5xl lg:text-6xl xl:text-7xl text-wellness-text leading-tight">
              From <span className="font-medium italic">Chaotic Overthinker</span> →<br />
              To <span className="font-medium italic">Peaceful Powerhouse</span>
            </h1>

            <h2 className="text-lg lg:text-2xl font-bold tracking-tight whitespace-nowrap">
              <span className="text-[#1E3A8A]">Heal your gut</span> •{" "}
              <span className="text-[#B91C1C]">Calm your mind</span> •{" "}
              <span className="text-[#14532D]">Reset your energy</span>
            </h2>

            <p className="text-xl text-wellness-text/80 leading-relaxed">
              2-Day Energy Reset Challenge with Dr. Valarmathi Srinivasan —{" "}
              <span className="inline-block font-bold text-primary-dark bg-[#FDE68A] px-3 py-1 rounded-lg animate-pulse-slow">
                Join today for just ₹99
              </span>
            </p>

            

            <button className="hero-cta group bg-[#175B53] hover:bg-[#134741] transition-colors duration-300 mx-auto">
              <div className="cta-content">
                <span className="cta-text text-white">Book Your Spot Now</span>
                <div className="cta-icon">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
            <div className="flex items-center gap-3 text-base text-wellness-text font-bold">
              <Calendar className="w-5 h-5 text-primary-dark" />
              <span>Sunday, 21 September — 11:00 AM IST</span>
            </div>
          </div>

        </div>

        {/* Separator line */}
        <div className="mt-8 md:mt-12 h-px w-full bg-[#E9E4D6]" />
      </div>
    </section>
  );
};
