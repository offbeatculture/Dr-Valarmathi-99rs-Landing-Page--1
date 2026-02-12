import { useEffect } from "react";

export default function ShippingPolicy() {
  useEffect(() => {
    document.title = "Shipping & Exchange Policy – Offbeat Culture Private Limited";
  }, []);

  return (
    <section className="min-h-screen bg-[#F8F6E8] text-[#312B24] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-lora text-3xl sm:text-4xl font-bold mb-6 text-[#0F2925]">
          Shipping &amp; Exchange Policy
        </h1>

        <p className="text-[#312B24]/80 mb-6">
          At <strong>Offbeat Culture Private Limited</strong>, we offer digital
          programs and resources to support your personal growth and healing journey.
          As our products are delivered electronically, please review the details below.
        </p>

        {/* 1. Delivery Method */}
        <h2 className="font-semibold text-xl mt-8 mb-3">1) Delivery Method</h2>
        <ul className="list-disc pl-6 space-y-2 text-[#312B24]/80">
          <li>Download links sent to the email address provided during checkout.</li>
          <li>Access to online courses, workshops, or resources via your account on our website.</li>
        </ul>

        {/* 2. Delivery Time */}
        <h2 className="font-semibold text-xl mt-8 mb-3">2) Delivery Time</h2>
        <ul className="list-disc pl-6 space-y-2 text-[#312B24]/80">
          <li>Once your payment is successfully processed, you will receive your digital product within <strong>24 hours</strong>.</li>
          <li>If you don’t see the email, please check your <em>Spam</em> or <em>Junk</em> folder.</li>
        </ul>

        {/* 3. Access Issues */}
        <h2 className="font-semibold text-xl mt-8 mb-3">3) Access Issues</h2>
        <p className="text-[#312B24]/80 mb-2">
          If you face any of the following, reach out to us at{" "}
          <a href="mailto:support@offbeatculture.co.in" className="underline text-[#175B53]">
            support@offbeatculture.co.in
          </a>:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#312B24]/80">
          <li>You did not receive the delivery email.</li>
          <li>The download link is broken or expired.</li>
          <li>You’re unable to access the product on our website.</li>
        </ul>
        <p className="text-[#312B24]/80 mt-2">
          We’ll promptly assist to ensure you receive the purchased product.
        </p>

        {/* 4. No Physical Shipping */}
        <h2 className="font-semibold text-xl mt-8 mb-3">4) No Physical Shipping</h2>
        <p className="text-[#312B24]/80">
          Our products are digital; <strong>no physical items</strong> will be shipped. Please ensure your
          email address is accurate during checkout.
        </p>

        {/* 5. Updates & Revisions */}
        <h2 className="font-semibold text-xl mt-8 mb-3">5) Updates &amp; Revisions</h2>
        <p className="text-[#312B24]/80">
          At times, updates or revisions may be provided for digital products you’ve purchased. If applicable,
          we’ll notify you by email with instructions to access the updated content.
        </p>

        {/* 6. Contact */}
        <h2 className="font-semibold text-xl mt-8 mb-3">6) Contact</h2>
        <p className="text-[#312B24]/80">
          Questions about delivery? Email us at{" "}
          <a href="mailto:valar@protonsacademy.com" className="underline text-[#175B53]">
            valar@protonsacademy.com
          </a>.
        </p>

        {/* Footer */}
        <p className="text-sm text-[#312B24]/60 mt-10 border-t border-[#E9E4D6] pt-6">
          © {new Date().getFullYear()} Offbeat Culture Private Limited •{" "}
          <a href="/privacy" className="underline text-[#175B53]">Privacy Policy</a> |{" "}
          <a href="/terms" className="underline text-[#175B53]">Terms</a> |{" "}
          <a href="/refund-policy" className="underline text-[#175B53]">Refund Policy</a> |{" "}
          <a href="/contact" className="underline text-[#175B53]">Contact Us</a>
        </p>
      </div>
    </section>
  );
}
