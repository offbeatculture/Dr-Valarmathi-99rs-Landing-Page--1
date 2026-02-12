import { Wind, Activity, Moon, Undo2, Sparkles, ArrowRight } from "lucide-react";
import { motion, type Variants, type Transition } from "framer-motion";
import { useEffect } from "react";

const solutions = [
  {
    icon: Wind,
    title: "Breath Practices",
    description:
      "Simple but powerful breathing techniques to calm your nervous system and bring instant clarity.",
  },
  {
    icon: Activity,
    title: "Gut & Vagus Nerve Healing",
    description:
      "Proven methods to stimulate your vagus nerve and reset your digestive system for lasting balance.",
  },
  {
    icon: Moon,
    title: "Deep Sleep Restoration",
    description:
      "Techniques to switch off stress circuits, quiet your mind, and restore natural, restful sleep.",
  },
  {
    icon: Undo2,
    title: "Emotional Release",
    description:
      "Gentle practices to break free from old memories and patterns that keep replaying in your mind.",
  },
  {
    icon: Sparkles,
    title: "Energy Alignment Tools",
    description:
      "Unlock your body’s inner pharmacy—serotonin, melatonin, endorphins—for stable focus and vitality.",
  },
];

const spring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 22,
  mass: 0.6,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, rotateX: 8, y: 18, transition: spring },
  show: { opacity: 1, rotateX: 0, y: 0, transition: spring },
};

export const HowWeHelpSection = () => {
  /** ✅ Scroll to form */
  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#register";
    }
  };

  return (
    <section className="py-12 lg:py-16 px-4 md:px-6 bg-[#F8F6E8]">
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="heading-serif text-xl md:text-3xl lg:text-4xl text-[#0F2925] mb-2">
            How We <span className="heading-italic">Transform</span> Your Life
          </h2>
          <p className="text-sm md:text-base text-[#0F2925]/80 max-w-2xl mx-auto">
            In this 2-Day Challenge, Dr. Valarrmathi will guide you through
            practices that reset your body, mind, and energy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className="p-5 md:p-6 rounded-xl bg-[#0F2925] text-white
                           shadow-md hover:shadow-lg transition-transform
                           duration-300 hover:-translate-y-1"
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Icon className="w-7 h-7 text-[#FDE68A] mb-3 mx-auto" />
                <h3 className="text-base md:text-lg font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-snug">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing line */}
        <div className="text-center mt-8">
          <p className="text-sm md:text-lg text-[#0F2925] font-semibold">
            In just 2 days, you’ll feel the shift:{" "}
            <span className="italic">
              From chaotic, restless energy → to calm, focused power.
            </span>
          </p>
        </div>

        {/* Separator */}
        <div className="mt-6 mb-6 h-px w-full bg-[#E9E4D6]" />

        {/* ✅ CENTERED CTA */}
        <div className="flex justify-center">
          <button
            onClick={scrollToRegister}
            className="
              group inline-flex items-center justify-between
              rounded-full border border-[#E5E3DA]
              bg-[#F8F6E8] px-6 py-3
              shadow-sm hover:shadow-md
              transition-all duration-300
            "
          >
            <span className="text-sm md:text-base font-bold text-[#312B24]">
              Book My Spot Now
            </span>
            <span
              className="ml-3 flex items-center justify-center
                         w-9 h-9 rounded-full
                         bg-[#0F2925] group-hover:bg-[#134741]
                         transition-colors duration-300"
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
