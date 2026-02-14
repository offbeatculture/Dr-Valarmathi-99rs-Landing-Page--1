import {
  Wind,
  Activity,
  Moon,
  Undo2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion, type Variants, type Transition } from "framer-motion";
import { useEffect, useCallback } from "react";

const spring: Transition = { type: "spring", stiffness: 260, damping: 22, mass: 0.6 };

const cardVariants: Variants = {
  hidden: { opacity: 0, rotateX: 8, y: 18, transition: spring },
  show: { opacity: 1, rotateX: 0, y: 0, transition: spring },
};

function useRazorpay() {
  useEffect(() => {
    if ((window as any).Razorpay) return;
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

const bullets = [
  "So you stop guessing and start working on the real root cause.",
  "Most participants experience their first real sense of relief during the session itself.",
  "A reliable way to shift your body out of survival mode and into recovery.",
];

const zoneList = [
  { title: "Zone 1 – Survival", desc: "lower body" },
  { title: "Zone 2 – Digestion", desc: "stomach & gut" },
  { title: "Zone 3 – Emotions", desc: "chest & throat" },
];

const cards = [
  {
    icon: Sparkles,
    title: "Chakra Block Diagnosis",
    description:
      "A fast body-based self-assessment to find where your stress is stored:",
      points: ["Zone 1 – Survival:lower body", "Zone 2 – Digestion:stomach & gut", "Zone 3 – Emotions:chest & throat"],
    type: "points" as const,
  },
  {
    icon: Undo2,
    title: "The 3-Zone Unlock System",
    description:
      "A guided process that works directly with your body zones to release:",
    points: ["emotional tension", "chronic muscle tightness", "stress trapped in your gut"],
    type: "points" as const,
  },
  {
    icon: Wind,
    title: "The Safety Switch Protocol",
    description:
      "The exact breath pattern that sends a safety signal to your nervous system:",
    points: ["slows stress hormones", "relaxes muscles", "supports digestion"],
    type: "points" as const,
  },
];

export const HowWeHelpSection = () => {
  useRazorpay();

  const CREATE_ORDER_URL =
    "https://drvalarproject.netlify.app/.netlify/functions/create-order";

  const handlePay = useCallback(async () => {
    if (!(window as any).Razorpay) {
      alert("Payment system is initializing. Please try again in a moment.");
      return;
    }
    

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

    const options: any = {
      key: "rzp_live_wiof4A5PtjJvJM",
      order_id: order.id,
      amount: amountPaise,
      currency: "INR",
      name: "Energy Reset Bootcamp",
      description: "2-Day Energy Reset Challenge (₹99)",
      theme: { color: "#0e4740" },
      prefill: { name: "", email: "", contact: "" },
      handler: () => {
        window.location.href = "/ty-er-fb1";
      },
      modal: { ondismiss: () => console.log("Checkout closed") },
    };

    const rzp = new (window as any).Razorpay(options);
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
            In this Masterclass, Dr. Valarrmathi will guide you through The
            Breath Chakra Reset - a proven system that unlocks trapped stress and
            restores your body's natural balance.
          </p>
        </div>

    {/* Cards (with support line inside each card) */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left lg:text-center items-stretch">
  {cards.map((c, idx) => {
    const Icon = c.icon;

    return (
      <motion.div
        key={c.title}
        className="
          p-5 md:p-6 rounded-xl bg-[#0F2925] text-white
          shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1
          flex flex-col h-full
        "
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Top content */}
        <Icon className="w-7 h-7 text-[#FDE68A] mb-3 mx-0 lg:mx-auto" />

        <h3 className="text-base md:text-lg font-semibold mb-2">
          {c.title}
        </h3>

        <p className="text-sm md:text-base text-gray-300 leading-snug">
          {c.description}
        </p>

        {/* Points block */}
        {c.type === "points" && (c as any).points?.length && (
          <div className="mt-4 rounded-lg bg-white/5 border border-white/10 p-3 text-left">
            <ul className="space-y-2">
              {(c as any).points.map((p: string) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FDE68A] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-200">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Support line INSIDE the card */}
        <div className="mt-auto pt-4">
          <div className="rounded-lg bg-white/10 border border-white/15 p-3">
            <p className="text-sm md:text-base text-white/90">
              {bullets[idx]}
            </p>
          </div>
        </div>
      </motion.div>
    );
  })}
</div>

        {/* Closing line */}
        <div className="text-left lg:text-center mt-8">
          <p className="text-sm md:text-lg text-[#0F2925] font-semibold">
            In this masterclass, you'll feel the shift:{" "}
            <span className="italic text-[#0F2925]">
              From chaotic, restless energy → to calm, focused power.
            </span>
          </p>
        </div>

        {/* Separator */}
        <div className="mt-6 mb-6 h-px w-full bg-[#E9E4D6]" />

        {/* CTA Button */}
        <div className="text-left lg:text-center">
          <button
            onClick={() => {
              const el = document.getElementById("register");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group inline-flex items-center justify-between rounded-full
                       border border-[#E5E3DA] bg-[#F8F6E8]
                       px-5 py-2 shadow-sm hover:shadow-md
                       transition-all duration-300"
          >
            <span className="text-sm md:text-base font-bold text-[#312B24]">
              Book My Spot Now
            </span>

            <span
              className="ml-3 flex items-center justify-center w-9 h-9 rounded-full
                         bg-[#0F2925] group-hover:bg-[#134741]
                         transition-colors duration-300"
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>

        {/* Optional: if you want the CTA to actually open Razorpay instead of scroll */}
        {/* <div className="text-left lg:text-center mt-3">
          <button onClick={handlePay} className="underline text-sm text-[#0F2925]">
            Pay ₹99 now
          </button>
        </div> */}
      </div>
    </section>
  );
};
