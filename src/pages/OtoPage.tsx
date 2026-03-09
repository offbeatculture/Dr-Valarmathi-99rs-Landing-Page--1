import React from "react";

export default function OtoPage() {
  return (
    <div className="w-full bg-[#FBF7F1] text-[#1f2d2a]">

      {/* TOP BAR */}
      <div className="bg-[#12332F] text-white text-center text-sm py-2 px-4 sticky top-0 z-50">
        Wait – Don&apos;t close this page. This offer disappears the moment you leave.
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-sm font-semibold text-[#2c6b63] mb-2">
              For everyone who just joined the Breath Chakra Reset
            </p>

            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
              Your nervous system just got your attention.  
              Now give it the entire toolkit to support it.
            </h1>

            <p className="text-lg text-[#4b5f5b] mb-8">
              Everyday practical tools for the anxiety, the 3am mind, the bad days,
              and every moment your body needs support — starting tonight.
            </p>

            <a
              href="#order"
              className="inline-block bg-[#1f5d55] hover:bg-[#184b45] text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              The Nervous System SOS Kit — Complete Bundle  
              <span className="block text-sm mt-1">
                <del>₹4,999</del> → ₹999
              </span>
            </a>

            <p className="mt-3 text-sm">
              <a href="/ty-er-fb5" className="underline text-gray-600">
                No thanks, I&apos;ll manage without it
              </a>
            </p>
          </div>

          {/* VIDEO PLACEHOLDER */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-black aspect-video flex items-center justify-center text-white">
            Valarmathi Video
          </div>
        </div>
      </section>

      {/* BRIDGE */}
      {/* BRIDGE */}
<section className="max-w-3xl mx-auto px-6 py-10">
  <div className="bg-white border border-[#e6e1d8] rounded-2xl shadow-md p-6 md:p-8 text-center">
    <p className="text-lg leading-relaxed text-[#405552]">
      Something brought you to this masterclass today. Maybe it&apos;s the anxiety
      that doesn&apos;t fully go away. The mind that won&apos;t switch off.
      The body that stays braced even when nothing is actually wrong.
      <br /><br />
      The Breath Chakra Reset will give you a direct experience of what it feels
      like when your nervous system actually settles. That experience is real.
      And it&apos;s yours to keep.
      <br /><br />
      This kit is what you reach for after – and between – every session.
      <br /><br />
      For the morning your body wakes up already tired.  
      For the moment before the conversation you&apos;ve been dreading.  
      For the desk at 3pm.  
      For the midnights you are having.
      <br /><br />
      <strong>Not more learning.</strong> Practical tools you can open right now,
      right there, wherever you are.
    </p>
  </div>
</section>

      {/* PRODUCT SECTION */}
      <section className="bg-[#F3EFE7] py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-3">
              What&apos;s inside The Nervous System SOS Kit
            </h2>
            <p className="text-[#546b67]">
              Five tools. Each one built for a specific moment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <Card
              tag="Use It During the Session"
              title="The Breath Chakra Reset Workbook"
              points={[
                "Fill-in-the-blank reveals across all 6 sections — no note-taking, just receiving",
                "3-zone body assessment so you know where your stress lives before you begin",
                "Phase-by-phase reflection guide for the 30-minute breathwork journey",
              ]}
            />

            {/* CARD 2 */}
            <Card
              tag="Use It in the Hard Moments"
              title="The 5-Minute Body Reset — Emergency Protocol Guide"
              points={[
                "Mind racing at 2am · Sudden anxiety spike · Before a hard conversation",
                "Overwhelm and can’t start · Anger flash · Woke up already exhausted",
                "After confrontation · Catastrophising loop · Feeling numb · Midday crash",
              ]}
            />

            {/* CARD 3 */}
            <Card
              tag="Understand What’s Happening Inside"
              title="Hormone Reset Field Guide"
              points={[
                "What chronic stress does to serotonin, melatonin, oxytocin and dopamine",
                "Signs of depletion and lifestyle signals that restore them",
                "Personal hormone pattern self-check",
              ]}
            />

            {/* CARD 4 */}
            <Card
              tag="Build the Daily Habit"
              title="30 Days of Body Conversations — Daily Prompt Cards"
              points={[
                "Week 1 – First contact: shoulders, stomach, jaw, feet, chest",
                "Week 2 – Listening deeper: where you brace and where breath stops",
                "Weeks 3 & 4 – what the body remembers and wants",
              ]}
            />

            {/* CARD 5 */}
            <Card
              tag="Put It On and Let It Work"
              title="The Nervous System Playlist"
              points={[
                "Morning energy · Stress relief · Overthinking shutdown · Deep rest",
                "Emotional release · Focus without stress · General calm",
                "Indian classical, ambient and world music curated for regulation",
              ]}
            />

          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">

        <p className="uppercase tracking-wide text-sm text-[#6a807b] mb-3">
          What this is worth
        </p>

        <h3 className="text-3xl font-serif mb-10">
          Five tools. One price. Everything you need to support what you started today.
        </h3>

        <div className="bg-white rounded-2xl shadow p-8 text-left space-y-4 text-lg">
          <ValueItem name="The Breath Chakra Reset Workbook" price="₹999" />
          <ValueItem name="The 5-Minute Body Reset Protocols" price="₹999" />
          <ValueItem name="Cortisol & Hormone Reset Field Guide" price="₹999" />
          <ValueItem name="30 Days of Body Conversations" price="₹999" />
          <ValueItem name="The Nervous System Playlist" price="₹999" />

          <hr />

          <div className="flex justify-between font-semibold">
            <span>Total Value</span>
            <span className="line-through">₹4,999</span>
          </div>
        </div>

        <p className="mt-8 text-xl font-semibold text-[#1f5d55]">
          Today only: ₹999 — 80% off · One-time payment · Instant access · This page only
        </p>

      </section>

      {/* FINAL CTA */}
      <section
        id="order"
        className="bg-[#12332F] text-white py-20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="inline-block bg-[#1f5d55] px-4 py-1 rounded-full text-sm mb-6">
            One Time Offer — This Page Only
          </span>

          <h3 className="text-4xl font-serif mb-8">
            The complete Nervous System SOS Kit — added to your order right now
          </h3>

          <div className="text-left max-w-xl mx-auto mb-10 space-y-3">
            <Checklist>✓ The Breath Chakra Reset Workbook</Checklist>
            <Checklist>✓ The 5-Minute Body Reset Protocols</Checklist>
            <Checklist>✓ Cortisol & Hormone Reset Field Guide</Checklist>
            <Checklist>✓ 30 Days of Body Conversations</Checklist>
            <Checklist>✓ The Nervous System Playlist</Checklist>
          </div>

          <p className="text-xl mb-8">
            <del>₹4,999</del> → <strong>₹999</strong>  
            <br />
            One-time payment · Instant digital access · Disappears when you leave
          </p>

          <button className="bg-[#2fb4a6] hover:bg-[#25a194] text-[#0b2b27] font-semibold px-10 py-4 rounded-xl text-lg transition">
            Yes — Add the SOS Kit to My Order
          </button>

          <p id="skip" className="mt-4">
            <a href="#" className="underline text-sm text-gray-300">
              No thanks — I&apos;ll manage on my own
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0e2623] text-gray-300 text-center text-sm py-6 px-6">
        This is a digital product. All 5 assets delivered after purchase.
        This offer is available on this page only and will not be shown again.
      </footer>
    </div>
  );
}


/* ---------------------- */
/* Small Components */
/* ---------------------- */

function Card({ tag, title, points }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
      <span className="inline-block text-xs font-semibold bg-[#e5f2ef] text-[#1f5d55] px-3 py-1 rounded-full mb-4">
        {tag}
      </span>

      <h4 className="text-xl font-semibold mb-4">
        {title}
      </h4>

      <ul className="space-y-2 text-[#4a5f5b]">
        {points.map((p, i) => (
          <li key={i}>→ {p}</li>
        ))}
      </ul>
    </div>
  );
}

function ValueItem({ name, price }) {
  return (
    <div className="flex justify-between">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
}

function Checklist({ children }) {
  return (
    <div className="text-lg">
      {children}
    </div>
  );
}