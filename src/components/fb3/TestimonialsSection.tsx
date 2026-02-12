import { Quote } from "lucide-react";

// Top image testimonials (separate carousel)
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";

const imageTestimonials = [img1, img2, img3, img4, img5].filter(Boolean);

const textTestimonials = [
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
        <div className="text-left lg:text-center mb-8 lg:mb-12">
          <h2 className="heading-serif text-xl md:text-3xl lg:text-5xl text-[#0F2925] mb-3">
            Real <span className="heading-italic">Transformations</span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl lg:mx-auto">
            Hear what others have experienced during the 2-Day Reset.
          </p>
        </div>

        {/* === NEW: IMAGE TESTIMONIALS CAROUSEL (separate, above text) === */}
        {/* === NEW: IMAGE TESTIMONIALS CAROUSEL (actual size) === */}
{imageTestimonials.length > 0 && (
  <>
    <div className="overflow-x-auto snap-x snap-mandatory testimonials-scroll">
      <div className="flex gap-4 pb-2">
        {imageTestimonials.map((src, i) => (
          <div
            key={i}
            className="snap-center shrink-0 rounded-xl overflow-hidden border border-[#E9E4D6] bg-white shadow-sm"
          >
            <img
              src={src}
              alt={`Testimonial ${i + 1}`}
              className="block max-h-[280px] w-auto object-contain" 
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Small hint line */}
    <div className="text-xs text-[#312B24]/70 mt-2 mb-6 lg:mb-8">
      Swipe to see more
    </div>
  </>
)}


        {/* TEXT TESTIMONIALS CAROUSEL */}
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {textTestimonials.map((t, index) => (
              <div
                key={index}
                className="snap-center bg-cream-light rounded-xl border border-[#E9E4D6] shadow-sm p-6 w-[300px] sm:w-[320px] flex-shrink-0"
              >
                <Quote className="w-8 h-8 text-[#E9E4D6] mb-4" />
                <p className="italic text-[#312B24] leading-relaxed mb-6">
                  "{t.content}"
                </p>
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

        {/* Nav buttons (optional) */}
        <div className="flex justify-start lg:justify-center gap-3 mt-6">
          <button className="w-8 h-8 rounded-md bg-cream-dark flex items-center justify-center text-[#0F2925]">
            ‹
          </button>
          <button className="w-8 h-8 rounded-md bg-cream-dark flex items-center justify-center text-[#0F2925]">
            ›
          </button>
        </div>
      </div>

      {/* hide scrollbar nicely for WebKit + Firefox/Edge */}
      <style>{`
        .testimonials-scroll::-webkit-scrollbar { display: none; }
        .testimonials-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};
