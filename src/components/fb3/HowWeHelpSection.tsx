import { Wind, Activity, Moon, Undo2, Sparkles, ArrowRight } from "lucide-react";
import { motion, type Variants, type Transition } from "framer-motion";
import { useEffect, useCallback } from "react";

const solutions = [
  { icon: Wind,     title: "Breath Practices",        description: "Simple but powerful breathing techniques to calm your nervous system and bring instant clarity." },
  { icon: Activity, title: "Gut & Vagus Nerve Healing", description: "Proven methods to stimulate your vagus nerve and reset your digestive system for lasting balance." },
  { icon: Moon,     title: "Deep Sleep Restoration",  description: "Techniques to switch off stress circuits, quiet your mind, and restore natural, restful sleep." },
  { icon: Undo2,    title: "Emotional Release",       description: "Gentle practices to break free from old memories and patterns that keep replaying in your mind." },
  { icon: Sparkles, title: "Energy Alignment Tools",  description: "Unlock your body’s inner pharmacy—serotonin, melatonin, endorphins—for stable focus and vitality." },
];


const spring: Transition = { type: "spring", stiffness: 260, damping: 22, mass: 0.6 };

const cardVariants: Variants = {
  hidden: { opacity: 0, rotateX: 8, y: 18, transition: spring },
  show:   { opacity: 1, rotateX: 0, y: 0, transition: spring },
};

function useRazorpay() {
  useEffect(() => {
    if (window.Razorpay) return; // already loaded
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      // optional cleanup
    };
  }, []);
}

export const HowWeHelpSection = () => {
   useRazorpay();
  
    // Add this if you want a tiny inline prompt before checkout (optional):
  // const ask = (msg: string, def = "") => window.prompt(msg, def) || "";
  
  const CREATE_ORDER_URL =
  "https://drvalarproject.netlify.app/.netlify/functions/create-order";

const handlePay = useCallback(async () => {
  if (!window.Razorpay) {
    alert("Payment system is initializing. Please try again in a moment.");
    return;
  }

  // 1) Create an order from your Netlify Function
  const amountPaise = 9901; // ₹99.01
  const orderRes = await fetch(CREATE_ORDER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: amountPaise,
      currency: "INR",
      notes: { product: "Energy Reset Bootcamp" },
    }),
  });

  const order = await orderRes.json();
  if (!order?.id) {
    console.error("Order creation failed:", order);
    alert("Could not create order. Please try again.");
    return;
  }

  // 2) Open Razorpay with the order_id (Auto-capture should be ON in dashboard)
  const options: RazorpayOptions = {
    key: "rzp_live_wiof4A5PtjJvJM", // your public KEY_ID
    order_id: order.id,             // 🔴 required for Orders flow
    amount: amountPaise,            // optional when order_id is present, fine to keep
    currency: "INR",
    name: "Energy Reset Bootcamp",
    description: "2-Day Energy Reset Challenge (₹99)",
    theme: { color: "#0e4740" },
    prefill: { name: "", email: "", contact: "" },
    handler: (_resp) => {
      // Razorpay will auto-capture (since you enabled it)
      window.location.href = "/ty-er-fb1";
    },
    modal: { ondismiss: () => console.log("Checkout closed") },
  };

  const rzp = new window.Razorpay(options);
  rzp.on?.("payment.failed", (e: any) => {
    console.error("Payment failed:", e);
    alert(e?.error?.description || "Payment failed. Please try again.");
  });
  rzp.open();
}, []);
  
  return (
    <section className="py-12 lg:py-16 px-4 md:px-6 bg-[#F8F6E8]">
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-left lg:text-center mb-8 lg:mb-10">
          <h2 className="heading-serif text-xl md:text-3xl lg:text-4xl text-[#0F2925] mb-2">
            How We <span className="heading-italic">Transform</span> Your Life
          </h2>
          <p className="text-sm md:text-base text-[#0F2925]/80 max-w-2xl lg:mx-auto">
            In this 2-Day Challenge, Dr. Valarrmathi  will guide you through
            practices that reset your body, mind, and energy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left lg:text-center">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
  key={s.title}
  className="p-5 md:p-6 rounded-xl bg-[#0F2925] text-white shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
  variants={cardVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.35 }}
  style={{ transformStyle: "preserve-3d" }}
>
  {/* Icon aligned left on mobile, centered on desktop */}
  <Icon className="w-7 h-7 text-[#FDE68A] mb-3 mx-0 lg:mx-auto" />

  <h3 className="text-base md:text-lg font-semibold mb-2">{s.title}</h3>
  <p className="text-sm md:text-base text-gray-300 leading-snug">{s.description}</p>
</motion.div>
            );
          })}
        </div>

        {/* Closing line */}
        <div className="text-left lg:text-center mt-8">
          <p className="text-sm md:text-lg text-[#0F2925] font-semibold">
            In just 2 days, you’ll feel the shift:{" "}
            <span className="italic text-[#0F2925]">
              From chaotic, restless energy → to calm, focused power.
            </span>
          </p>
        </div>

        {/* Separator */}
        <div className="mt-6 mb-6 h-px w-full bg-[#E9E4D6]" />

        {/* CTA Button (pill style) */}
       <div className="text-left lg:text-center">
  <button
    onClick={() => {
      const el = document.getElementById("register");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }}
    className="group inline-flex items-center justify-between rounded-full
               border border-[#E5E3DA] bg-[#F8F6E8]
               px-5 py-2 shadow-sm hover:shadow-md
               transition-all duration-300"
  >
    <span className="text-sm md:text-base font-bold text-[#312B24]">
      Book My Spot Now
    </span>

    <span className="ml-3 flex items-center justify-center w-9 h-9 rounded-full
                     bg-[#0F2925] group-hover:bg-[#134741]
                     transition-colors duration-300">
      <ArrowRight className="w-4 h-4 text-white" />
    </span>
  </button>
</div>

      </div>
    </section>
  );
};
