import { ArrowRight, Clock } from "lucide-react";
import { useEffect, useCallback } from "react";

function useRazorpay() {
  useEffect(() => {
    if (window.Razorpay) return; // already loaded
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

export const FinalCTASectionGa1 = () => {
  useRazorpay();

  const CREATE_ORDER_URL =
    "https://drvalarproject.netlify.app/.netlify/functions/create-order";

  const handlePay = useCallback(async () => {
    if (!window.Razorpay) {
      alert("Payment system is initializing. Please try again in a moment.");
      return;
    }

    // 1) Create an order from your Netlify Function
    const amountPaise = 9903; // ₹99.01
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

    // 2) Open Razorpay with the order_id
    const options: RazorpayOptions = {
      key: "rzp_live_wiof4A5PtjJvJM",
      order_id: order.id,
      amount: amountPaise,
      currency: "INR",
      name: "Energy Reset Bootcamp",
      description: "2-Day Energy Reset Challenge (₹99)",
      theme: { color: "#0e4740" },
      prefill: { name: "", email: "", contact: "" },
      handler: (_resp) => {
      // Razorpay will auto-capture (since you enabled it)
      window.location.href = "/ty-er-ga1";
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
    <>
      {/* Dark CTA block */}
      <section className="py-20 lg:py-28 px-4 bg-[#0F2925]">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="space-y-8 animate-fade-in">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-medium text-sm">
              <Clock className="w-4 h-4" />
              Limited Time Offer
            </div>

            {/* Heading */}
            <h2 className="heading-serif text-2xl md:text-4xl lg:text-5xl text-white leading-snug">
              Ready to Transform Your <span className="heading-italic">Energy</span> &{" "}
              <span className="heading-italic">Life</span>?
            </h2>

            {/* Subheading */}
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto">
              Join hundreds of others who have already discovered the path from chaos to clarity.
              Your peaceful, powerful self is just 2 days away.
            </p>

            {/* Pricing */}
            <div className="space-y-3">
              <div className="text-sm text-gray-400">Regular Price: ₹499</div>
              <div className="text-3xl md:text-4xl font-bold text-[#FDE68A]">Only ₹99</div>
              <div className="text-xs md:text-sm text-gray-400">30-Day Money-Back Guarantee</div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handlePay}
              className="mx-auto inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white bg-[#175B53] hover:bg-[#134741] transition-colors duration-300 text-base md:text-lg"
            >
              Secure Your Transformation Now
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Footer note */}
            <p className="text-xs md:text-sm text-gray-400">
              Enrollment closes in 48 hours • Don’t wait, start your journey today
            </p>
          </div>
        </div>
      </section>

      {/* Light footer (separate block so it stays readable and aligned) */}
      <footer className="px-4 py-8 bg-[#F8F6E8] border-t border-[#E9E4D6]">
        <div className="container mx-auto max-w-5xl text-center text-sm text-[#312B24]/80">
          © {new Date().getFullYear()} Offbeat Culture Private Limited&nbsp; |&nbsp;
          <a href="/privacy" className="underline text-[#175B53]">Privacy Policy</a>&nbsp; |&nbsp;
          <a href="/terms" className="underline text-[#175B53]">Terms</a>&nbsp; |&nbsp;
          <a href="/refund" className="underline text-[#175B53]">Refund Policy</a>&nbsp; |&nbsp;
          <a href="/shipping-policy" className="underline text-[#175B53]">Shipping Policy</a>&nbsp; |&nbsp;
          <a href="/contact" className="underline text-[#175B53]">Contact Us</a>
        </div>
      </footer>
    </>
  );
};


