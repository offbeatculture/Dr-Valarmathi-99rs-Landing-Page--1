import { Wind, Activity, Moon, Undo2, Sparkles } from "lucide-react";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Wind,
    title: "Breath Practices",
    description:
      "Simple but powerful breathing techniques to calm your nervous system and bring instant clarity."
  },
  {
    icon: Activity,
    title: "Gut & Vagus Nerve Healing",
    description:
      "Proven methods to stimulate your vagus nerve and reset your digestive system for lasting balance."
  },
  {
    icon: Moon,
    title: "Deep Sleep Restoration",
    description:
      "Techniques to switch off stress circuits, quiet your mind, and restore natural, restful sleep."
  },
  {
    icon: Undo2,
    title: "Emotional Release",
    description:
      "Gentle practices to break free from old memories and patterns that keep replaying in your mind."
  },
  {
    icon: Sparkles,
    title: "Energy Alignment Tools",
    description:
      "Unlock your body’s inner pharmacy—serotonin, melatonin, endorphins—for stable focus and vitality."
  }
];

export const HowWeHelpSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-cream">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16 fade-in">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-[#0F2925] mb-4">
            How We <span className="heading-italic">Transform</span> Your Life
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            In this 2-Day Challenge, Dr. Valarmathi will guide you through practices that reset your body, mind, and energy.
          </p>
        </div>

        {/* Row 1 — first 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {solutions.slice(0, 3).map((solution, index) => (
            <div
              key={solution.title}
              className="rounded-2xl p-8 text-center bg-[#0F2925] text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0F2925] flex items-center justify-center">
                  <solution.icon className="w-10 h-10 text-[#C6FF3E] stroke-[2.5]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 — last 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto lg:-mt-4">
          {solutions.slice(3).map((solution, i) => (
            <div
              key={solution.title}
              className="rounded-2xl p-8 text-center bg-[#0F2925] text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 fade-in"
              style={{ animationDelay: `${(i + 3) * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0F2925] flex items-center justify-center">
                  <solution.icon className="w-10 h-10 text-[#C6FF3E] stroke-[2.5]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="text-center mt-12 fade-in">
          <p className="text-lg md:text-xl text-[#0F2925] font-semibold">
            In just 2 days, you’ll feel the shift: <br />
            <span className="italic text-[#0F2925]">
              From chaotic, restless energy → to calm, focused power.
            </span>
          </p>
        </div>

        {/* Separator */}
        <div className="mt-8 mb-8 h-px w-full bg-[#E9E4D6]" />

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-3 rounded-xl font-semibold text-white bg-[#175B53] hover:bg-[#134741] transition-colors duration-300 inline-flex items-center gap-2">
            Book Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
