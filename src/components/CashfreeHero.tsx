// If you're using TypeScript, add this once globally (e.g., src/types/razorpay.d.ts):
// declare global {
//   interface Window {
//     Razorpay?: any;
//   }
// }

import { useEffect, useCallback ,useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/coach.png";

declare global {
  interface Window {
    Cashfree?: any;
  }
}

function useCashfree() {
  useEffect(() => {
    if (window.Cashfree) return;
    const s = document.createElement("script");
    // Cashfree PG v2 UI SDK (works for Checkout v3)
    s.src = "https://sdk.cashfree.com/js/ui/2.0.0/cashfree.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}


export const HeroSection = () => {
  useCashfree();

  // OPTIONAL: collect user details before opening checkout
  const [prefill] = useState({ name: "", email: "", contact: "" });

  const handlePay = useCallback(async () => {
    if (!window.Cashfree) {
      alert("Payment system is initializing. Please try again in a moment.");
      return;
    }

    try {
      // 1) Ask your server to create an order and return payment_session_id
      const res = await fetch("/api/cf-create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 99,                    // INR 99
          name: prefill.name || "",      // optional
          email: prefill.email || "",
          phone: prefill.contact || "",
        }),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to create Cashfree order");
      }

      const data = await res.json();
      // Cashfree returns { order_id, payment_session_id, ... }
      const paymentSessionId = data.payment_session_id;

      // 2) Open Cashfree Checkout
      const cashfree = new window.Cashfree({ mode: "PROD" }); // or "SANDBOX"
      await cashfree.checkout({
        paymentSessionId,
        redirectTarget: "_self", // after payment, Cashfree returns to return_url you set server-side
      });
    } catch (err: any) {
      console.error(err);
      alert("Could not start payment. Please try again.");
    }
  }, [prefill]);



  return (
    <section className="relative bg-[#F8F6E8] px-4 py-10 md:py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* === MOBILE VERSION (stacked) === */}
          <div className="order-1 lg:hidden space-y-6 fade-in text-center">
            <h1 className="font-lora text-[#312B24] text-[25px] leading-tight font-medium italic">
              From Chaotic Overthinker<br />
              To Peaceful Powerhouse
            </h1>

            <h2 className="text-sm font-bold tracking-tight whitespace-nowrap">
              <span className="text-[#B91C1C]">Calm your mind</span> •{" "}
              <span className="text-[#1E3A8A]">Heal your gut</span> •{" "}
              <span className="text-[#14532D]">Reset your energy</span>
            </h2>

            {/* CTA — opens Razorpay popup */}
            <button
              onClick={handlePay}
              className="group inline-flex items-center justify-between w-full sm:w-auto bg-[#F8F6E8] border border-[#E0DED2] rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm font-bold text-[#312B24]">Book My Spot Now</span>
              <span className="ml-3 flex items-center justify-center w-9 h-9 rounded-full bg-[#175B53] group-hover:bg-[#134741] transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2 fade-in">
            <div className="mx-auto w-full max-w-[420px] sm:max-w-none aspect-[3/4] sm:aspect-[3/4] md:aspect-[4/5] max-h-[320px] sm:max-h-none rounded-3xl overflow-hidden shadow-wellness">
              <img
                src={heroImage}
                alt="Peaceful woman meditating in a serene, light-filled space representing energy transformation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile details */}
          <div className="order-3 lg:hidden space-y-2 fade-in text-center">
            <p className="text-medium text-wellness-text/80 leading-relaxed">
              2-Day Energy Reset Challenge with Dr. Valarrmathi Srinivasan —
            </p>
            <div className="flex justify-center items-center gap-2 text-sm text-wellness-text font-bold">
              <Calendar className="w-4 h-4 text-primary-dark" />
              <span className="font-bold">29th Sept, 30th Sep (Mon & Tue)— 7:30 PM</span>
            </div>
          </div>

          {/* === DESKTOP VERSION === */}
          <div className="hidden lg:block order-1 space-y-6 fade-in">
            <h1 className="font-lora text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#312B24]">
              From <span className="font-medium italic">Chaotic Overthinker</span> →<br />
              To <span className="font-medium italic">Peaceful Powerhouse</span>
            </h1>

            <h2 className="text-lg lg:text-2xl font-bold tracking-tight whitespace-nowrap">
              
              <span className="text-[#B91C1C]">Calm your mind</span> •{" "}
              <span className="text-[#1E3A8A]">Heal your gut</span> •{" "}
              <span className="text-[#14532D]">Reset your energy</span>
            </h2>

            <p className="text-xl text-wellness-text/80 leading-relaxed">
              2-Day Energy Reset Challenge with Dr. Valarrmathi Srinivasan —
            </p>

            {/* CTA — opens Razorpay popup */}
            <button
              onClick={handlePay}
              className="hero-cta group bg-[#175B53] hover:bg-[#134741] transition-colors duration-300 mx-auto"
            >
              <div className="cta-content">
                <span className="cta-text text-white">Book My Spot Now</span>
                <div className="cta-icon">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>

            <div className="flex items-center gap-3 text-base text-wellness-text font-bold">
              <Calendar className="w-5 h-5 text-primary-dark" />
              <span>29th Sept, 30th Sep (Mon & Tue)— 7:30 PM</span>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="mt-8 md:mt-12 h-px w-full bg-[#E9E4D6]" />
      </div>
    </section>
  );
};
