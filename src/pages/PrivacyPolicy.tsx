// src/pages/PrivacyPolicy.tsx
import { useEffect } from "react";

export const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy – Offbeat Culture Private Limited";
  }, []);

  return (
    <section className="min-h-screen bg-[#F8F6E8] text-[#312B24] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-lora text-3xl sm:text-4xl font-bold mb-6 text-[#0F2925]">
          Privacy Policy
        </h1>

        <p className="mb-6 text-[#312B24]/80">
          This Privacy Policy describes how <strong>Offbeat Culture Private Limited</strong> (“we”, “our”, or “us”) collects, uses, and protects the personal information you provide while using our website <a href="https://swastiknandakumar.com" className="underline text-[#175B53]">https://swastiknandakumar.com</a>.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Who We Are</h2>
        <p className="text-[#312B24]/80">
          We are <strong>Offbeat Culture Private Limited</strong>, a wellness and education company offering transformational programs, courses, and events. Our website address is <a href="https://swastiknandakumar.com" className="underline text-[#175B53]">https://swastiknandakumar.com</a>.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Comments</h2>
        <p className="text-[#312B24]/80">
          When visitors leave comments on the site, we collect the data shown in the comments form, along with the visitor’s IP address and browser user agent string to help with spam detection.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Media</h2>
        <p className="text-[#312B24]/80">
          If you upload images to the website, please avoid uploading images that include embedded location data (EXIF GPS). Visitors to the site can download and extract location data from images on the website.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Cookies</h2>
        <p className="text-[#312B24]/80 mb-4">
          If you leave a comment on our site, you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so you don’t have to fill in your details again when leaving another comment. These cookies will last for one year.
        </p>
        <p className="text-[#312B24]/80 mb-4">
          If you visit our login page, we’ll set a temporary cookie to check if your browser accepts cookies. This cookie contains no personal data and is deleted when you close your browser.
        </p>
        <p className="text-[#312B24]/80 mb-4">
          When you log in, several cookies are set up to save your login info and screen display preferences. Login cookies last for two days, screen option cookies last for one year. If you select “Remember Me”, your login persists for two weeks. Logging out removes the login cookies.
        </p>
        <p className="text-[#312B24]/80">
          If you edit or publish an article, an additional cookie will be saved in your browser. It includes no personal data and simply indicates the post ID of the article you edited. It expires after one day.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Embedded Content from Other Websites</h2>
        <p className="text-[#312B24]/80">
          Articles on this site may include embedded content (e.g., videos, images, or articles). Embedded content from other websites behaves in the same way as if you visited those websites directly. These sites may collect data, use cookies, and track your interaction with the embedded content.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Who We Share Your Data With</h2>
        <p className="text-[#312B24]/80">
          If you request a password reset, your IP address will be included in the reset email. We do not sell or rent your data to third parties.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">How Long We Retain Your Data</h2>
        <p className="text-[#312B24]/80 mb-4">
          If you leave a comment, the comment and its metadata are retained indefinitely for automatic approval of follow-up comments.
        </p>
        <p className="text-[#312B24]/80">
          For users who register on our site, we store personal information in their profile. Users can view, edit, or delete their information anytime (except usernames). Website administrators can also see and edit that information.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Your Data Rights</h2>
        <p className="text-[#312B24]/80 mb-4">
          If you have an account or have left comments, you can request an exported file of your personal data, including any data you’ve provided. You can also request that we erase your personal data, except data we’re required to retain for administrative, legal, or security reasons.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Where Your Data Is Sent</h2>
        <p className="text-[#312B24]/80">
          Visitor comments may be checked through an automated spam detection service or third-party analytics providers for security and performance monitoring.
        </p>

        <h2 className="font-semibold text-xl mt-8 mb-3">Contact Us</h2>
        <p className="text-[#312B24]/80">
          For any privacy-related concerns, corrections, or data removal requests, please contact us at: <br />
          <a href="mailto:info@offbeatculture.com" className="underline text-[#175B53]">
            info@offbeatculture.com
          </a>
        </p>

        <p className="text-sm text-[#312B24]/60 mt-10 border-t border-[#E9E4D6] pt-6">
          © {new Date().getFullYear()} Offbeat Culture Private Limited | All Rights Reserved <br />
          <a href="/terms" className="underline text-[#175B53]">Terms</a> |{" "}
          <a href="/refund-policy" className="underline text-[#175B53]">Refund Policy</a> |{" "}
          <a href="/shipping-policy" className="underline text-[#175B53]">Shipping Policy</a> |{" "}
          <a href="/contact" className="underline text-[#175B53]">Contact Us</a>
        </p>
      </div>
    </section>
  );
}
