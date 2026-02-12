import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import offerImg from "@/assets/coach.png";

// Google Sheet CSV URL
const SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpR1A2wo_YmEEjM1eRgBLmt81jIvSV57pf-92eHLfV8-EzoM7y2wIrzdMCjb_rMaZnDyWVVfV-CjcQ/pub?gid=1837654082&single=true&output=csv";

const NotFound = () => {
  const location = useLocation();
  const [dateText, setDateText] = useState<string>("Loading…");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Fetch date from sheet
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(SHEET_CSV, { cache: "no-store" });
        const csv = await res.text();
        const lines = csv.trim().split(/\r?\n/);
        const raw = (lines[1] ?? lines[0] ?? "").trim();
        const value = raw.replace(/^"(.*)"$/, "$1");
        setDateText(value || "Date coming soon");
      } catch (e) {
        console.error("Failed to load date from sheet:", e);
        setDateText("Date coming soon");
      }
    })();
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-between bg-[#F8F6E8] px-4 py-10">
      {/* noscript pixel */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1525232074920142&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <div className="mx-auto max-w-md sm:max-w-xl">
        {/* Page heading */}
        <h1 className="font-lora text-[#312B24] text-2xl sm:text-3xl leading-snug font-semibold">
          2-Day Energy Reset Challenge
          <span className="block text-base sm:text-lg font-normal text-[#312B24]/70">
            with Dr. Valarrmathi Srinivasan
          </span>
        </h1>

        {/* Card */}
        <div className="mt-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E9E4D6] shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-4 sm:p-6">
          <div className="flex flex-col items-center">
            <div className="w-[160px] h-[220px] overflow-hidden rounded-lg shadow-sm">
              <img
                src={offerImg}
                alt="Energy Reset Challenge"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Live date from Sheet */}
            <h2 className="mt-4 text-lg sm:text-xl font-semibold text-[#312B24] text-center">
              {dateText}
            </h2>

            {/* Price */}
            <div className="mt-2 flex items-baseline gap-3">
              <div className="text-[#B91C1C] font-extrabold text-xl">₹99</div>
              <div className="text-[#312B24]/50 line-through">₹499</div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-6">
            <h3 className="text-[#312B24] font-semibold">What’s Included:</h3>
            <ul className="mt-3 space-y-2 text-[#312B24]/80">
              <li>• Breath Practices to calm your mind instantly</li>
              <li>• Gut &amp; Vagus Nerve Healing for digestive balance</li>
              <li>• Deep Sleep Restoration for peaceful nights</li>
              <li>• Emotional Release techniques to drop old baggage</li>
              <li>• Energy Alignment Tools for natural focus &amp; vitality</li>
            </ul>
          </div>

          {/* Ideal for */}
          <div className="mt-5">
            <h3 className="text-[#312B24] font-semibold">Ideal For:</h3>
            <p className="mt-2 text-[#312B24]/80">
              Overthinkers, professionals, and achievers ready to go from chaotic
              energy → calm, powerful focus in just 2 days.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Footer Section */}
      <footer className="mt-10 pt-6 border-t border-[#E9E4D6] text-center text-sm text-[#312B24]/70">
        <p>
          © {new Date().getFullYear()} Offbeat Culture Private Limited |{" "}
          <a href="/privacy" className="underline text-[#175B53]">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="underline text-[#175B53]">
            Terms
          </a>{" "}
          |{" "}
          <a href="/refund" className="underline text-[#175B53]">
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
      </footer>
    </section>
  );
};

export default NotFound;
