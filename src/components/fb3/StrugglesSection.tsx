import { Moon, Activity, Flame, History, BatteryLow } from "lucide-react";

const struggles = [
  { 
    icon: Moon, 
    title: "Mindfulness", 
    description: "Learn to reconnect with the present moment through calming breath." 
  },
  { 
    icon: Activity, 
    title: "Wellness Mastery", 
    description: "Experience powerful, easy-to-follow methods taught in the masterclass to help you build healthier habits and a stronger, more balanced mindset." 
  },
  { 
    icon: Flame, 
    title: "Digestive & Inflammatory Pain", 
    description: "IBS, chest burn, migraines, and inflammation keep draining your comfort and focus." 
  },
  { 
    icon: History, 
    title: "Trapped in the Past", 
    description: "Old memories replay like a broken tape, holding you back from peace and progress." 
  },
  { 
    icon: BatteryLow, 
    title: "Drained Energy", 
    description: "Even after a full night’s sleep, you wake up tired, struggling to power through the day." 
  }
];

export const StrugglesSection = () => {
  return (
    <section className="py-2 lg:py-16 px-4 bg-[#F8F6E8]">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-left lg:text-center mb-8 lg:mb-10">
          <h2 className="heading-serif text-xl md:text-3xl lg:text-4xl text-[#312B24] mb-2">
            The Struggles That Keep You <span className="heading-italic">Stuck</span>
          </h2>
          <p className="text-sm md:text-base text-[#312B24]/70 max-w-2xl mx-auto">
            You're not alone. These struggles are deeply connected—and they’re more common than you think.
          </p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-left lg:text-center">
          {struggles.map((s, i) => (
            <div
              key={i}
              className="flex items-start lg:items-center gap-3 py-5 border-b border-[#E9E4D6] md:pr-4"
            >
              {/* Icon */}
              <s.icon className="w-6 h-6 shrink-0 text-[#175B53] stroke-[1.6] mx-0 lg:mx-auto" />

              {/* Text block */}
              <div className="lg:mx-auto">
                <h3 className="heading-serif text-base md:text-lg text-[#312B24] mb-1">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-[#312B24]/70 leading-snug">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
