import { useEffect } from "react";

export default function RefundPolicy() {
  useEffect(() => {
    document.title = "Refund Policy – Offbeat Culture Private Limited";
  }, []);

  return (
    <section className="min-h-screen bg-[#F8F6E8] text-[#312B24] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-lora text-3xl sm:text-4xl font-bold mb-6 text-[#0F2925]">
          Refund Policy
        </h1>

        <p className="text-[#312B24]/80 mb-4">
          Thank you for choosing <strong>Offbeat Culture Private Limited</strong>. Please
          read this policy carefully before making a purchase.
        </p>

        <h2 className="font-semibold text-xl mt-6 mb-2">Cancellations &amp; Refunds</h2>
        <p className="text-[#312B24]/80">
          All products and programs purchased on our website are{" "}
          <strong>non-refundable</strong>. Once a purchase is completed, no cancellations
          or refunds will be issued.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-2">Need help?</h2>
        <p className="text-[#312B24]/80">
          If you have any questions about this policy or need assistance with your order,
          please contact us at:{" "}
          <a href="mailto:valar@protonsacademy.com" className="underline text-[#175B53]">
            valar@protonsacademy.com
          </a>
          .
        </p>

        <p className="text-sm text-[#312B24]/60 mt-10 border-t border-[#E9E4D6] pt-6">
          © {new Date().getFullYear()} Offbeat Culture Private Limited •{" "}
          <a href="/privacy" className="underline text-[#175B53]">Privacy Policy</a> |{" "}
          <a href="/terms" className="underline text-[#175B53]">Terms</a> |{" "}
          <a href="/shipping-policy" className="underline text-[#175B53]">Shipping Policy</a> |{" "}
          <a href="/contact" className="underline text-[#175B53]">Contact Us</a>
        </p>
      </div>
    </section>
  );
}
