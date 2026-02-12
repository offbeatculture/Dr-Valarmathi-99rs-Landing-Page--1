// src/pages/Terms.tsx
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions – Offbeat Culture Private Limited";
  }, []);

  return (
    <section className="min-h-screen bg-[#F8F6E8] text-[#312B24] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-lora text-3xl sm:text-4xl font-bold mb-6 text-[#0F2925]">
          Terms &amp; Conditions
        </h1>

        <p className="mb-6 text-[#312B24]/80">
          Welcome to <strong>Swastik Nandakumar</strong> or{" "}
          <a
            href="https://swastiknandakumar.com"
            className="underline text-[#175B53]"
          >
            swastiknandakumar.com
          </a>{" "}
          (“Website”), the digital presence of{" "}
          <strong>Offbeat Culture Private Limited</strong> (“Website Owner”,
          “us”, “we”, or “our”). Your access to and use of our Website and
          Services is conditioned upon your acceptance of and compliance with
          these Terms. These Terms apply to all visitors, users, and others who
          wish to access or use the Website and Services. By accessing or using
          the Website and Services, you agree to be bound by these Terms. If you
          disagree with any part of the terms, you do not have permission to
          access the Website or use the Services.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Intellectual Property</h2>
        <p className="text-[#312B24]/80">
          The Website and its original content, features, and functionality are
          and will remain the exclusive property of{" "}
          <strong>Offbeat Culture Private Limited</strong> and its licensors.
          Our trademarks and trade dress may not be used in connection with any
          product or service without prior written consent from{" "}
          <strong>Offbeat Culture Private Limited</strong>.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">User Responsibilities</h2>
        <p className="text-[#312B24]/80">
          By using this Website and Services, you represent that you are at
          least the age of majority in your state or province of residence. You
          agree to provide true, accurate, and complete information during and
          after registration. You agree not to use the Website or Services for
          any illegal or unauthorized purpose, nor may you violate any laws in
          your jurisdiction while using the Website.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Services</h2>
        <p className="text-[#312B24]/80">
          We provide Free Webinars, Paid Webinars, Live Workshops, and Coaching
          Programs to working professionals, business owners, and entrepreneurs.
          You agree to pay us the charges associated with availing of the
          Services as displayed or communicated during checkout or enrollment.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">User-Generated Content</h2>
        <p className="text-[#312B24]/80">
          You may be able to upload, share, or contribute content to the
          Website. By making content available, you represent that you own or
          have sufficient rights to post it and that you grant us a
          non-exclusive, worldwide, royalty-free, sublicensable, and
          transferable license to use, reproduce, distribute, prepare derivative
          works of, display, and perform the content in connection with the
          Website and our business.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Links To Other Websites</h2>
        <p className="text-[#312B24]/80 mb-4">
          Our Website may contain links to third-party websites or services not
          owned or controlled by <strong>Offbeat Culture Private Limited</strong>.
          We have no control over, and assume no responsibility for, the content,
          privacy policies, or practices of any third-party websites or
          services.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Termination</h2>
        <p className="text-[#312B24]/80">
          We may terminate or suspend your access immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if you breach the Terms.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Indemnification</h2>
        <p className="text-[#312B24]/80">
          You agree to defend, indemnify, and hold harmless{" "}
          <strong>Offbeat Culture Private Limited</strong>, its licensees and
          licensors, and their employees, contractors, agents, officers, and
          directors, from and against any and all claims, damages, losses,
          liabilities, costs, or expenses (including attorney’s fees), resulting
          from or arising out of your use and access of the Website or Services,
          or your violation of these Terms.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Limitation Of Liability</h2>
        <p className="text-[#312B24]/80">
          In no event shall <strong>Offbeat Culture Private Limited</strong>, its
          directors, employees, partners, agents, suppliers, or affiliates be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, including but not limited to loss of profits, data,
          goodwill, or other intangible losses, arising from your use of or
          inability to use the Website or Services, or any third-party content
          linked therein.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Disclaimer</h2>
        <p className="text-[#312B24]/80">
          Your use of the Website and Services is at your sole risk. The Website
          and Services are provided on an “AS IS” and “AS AVAILABLE” basis
          without warranties of any kind, express or implied.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Governing Law</h2>
        <p className="text-[#312B24]/80">
          These Terms shall be governed and construed in accordance with the
          laws of Karnataka, India, without regard to its conflict of law
          provisions. All disputes shall be subject to the exclusive
          jurisdiction of the courts in <strong>Bangalore, Karnataka</strong>.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Changes</h2>
        <p className="text-[#312B24]/80">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material, we will provide at
          least 30 days’ notice prior to new terms taking effect. What
          constitutes a material change will be determined at our sole
          discretion.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Contact Us</h2>
        <p className="text-[#312B24]/80">
          If you have any questions about these Terms, please contact us at:
          <br />
          <a
            href="mailto:support@offbeatculture.co.in"
            className="underline text-[#175B53]"
          >
            valar@protonsacademy.com
          </a>
          <br />
          Address: 213, Rajiv Gandhi Nagar, Bangalore, India
        </p>

        <p className="text-sm text-[#312B24]/60 mt-10 border-t border-[#E9E4D6] pt-6">
          © {new Date().getFullYear()} Offbeat Culture Private Limited | All Rights Reserved
          <br />
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
          </a>{" "}
          |{" "}
          <a href="/contact" className="underline text-[#175B53]">
            Contact Us
          </a>
        </p>
      </div>
    </section>
  );
}
