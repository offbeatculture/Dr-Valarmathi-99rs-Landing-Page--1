import { useEffect, useCallback, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/coach.png";

/** ================= CONFIG ================= */
const SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSpR1A2wo_YmEEjM1eRgBLmt81jIvSV57pf-92eHLfV8-EzoM7y2wIrzdMCjb_rMaZnDyWVVfV-CjcQ/pub?gid=1837654082&single=true&output=csv";

const WEBHOOK_URL = "https://offbeatn8n.coachswastik.com/webhook/er-fb3";

const RAZORPAY_PAGE_URL = "https://pages.razorpay.com/er-fb3";

const UTM_KEY = "lead_utms";

const CREATE_ORDER_URL =
  "https://drvalarproject.netlify.app/.netlify/functions/create-order";

/** ================= UTMs ================= */
function getUTMs() {
  const empty = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    fclid: "",
  };

  if (typeof window === "undefined") return empty;

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
  const hasAny = Object.values(fromUrl).some(Boolean);

  if (!saved && hasAny) {
    localStorage.setItem(UTM_KEY, JSON.stringify(fromUrl));
  }

  try {
    const stored = saved ? JSON.parse(saved) : {};
    return {
      ...empty,
      ...stored,
      ...fromUrl, // URL wins over storage
    };
  } catch {
    return { ...empty, ...fromUrl };
  }
}

/** ================= RAZORPAY SDK ================= */
function useRazorpay() {
  useEffect(() => {
    if (window.Razorpay) return;
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
}

export const HeroSection = () => {
  useRazorpay();

  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.hash = "#register";
  };

  const [dateText, setDateText] = useState("Loading…");
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
  });

  /** Capture UTMs once */
  useEffect(() => {
    getUTMs();
  }, []);

  /** Load date */
/** Load date + time (Column A + B only) */
useEffect(() => {
  (async () => {
    try {
      const res = await fetch(SHEET_CSV, { cache: "no-store" });
      const csv = await res.text();
      const lines = csv.trim().split(/\r?\n/);

      // Row 2 (skip header)
      const row = lines[1] ?? lines[0] ?? "";

      // Safe CSV split (handles commas inside quotes)
      const cells =
        row.match(/("([^"]|"")*"|[^,]+)/g)?.map((c) =>
          c.trim().replace(/^"|"$/g, "").replace(/""/g, '"')
        ) ?? [];

      const date = (cells[0] || "").trim(); // Column A
      const time = (cells[1] || "").trim(); // Column B

      const formatted = [date, time].filter(Boolean).join(" | ");

      setDateText(formatted || "Date coming soon");
    } catch {
      setDateText("Date coming soon");
    }
  })();
}, []);

  /** HERO CTA – Order based payment (kept as-is) */
  const handlePay = useCallback(async () => {
    if (!window.Razorpay) {
      alert("Payment system is initializing. Please try again.");
      return;
    }

    const amountPaise = 9900;

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
      alert("Order creation failed.");
      return;
    }

    const rzp = new window.Razorpay({
      key: "rzp_live_wiof4A5PtjJvJM",
      order_id: order.id,
      amount: amountPaise,
      currency: "INR",
      name: "Energy Reset Bootcamp",
      description: "2-Day Energy Reset Challenge (₹99)",
      theme: { color: "#175B53" },
      handler: () => {
        window.location.href = "/ty-er-fb1";
      },
    });

    rzp.open();
  }, []);

  /** FORM SUBMIT – webhook + Razorpay page */
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
    } catch {
      // silent fail
    }

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
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-[#F8F6E8] px-4 py-10 lg:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="font-lora text-4xl lg:text-6xl text-[#312B24]">
              From <i>Chaotic Overthinker</i> →<br />
              To <i>Peaceful Powerhouse</i>
            </h1>

            <h2 className="font-bold text-lg text-center lg:text-left">
              <span className="text-[#B91C1C]">Calm your mind</span> •{" "}
              <span className="text-[#1E3A8A]">Heal your gut</span> •{" "}
              <span className="text-[#14532D]">Reset your energy</span>
            </h2>

            <button
              onClick={scrollToRegister}
              className="bg-[#175B53] hover:bg-[#134741]
                         text-white rounded-full px-6 py-3
                         font-bold inline-flex items-center gap-3
                         transition-colors duration-300
                         mx-auto lg:mx-0"
            >
              Book My Spot Now
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-bold justify-center lg:justify-start">
              <Calendar className="w-5 h-5" />
              {dateText}
            </div>
          </div>

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img src={heroImage} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section id="register" className="bg-[#F8F6E8] px-4 pb-16">
        <div
          className="max-w-md mx-auto bg-[#FFFDF6] border border-[#E5E3DA]
                     rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] p-6"
        >
          <h3 className="text-center text-lg font-semibold text-[#312B24] mb-5">
            Fill the details below to sign up
          </h3>

          <form onSubmit={onSubmit} className="space-y-4">
            <input
              required
              placeholder="Full Name"
              className="w-full h-12 rounded-xl border px-4"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full h-12 rounded-xl border px-4"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              required
              placeholder="Phone Number"
              inputMode="numeric"
              className="w-full h-12 rounded-xl border px-4"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                })
              }
            />

            <select
              required
              className="w-full h-12 rounded-xl border px-4 bg-white"
              value={form.profession}
              onChange={(e) => setForm({ ...form, profession: e.target.value })}
            >
              <option value="" disabled>
                Select Profession
              </option>
              <option>Working Professional</option>
              <option>Business Owner / Entrepreneur</option>
              <option>Student</option>
              <option>Freelancer</option>
              <option>Other</option>
            </select>

            <button
              type="submit"
              disabled={submitting}
              className="w-full h-12 bg-[#6EC1E4] text-white font-extrabold rounded-xl
                         shadow-[0_12px_32px_rgba(0,0,0,0.25)]
                         hover:brightness-105 transition
                         disabled:opacity-60"
            >
              {submitting ? "Processing..." : "Join Now for ₹99"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
