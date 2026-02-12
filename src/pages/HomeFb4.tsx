import { useEffect, useState } from "react";
import offerImg from "@/assets/coach.png";
import { useFacebookPixel } from "@/hooks/useFacebookPixelHome";

/** ✅ Webhook */
const WEBHOOK_URL = "https://offbeatn8n.coachswastik.com/webhook/er-fb4";

/** ✅ Razorpay Payment Page URL */
const RAZORPAY_PAGE_URL = "https://pages.razorpay.com/er-fb4";

/** ✅ UTM storage key */
const UTM_KEY = "lead_utms";

/** Google Sheet CSV */
const SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpR1A2wo_YmEEjM1eRgBLmt81jIvSV57pf-92eHLfV8-EzoM7y2wIrzdMCjb_rMaZnDyWVVfV-CjcQ/pub?gid=1837654082&single=true&output=csv";

/** ✅ capture & persist UTMs */
function getUTMs() {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
      fclid: "",
    };
  }

  const params = new URLSearchParams(window.location.search);
  const fromUrl = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    fclid: params.get("fclid") || "",
  };

  const saved = localStorage.getItem(UTM_KEY);
  if (!saved && Object.values(fromUrl).some(Boolean)) {
    localStorage.setItem(UTM_KEY, JSON.stringify(fromUrl));
  }

  try {
    const stored = saved ? JSON.parse(saved) : {};
    return { ...stored, ...fromUrl };
  } catch {
    return fromUrl;
  }
}

export default function EnergyResetOfferFb4() {
  useFacebookPixel();

  const [dateText, setDateText] = useState("Loading…");
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
  });

  useEffect(() => {
    getUTMs();
  }, []);

  /** Load date */
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(SHEET_CSV, { cache: "no-store" });
        const csv = await res.text();
        const lines = csv.trim().split(/\r?\n/);
        const raw = (lines[1] ?? lines[0] ?? "").trim();
        setDateText(raw.replace(/^"(.*)"$/, "$1") || "Date coming soon");
      } catch {
        setDateText("Date coming soon");
      }
    })();
  }, []);

  /** Submit */
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const utms = getUTMs();

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          ...utms,
          page_url: "https://dummy-pageview-url.com",
          ts: new Date().toISOString(),
        }),
        keepalive: true,
      });
    } catch {}

    const payUrl =
      `${RAZORPAY_PAGE_URL}` +
      `?name=${encodeURIComponent(form.name)}` +
      `&email=${encodeURIComponent(form.email)}` +
      `&whatsapp_number=${encodeURIComponent(form.phone)}` +
      `&profession=${encodeURIComponent(form.profession)}` +
      `&utm_source=${encodeURIComponent(utms.utm_source)}` +
      `&utm_medium=${encodeURIComponent(utms.utm_medium)}` +
      `&utm_campaign=${encodeURIComponent(utms.utm_campaign)}` +
      `&utm_content=${encodeURIComponent(utms.utm_content)}` +
      `&utm_term=${encodeURIComponent(utms.utm_term)}` +
      `&fclid=${encodeURIComponent(utms.fclid)}`;

    window.location.href = payUrl;
  };

  return (
    <section className="min-h-screen bg-[#F8F6E8] px-4 py-10">
      <div className="mx-auto max-w-md sm:max-w-xl">

        {/* Heading */}
        <h1 className="font-lora text-[#312B24] text-2xl sm:text-3xl font-semibold">
          2-Day Energy Reset Challenge
          <span className="block text-base sm:text-lg font-normal text-[#312B24]/70">
            with Dr. Valarrmathi Srinivasan
          </span>
        </h1>

        {/* Main Card */}
        <div className="mt-5 rounded-2xl bg-white/70 backdrop-blur-sm
                        border border-[#E9E4D6]
                        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                        p-4 sm:p-6">

          {/* Image + Date */}
          <div className="flex flex-col items-center">
            <div className="w-[160px] h-[220px] overflow-hidden rounded-lg shadow-sm">
              <img src={offerImg} alt="" className="w-full h-full object-cover" />
            </div>

            <h2 className="mt-4 text-lg sm:text-xl font-semibold text-[#312B24]">
              {dateText}
            </h2>

            <div className="mt-2 flex items-baseline gap-3">
              <div className="text-[#B91C1C] font-extrabold text-xl">₹99</div>
              <div className="text-[#312B24]/50 line-through">₹499</div>
            </div>
          </div>

          {/* ✅ FORM MOVED HERE */}
          <div className="mt-8 rounded-2xl bg-[#F8F6E8]
                          border border-[#E5E3DA]
                          shadow-[0_10px_28px_rgba(0,0,0,0.10)]
                          p-5 sm:p-6">

            <h3 className="text-center text-lg font-semibold text-[#312B24] mb-4">
              Fill the details below to sign up
            </h3>

            <form onSubmit={onSubmit} className="space-y-4">
              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-12 rounded-xl border border-[#E5E3DA] px-4 bg-white"
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-12 rounded-xl border border-[#E5E3DA] px-4 bg-white"
              />

              <input
                required
                inputMode="numeric"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                  })
                }
                className="w-full h-12 rounded-xl border border-[#E5E3DA] px-4 bg-white"
              />

              <select
                required
                value={form.profession}
                onChange={(e) => setForm({ ...form, profession: e.target.value })}
                className="w-full h-12 rounded-xl border border-[#E5E3DA] px-4 bg-white"
              >
                <option value="" disabled>Select Profession</option>
                <option>Working Professional</option>
                <option>Business Owner / Entrepreneur</option>
                <option>Student</option>
                <option>Freelancer</option>
                <option>Other</option>
              </select>

              <button
                type="submit"
                disabled={submitting}
                className="w-full h-12 rounded-xl font-extrabold text-white
                           bg-[#6EC1E4]
                           shadow-[0_12px_32px_rgba(0,0,0,0.25)]
                           hover:brightness-105 transition disabled:opacity-60"
              >
                {submitting ? "Processing..." : "Join Now for ₹99"}
              </button>
            </form>
          </div>

          {/* What’s Included */}
          <div className="mt-8">
            <h3 className="text-[#312B24] font-semibold">What’s Included:</h3>
            <ul className="mt-3 space-y-2 text-[#312B24]/80">
              <li>• Breath Practices to calm your mind instantly</li>
              <li>• Gut &amp; Vagus Nerve Healing for digestive balance</li>
              <li>• Deep Sleep Restoration for peaceful nights</li>
              <li>• Emotional Release techniques to drop old baggage</li>
              <li>• Energy Alignment Tools for natural focus &amp; vitality</li>
            </ul>
          </div>

          {/* Ideal For */}
          <div className="mt-5">
            <h3 className="text-[#312B24] font-semibold">Ideal For:</h3>
            <p className="mt-2 text-[#312B24]/80">
              Overthinkers, professionals, and achievers ready to go from chaotic
              energy → calm, powerful focus in just 2 days.
            </p>
          </div>

          <p className="mt-4 text-center text-xs text-[#312B24]/60">
            Secure checkout powered by Razorpay
          </p>
        </div>
      </div>
    </section>
  );
}
