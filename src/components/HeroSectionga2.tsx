import { useEffect, useCallback, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/coach.png";

// Published Google Sheet (CSV output)
const SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpR1A2wo_YmEEjM1eRgBLmt81jIvSV57pf-92eHLfV8-EzoM7y2wIrzdMCjb_rMaZnDyWVVfV-CjcQ/pub?gid=1837654082&single=true&output=csv";

function useRazorpay() {
  useEffect(() => {
    if (window.Razorpay) return;
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

export const HeroSectionGa2 = () => {
  useRazorpay();

  // === NEW: date from Google Sheet ===
  const [dateText, setDateText] = useState<string>("Loading…");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(SHEET_CSV, { cache: "no-store" });
        const csv = await res.text();

        // The sheet has one column:
        // Row 1: header ("Date ER"), Row 2: the actual date string
        const lines = csv.trim().split(/\r?\n/);
        // Take line 2 if present, else line 1
        const raw = (lines[1] ?? lines[0] ?? "").trim();
        // Strip surrounding quotes if Google added them
        const value = raw.replace(/^"(.*)"$/, "$1");
        setDateText(value || "Date coming soon");
      } catch (e) {
        console.error("Failed to load date from sheet:", e);
        setDateText("Date coming soon");
      }
    })();
  }, []);
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
    <section className="relative bg-[#F8F6E8] px-4 py-10 md:py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* === MOBILE (stacked) === */}
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
            <div className="mx-auto w-full max-w-[420px] sm:max-w-none aspect-[3/4] md:aspect-[4/5] max-h-[320px] sm:max-h-none rounded-3xl overflow-hidden shadow-wellness">
              <img
                src={heroImage}
                alt="Peaceful woman meditating in a serene, light-filled space"
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
              <span className="font-bold">{dateText}</span>
            </div>
          </div>

          {/* === DESKTOP === */}
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
              <span>{dateText}</span>
            </div>
          </div>

        </div>

        <div className="mt-8 md:mt-12 h-px w-full bg-[#E9E4D6]" />
      </div>
    </section>
  );
};
