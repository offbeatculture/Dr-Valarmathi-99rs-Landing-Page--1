import { ArrowRight, Clock } from "lucide-react";
import { useEffect, useCallback } from "react";

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

export const FinalCTASection = () => {

  useRazorpay();
  
    // Add this if you want a tiny inline prompt before checkout (optional):
  // const ask = (msg: string, def = "") => window.prompt(msg, def) || "";
  
  const handlePay = useCallback(() => {
    if (!window.Razorpay) {
      alert("Payment system is initializing. Please try again in a moment.");
      return;
    }
  
    const options: RazorpayOptions = {
      key: "rzp_live_wiof4A5PtjJvJM",
      amount: 9901, // ₹99 in paise
      currency: "INR",
      name: "Energy Reset Bootcamp",
      description: "2-Day Energy Reset Challenge (₹99)",
      theme: { color: "#0e4740" },
  
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
  
      notes: {
        request_name: "true",
        request_email: "true",
        request_contact: "true",
      },
  
      handler: (resp) => {
        console.log("Payment success:", resp);
        // Redirect to your thank you page
        window.location.href = "/ty-er-fb1";
      },
  
      modal: {
        ondismiss: () => console.log("Checkout closed"),
      },
    };
  
    const rzp = new window.Razorpay(options);
  
    rzp.on?.("payment.failed", (err: any) => {
      console.error("Payment failed:", err);
      alert("Payment failed. Please try again.");
    });
  
    rzp.open();
  }, []);
  
  return (
    <section className="py-20 lg:py-28 px-4 bg-[#0F2925] flex items-center justify-center">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="space-y-8 fade-in">
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
            <div className="text-3xl md:text-4xl font-bold text-[#FDE68A]">
              Only ₹99
            </div>
            <div className="text-xs md:text-sm text-gray-400">
              30-Day Money-Back Guarantee
            </div>
          </div>

          {/* CTA Button */}
          <button 
          className="px-6 py-3 rounded-xl font-semibold text-white bg-[#175B53] hover:bg-[#134741] transition-colors duration-300 inline-flex items-center gap-2 text-base md:text-lg"
           onClick={handlePay}>
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
  );
};
