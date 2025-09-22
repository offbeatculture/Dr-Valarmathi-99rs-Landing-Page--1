import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anita",
    location: "Bangalore",
    content:
      "I came in feeling drained and left feeling energized and clear. It’s more than wellness — it’s a reset for the soul.",
  },
  {
    name: "Ramesh",
    location: "Chennai",
    content:
      "I didn’t think breathwork could change my life until I tried it here. Now it’s part of my daily routine.",
  },
  {
    name: "Meera",
    location: "Delhi",
    content:
      "After my sessions, I found a calm I hadn’t experienced in years. It helped me reconnect with myself.",
  },
  {
    name: "Arjun",
    location: "Hyderabad",
    content:
      "The 2-Day Reset changed my energy completely. I feel light, peaceful, and focused.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-[#F8F6E8]">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-left lg:text-center mb-10 lg:mb-16">
          <h2 className="heading-serif text-xl md:text-3xl lg:text-5xl text-[#0F2925] mb-3">
            Real <span className="heading-italic">Transformations</span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl lg:mx-auto">
            Hear what others have experienced during the 2-Day Reset.
          </p>
        </div>

        {/* Horizontal scroll (carousel style) */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-cream-light rounded-xl border border-[#E9E4D6] shadow-sm p-6 w-[300px] sm:w-[320px] flex-shrink-0"
              >
                {/* Quotation mark */}
                <Quote className="w-8 h-8 text-[#E9E4D6] mb-4" />

                {/* Content */}
                <p className="italic text-[#312B24] leading-relaxed mb-6">
                  "{t.content}"
                </p>

                {/* Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E9E4D6]">
                  <div>
                    <div className="font-semibold text-[#0F2925]">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-start lg:justify-center gap-3 mt-6">
          <button className="w-8 h-8 rounded-md bg-cream-dark flex items-center justify-center text-[#0F2925]">
            ‹
          </button>
          <button className="w-8 h-8 rounded-md bg-cream-dark flex items-center justify-center text-[#0F2925]">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};
