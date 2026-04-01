import React from "react";
import { BookOpen, Zap, Brain, CalendarDays, Music } from "lucide-react";

export default function OtoPage() {
  return (
    <div className="w-full bg-[#FBF7F1] text-[#1f2d2a]">

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-10 pb-6 text-center">

        {/* GREEN BADGE */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-[#174f48] to-[#2b7a70] text-white px-6 py-2 rounded-full shadow text-sm font-medium">
            👏 You're registered for the Breath Chakra Reset
          </div>
        </div>

        {/* <p className="text-base font-bold text-[#2c6b63] mb-4">
          But before you go, I have something special for you…
        </p> */}

  <h1
  className="text-[28px] md:text-[40px] lg:text-[46px] leading-[1.12] text-[#1d1d1d] mb-4 font-normal"
  style={{
    fontFamily: "'Playfair Display', serif",
    letterSpacing: "-0.02em",
  }}
>
  Your <span className="underline font-bold">nervous system</span>
  <br />
  just asked for <span className="underline font-bold">help</span>.
</h1>

<p
  className="text-[18px] md:text-[24px] leading-[1.35] text-[#2a2724] mb-6 font-normal"
  style={{
    fontFamily: "'Playfair Display', serif",
    letterSpacing: "-0.02em",
  }}
>
  Give it the{" "}
  <span className="font-bold underline">full toolkit</span> to{" "}
  <span className="font-bold underline">reset</span>,{" "}
  <span className="font-bold underline">regulate</span> and{" "}
  <span className="font-bold underline">support your body</span>.
</p>

        {/* VIDEO CARD */}
      <div className="bg-white border-2 border-[#7A8A80] rounded-2xl shadow-md p-4 md:p-5 max-w-3xl mx-auto mb-8">
  <p className="text-[16px] md:text-[18px] text-[#2a2724] mb-4 tracking-wide">
    <span className="font-bold">IMPORTANT:</span>Watch This Short Video
  </p>


  <div className="w-full aspect-video overflow-hidden rounded-xl">
    <iframe
      src="https://fast.wistia.net/embed/iframe/5bibd8d7jk?autoplay=1&muted=1&controlsVisibleOnLoad=true"
      title="Valarmathi OTO Video"
      allow="autoplay; fullscreen"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
</div>

        {/* CTA */}
       <a
  href="https://pages.razorpay.com/pl_SQgXaE9YpHwF5r/view"
  className="inline-block bg-[#1f5d55] hover:bg-[#184b45] text-white 
  px-8 py-4 md:px-12 md:py-5 
  text-base md:text-lg 
  rounded-xl font-semibold transition"
>
  The Nervous System SOS Kit —
  <span className="block text-sm md:text-base mt-1">
    <del>₹4,999</del> → ₹999
  </span>
</a>

        {/* <p className="mt-4 text-sm">
          <a href="http://join.valarmathisrinivasan.in/fb-wap" className="underline text-gray-600 font-semibold">
            No thanks, Take me to WhatsApp Group
          </a>
        </p> */}

      </section>

      {/* BRIDGE */}
      <section className="max-w-3xl mx-auto px-6 pt-4 pb-12">
        <div className="bg-white border border-[#e6e1d8] rounded-2xl shadow-md p-6 md:p-8 text-left">
          <p className="text-lg leading-relaxed text-[#405552]">
            Something brought you to this masterclass today. Maybe it's the anxiety
            that doesn&apos;t fully go away. The mind that won&apos;t switch off.
            The body that stays braced even when nothing is actually wrong.
            <br /><br />
            The Breath Chakra Reset will give you a direct experience of what it feels
            like when your nervous system actually settles.
            <br /><br />
            This kit is what you reach for after – and between – every session.
          </p>
        </div>
      </section>

      {/* PRODUCT SECTION */}
    <section className="bg-[#F3EFE7] py-14">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-10">
            <h2
              className="text-3xl md:text-4xl mb-3"
              style={{ fontFamily: "Playfair Display, serif", letterSpacing: "-0.02em" }}
            >
              What&apos;s inside The Nervous System SOS Kit
            </h2>

            <p className="text-[#546b67]">
              Five tools. Each one built for a specific moment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card
              icon={<BookOpen />}
              tag="Use It During the Session"
              title="The Breath Chakra Reset Workbook"
              points={[
                "Fill-in-the-blank reveals across all 6 sections",
                "No note-taking, just receiving",
                "3-zone body assessment so you know where your stress lives before you begin",
                "Phase-by-phase reflection guide for the 30-minute breathwork journey",
              ]}
            />

            <Card
              icon={<Zap />}
              tag="Use It in the Hard Moments"
              title="The 5-Minute Body Reset Guide"
              points={[
                "Mind racing at 2am · Sudden anxiety spike · Before a hard conversation",
                "Overwhelm and can't start · Anger flash · Woke up already exhausted",
                "After a confrontation · Catastrophising loop · Feeling numb · Midday crash",
              ]}
            />

            <Card
              icon={<Brain />}
              tag="Understand What’s Happening Inside"
              title="Hormone Reset Field Guide"
              points={[
                "What chronic stress does to serotonin, melatonin, oxytocin and dopamine",
                "Signs of depletion for each hormone and the lifestyle signals that restore them",
                "Personal hormone pattern self-check",
                "identify where to focus first",
              ]}
            />

           <div className="lg:col-span-3 flex justify-center gap-8 flex-wrap">

  <div className="max-w-sm w-full">
    <Card
      icon={<CalendarDays />}
      tag="Build the Daily Habit"
      title="30 Days of Body Conversations"
      points={[
        "Week 1: First contact — shoulders, stomach, jaw, feet, chest",
        "Week 2: Listening deeper — where you brace, where the breath stops",
        "Weeks 3 & 4: What the body remembers and what it actually wants",
      ]}
    />
  </div>

  <div className="max-w-sm w-full">
    <Card
      icon={<Music />}
      tag="Put It On and Let It Work"
      title="The Nervous System Playlist"
      points={[
        "Morning energy · Stress & anxiety relief · Overthinking shutdown · Deep rest",
        "Emotional release · Focus without stress · General calm anytime",
        "Indian classical, ambient, and world music curated for nervous system regulation",
      ]}
    />
  </div>

</div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="order" className="bg-[#12332F] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h3
            className="text-3xl md:text-4xl mb-8"
            style={{ fontFamily: "Playfair Display, serif", letterSpacing: "-0.02em" }}
          >
            Add the complete Nervous System SOS Kit
          </h3>

          <p className="text-xl mb-8">
            <del>₹4,999</del> → <strong>₹999</strong>
          </p>

          <button
            onClick={() =>
              (window.location.href =
                "https://pages.razorpay.com/pl_SQgXaE9YpHwF5r/view")
            }
            className="bg-[#2fb4a6] hover:bg-[#25a194] text-[#0b2b27] font-semibold px-10 py-4 rounded-xl text-lg transition"
          >
            Yes — Add the SOS Kit to My Order
          </button>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0e2623] text-gray-300 text-center text-sm py-6 px-6">
        This is a digital product. All assets delivered after purchase.
      </footer>

    </div>
  );
}

/* COMPONENTS */

function Card({ icon, tag, title, points }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">

      <div className="flex items-center gap-3 mb-4">

        <div className="bg-[#2fb4a6]/15 text-[#2fb4a6] p-3 rounded-xl">
          {React.cloneElement(icon, { size: 26 })}
        </div>

        <span className="text-xs font-semibold bg-[#e5f2ef] text-[#1f5d55] px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>

      <h4
        className="text-xl mb-4"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
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