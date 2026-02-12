import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us – Offbeat Culture Private Limited";
  }, []);

  return (
    <section className="min-h-screen bg-[#F8F6E8] text-[#312B24] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-lora text-3xl sm:text-4xl font-bold mb-6 text-[#0F2925]">
          Contact Us
        </h1>

        <p className="text-[#312B24]/80 mb-6">
          We’d love to hear from you! Whether you have questions about our
          programs, feedback on your experience, or partnership opportunities,
          our team is here to help.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Email</h2>
        <p className="text-[#312B24]/80">
          You can reach us anytime at:{" "}
          <a href="mailto:valar@protonsacademy.com" className="underline text-[#175B53]">
            valar@protonsacademy.com
          </a>
        </p>
        <p className="text-[#312B24]/80 mt-2">
          For general queries, please send us an email at the above address —
          we’ll get back to you within <strong>48 hours</strong>.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Phone</h2>
        <p className="text-[#312B24]/80">
          You can contact us directly at:{" "}
          <a href="tel:+919894705061" className="underline text-[#175B53]">
            +91 98947 05061
          </a>
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Office Location</h2>
        <p className="text-[#312B24]/80">
          We are based in <strong>Bangalore, India</strong>. If you require postal
          communication or wish to visit our office, please contact us first to
          schedule an appointment.
        </p>
        <p className="mt-2 text-[#312B24]/80">
          Address: 213, Rajiv Gandhi Nagar, Bangalore – 560097
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Business Hours</h2>
        <p className="text-[#312B24]/80">
          Monday – Friday: 10:00 AM – 6:00 PM <br />
          Saturday: 10:00 AM – 2:00 PM <br />
          Sunday: Closed
        </p>

        <p className="text-sm text-[#312B24]/60 mt-10 border-t border-[#E9E4D6] pt-6">
          © {new Date().getFullYear()} Offbeat Culture Private Limited •{" "}
          <a href="/privacy" className="underline text-[#175B53]">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="underline text-[#175B53]">
            Terms
          </a>{" "}
          |{" "}
          <a href="/refund-policy" className="underline text-[#175B53]">
            Refund Policy
          </a>{" "}
          |{" "}
          <a href="/shipping-policy" className="underline text-[#175B53]">
            Shipping Policy
          </a>
        </p>
      </div>
    </section>
  );
}
