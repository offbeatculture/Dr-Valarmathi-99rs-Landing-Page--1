import { ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";

export const StickyBottomCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = (documentHeight - windowHeight) * 0.15;
      setIsVisible(scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || dismissed) return null;

  return (
    <div
      className="
        fixed inset-x-0 bottom-0 z-50
        px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2
        lg:hidden
        animate-slide-up
      "
      role="region"
      aria-label="Sticky CTA"
    >
      <div
        className="
          mx-auto max-w-xl
          relative rounded-2xl
          bg-[#0F2925] text-white
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          overflow-hidden
        "
      >
        {/* Soft golden glow border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-[#FDE68A]/50 pointer-events-none animate-glow" />

        <div className="flex items-center gap-3 px-4 py-3 relative z-10">
          {/* Text */}
          <div className="min-w-0">
            <div className="text-sm font-semibold truncate">
              From Chaos → Calm
            </div>
            <div className="text-xs text-[#FDE68A] font-medium animate-price-pop">
              2-Day Energy Reset • Just ₹99
            </div>
          </div>

          {/* CTA */}
          <button
            className="
              ml-auto inline-flex items-center gap-2
              rounded-full px-4 py-2
              font-semibold text-[#0F2925]
              bg-[#FDE68A] hover:bg-[#fcd34d]
              transition-transform duration-300
              active:scale-95
              shadow-[0_6px_20px_rgba(253,230,138,0.35)]
            "
            onClick={() => window.open("https://rzp.io/rzp/er-bootcamp-99", "_blank")}
          >
            Book Now
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Dismiss */}
          <button
            aria-label="Close"
            onClick={() => setDismissed(true)}
            className="shrink-0 rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
            
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slide-up {
          0% { transform: translateY(16px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 320ms ease-out both; }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 8px rgba(253,230,138,0.4), 0 0 16px rgba(253,230,138,0.25); }
          50% { box-shadow: 0 0 14px rgba(253,230,138,0.6), 0 0 28px rgba(253,230,138,0.35); }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }

        @keyframes price-pop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.07); }
        }
        .animate-price-pop { animation: price-pop 2.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};
