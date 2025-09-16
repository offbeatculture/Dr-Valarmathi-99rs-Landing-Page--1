import { Award, BookOpen, Users, Activity, Brain, Sparkles } from "lucide-react";
import coachImage from "@/assets/coach-photo.jpg";

export const CoachSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="fade-in">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-wellness">
                <img 
                  src={coachImage} 
                  alt="Dr. Valarmathi Srinivasan - Wellness transformation coach and gut health expert"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-10 fade-in">
            <div>
              <h2 className="heading-serif text-2xl md:text-2xl lg:text-xl text-wellness-text mb-4">
                Meet Your Coach:{" "}
                <span className="heading-bold text-2xl md:text-2xl lg:text-3xl">Dr. Valarmathi Srinivasan</span>
              </h2>
              <p className="text-xl font-semibold text-dark-green mb-4">
                India’s Peak Energy Transformation Coach | Founder, Chaitanya Jyoti Kriya
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For 15+ years, Dr. Valarmathi has helped thousands transform their health, reset their energy, and reclaim their best selves—using a blend of science-backed breathwork and ancient wisdom.
              </p>
            </div>
            
         
            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                <Activity className="w-6 h-6 text-dark-green flex-shrink-0 mt-1" />
                <p className="text-wellness-text font-medium">
                  Certified in Nervous System Regulation
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                <Brain className="w-6 h-6 text-dark-green flex-shrink-0 mt-1" />
                <p className="text-wellness-text font-medium">
                  Expert in Gut–Brain Healing
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                <Sparkles className="w-6 h-6 text-dark-green flex-shrink-0 mt-1" />
                <p className="text-wellness-text font-medium">
                  Specialist in Energy Medicine & Kriya Yoga
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                <Users className="w-6 h-6 text-dark-green flex-shrink-0 mt-1" />
                <p className="text-wellness-text font-medium">
                  Helped 10,000+ People Transform
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
