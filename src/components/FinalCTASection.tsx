import { ArrowRight, Clock } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-20 lg:py-28 px-4 bg-[#0F2925] flex items-center justify-center">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="space-y-8 fade-in">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-medium text-sm">
            <Clock className="w-4 h-4" />
            Limited Time Offer
          </div>

          {/* Heading */}
          <h2 className="heading-serif text-2xl md:text-4xl lg:text-5xl text-white leading-snug">
            Ready to Transform Your <span className="heading-italic">Energy</span> &{" "}
            <span className="heading-italic">Life</span>?
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto">
            Join hundreds of others who have already discovered the path from chaos to clarity. 
            Your peaceful, powerful self is just 2 days away.
          </p>

          {/* Pricing */}
          <div className="space-y-3">
            <div className="text-sm text-gray-400">Regular Price: ₹299</div>
            <div className="text-3xl md:text-4xl font-bold text-[#C6FF3E]">
              Only ₹99
            </div>
            <div className="text-xs md:text-sm text-gray-400">
              30-Day Money-Back Guarantee
            </div>
          </div>

          {/* CTA Button */}
          <button className="px-6 py-3 rounded-xl font-semibold text-white bg-[#175B53] hover:bg-[#134741] transition-colors duration-300 inline-flex items-center gap-2 text-base md:text-lg">
            Secure Your Transformation Now
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Footer note */}
          <p className="text-xs md:text-sm text-gray-400">
            Enrollment closes in 48 hours • Don’t wait, start your journey today
          </p>
        </div>
      </div>
    </section>
  );
};
