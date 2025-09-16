import { XCircle, CheckCircle } from "lucide-react";
import sadimage from "@/assets/sad.jpg";
import happyimage from "@/assets/happy.jpg";

export const TransformationSection = () => {
  const beforeItems = ["Chaotic nights", "IBS & bloating", "Overthinking", "Past grief", "Drained energy"];
  const afterItems = ["Peaceful sleep", "Gut freedom", "Calm focus", "Emotional lightness", "Natural power"];

  return (
    <section className="py-16 lg:py-24 px-4 bg-cream">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16 fade-up">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-wellness-text mb-4">
            Your <span className="heading-italic">Transformation</span> Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See the powerful shift from chaos to clarity in just 2 days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* BEFORE */}
          <div className="group fade-up">
            <div className="relative rounded-2xl p-[1px] bg-[linear-gradient(135deg,rgba(220,38,38,0.35),rgba(220,38,38,0.06))] transition-transform duration-300 lg:hover:-translate-y-1">
              {/* Floating portrait (outside & on top) */}
              <div className="pointer-events-none absolute -top-10 -right-10 lg:-top-12 lg:-right-12 z-20 animate-float">
                <div className="relative">
                  <img
                    src={sadimage}
                    alt="Before — sad, drained mood"
                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover ring-4 ring-white shadow-xl rotate-3 grayscale"
                  />
                  {/* red glow */}
                  <span className="absolute inset-0 -z-10 rounded-full bg-red-500/30 blur-2xl animate-glow" />
                </div>
              </div>

              <div className="relative z-10 rounded-2xl bg-white/70 backdrop-blur-sm p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-ring">
                    <XCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-semibold text-destructive tracking-tight">BEFORE</h3>
                </div>
                <ul className="space-y-4">
                  {beforeItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 bullet-in" style={{ animationDelay: `${80 + idx * 60}ms` }}>
                      <span className="mt-2 w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                      <span className="text-wellness-text/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="group fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative rounded-2xl p-[1px] bg-[linear-gradient(135deg,rgba(23,91,83,0.35),rgba(23,91,83,0.06))] transition-transform duration-300 lg:hover:-translate-y-1">
              {/* Floating portrait (outside & on top) */}
              <div className="pointer-events-none absolute -top-10 -right-10 lg:-top-12 lg:-right-12 z-20 animate-float [animation-delay:120ms]">
                <div className="relative">
                  <img
                    src={happyimage}
                    alt="After — happy, glowing mood"
                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover ring-4 ring-white shadow-xl -rotate-2"
                  />
                  {/* neon green glow */}
                  <span className="absolute inset-0 -z-10 rounded-full bg-[#C6FF3E]/40 blur-2xl animate-glow" />
                </div>
              </div>

              <div className="relative z-10 rounded-2xl bg-white/70 backdrop-blur-sm p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-ring ring-dark-green/30">
                    <CheckCircle className="w-6 h-6 text-dark-green" />
                  </div>
                  <h3 className="text-2xl font-semibold text-dark-green tracking-tight">AFTER</h3>
                </div>
                <ul className="space-y-4">
                  {afterItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 bullet-in" style={{ animationDelay: `${80 + idx * 60}ms` }}>
                      <span className="mt-2 w-2 h-2 rounded-full bg-dark-green flex-shrink-0" />
                      <span className="text-wellness-text/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-[#E9E4D6]" />
      </div>

      {/* Scoped animations */}
      <style>{`
        @keyframes fade-up { 0% { opacity: 0; transform: translateY(12px) scale(0.985); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        .fade-up { animation: fade-up 520ms ease-out both; }

        @keyframes bullet-in { 0% { opacity: 0; transform: translateX(-6px); } 100% { opacity: 1; transform: translateX(0); } }
        .bullet-in { animation: bullet-in 320ms ease-out both; }

        @keyframes float {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 3.5s ease-in-out infinite; }

        @keyframes glow {
          0%,100% { opacity: 0.55; }
          50%     { opacity: 0.95; }
        }
        .animate-glow { animation: glow 2.8s ease-in-out infinite; }

        .icon-ring {
          width: 2.5rem; height: 2.5rem;
          border-radius: 9999px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.85);
          box-shadow: 0 0 0 6px rgba(0,0,0,0.02);
          transition: transform 300ms ease, box-shadow 300ms ease;
        }
        .group:hover .icon-ring { transform: scale(1.06); box-shadow: 0 0 0 8px rgba(0,0,0,0.04); }
      `}</style>
    </section>
  );
};
