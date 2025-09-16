import { Moon, Activity, Flame, History, BatteryLow } from "lucide-react";

const struggles = [
  { icon: Moon, title: "Sleepless Nights", description: "Tossing and turning at 2 AM with a racing mind that refuses to slow down." },
  { icon: Activity, title: "Restless & Anxious Mornings", description: "Waking up heavy, bloated, and restless—your body feels out of balance." },
  { icon: Flame, title: "Digestive & Inflammatory Pain", description: "IBS, chest burn, migraines, and inflammation keep draining your comfort and focus." },
  { icon: History, title: "Trapped in the Past", description: "Old memories replay like a broken tape, holding you back from peace and progress." },
  { icon: BatteryLow, title: "Drained Energy", description: "Even after a full night’s sleep, you wake up tired, struggling to power through the day." }
];

export const StrugglesSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16 fade-in">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-wellness-text mb-4">
            The Struggles That Keep You <span className="heading-italic">Stuck</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            You're not alone. These struggles are deeply connected—and they’re more common than you think.
          </p>
        </div>

        {/* Row 1 - First 3 struggles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {struggles.slice(0, 3).map((struggle, index) => (
            <div
              key={index}
              className="
                group relative
                rounded-2xl p-6 text-center
                bg-white/40 backdrop-blur-md
                border border-white/40
                shadow-[0_6px_30px_rgba(0,0,0,0.06)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]
                fade-up
              "
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon pill */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-cream-dark/60 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <struggle.icon className="w-8 h-8 text-dark-green stroke-2" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-wellness-text mb-3">
                {struggle.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {struggle.description}
              </p>

              {/* soft focus ring on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-dark-green/0 group-hover:ring-2 group-hover:ring-dark-green/10 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Row 2 - Remaining 2 struggles, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto">
          {struggles.slice(3).map((struggle, index) => (
            <div
              key={index + 3}
              className="
                group relative
                rounded-2xl p-6 text-center
                bg-white/40 backdrop-blur-md
                border border-white/40
                shadow-[0_6px_30px_rgba(0,0,0,0.06)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]
                fade-up
              "
              style={{ animationDelay: `${(index + 3) * 0.15}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-cream-dark/60 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <struggle.icon className="w-8 h-8 text-dark-green stroke-2" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-wellness-text mb-3">
                {struggle.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {struggle.description}
              </p>

              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-dark-green/0 group-hover:ring-2 group-hover:ring-dark-green/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
