import React from "react";
import { BookOpen, Zap, Brain, CalendarDays, Music } from "lucide-react";

export default function OtoPage() {
  return (
    <div className="w-full bg-[#FBF7F1] text-[#1f2d2a]">

      {/* TOP BAR */}
      <div className="bg-[#12332F] text-white text-center text-base py-2 px-4 sticky top-0 z-50">
        {/* Wait – Don&apos;t close this page. This offer disappears the moment you leave. */}
        <span className="font-bold">🎉 You're registered!</span><br></br> Your spot for the Breath Chakra Reset  is confirmed.
      </div>

      {/* HERO */}
     <section className="max-w-5xl mx-auto px-6 pt-8 pb-4 md:pt-10 md:pb-6 text-center">

        {/* <h2
          className="text-2xl md:text-3xl mb-4"
          style={{ fontFamily: "Playfair Display, serif", letterSpacing: "-0.02em" }}
        >
          But before you go, I have something special for you…
        </h2> */}

        <p className="text-base font-bold text-[#2c6b63] mb-4">
          But before you go, I have something special for you…
        </p>

        <h1
          className="text-2xl md:text-5xl leading-tight text-[#2a2724] mb-6 font-bold"
          style={{ fontFamily: "Playfair Display, serif", letterSpacing: "-0.02em" }}
        >
          Your nervous system just got your attention.
          <br />
          Now give it the entire toolkit to support it.
        </h1>

        {/* WISTIA VIDEO */}
       {/* WISTIA VIDEO */}
<div className="max-w-3xl mx-auto mb-8">

  {/* Heading Section */}
  <div className="bg-[#12332F] text-center py-2">
    <h2 className="text-sm md:text-xl font-base text-white">
      IMPORTANT! Watch This Short Video
    </h2>

    <p className="text-white mt-1">
      (Click on Unmute Button)
    </p>
  </div>

  {/* Video */}
  <div className="w-full aspect-video overflow-hidden rounded-none">
    <iframe
      src="https://fast.wistia.net/embed/iframe/5bibd8d7jk?autoplay=1&muted=1&controlsVisibleOnLoad=true"
      title="Valarmathi OTO Video"
      allow="autoplay; fullscreen"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>

</div>
        {/* <p className="text-lg text-[#4b5f5b] mb-8">
          Everyday practical tools for the anxiety, the 3am mind, the bad days,
          and every moment your body needs support — starting tonight.
        </p> */}

        <a
  href="https://pages.razorpay.com/pl_SQgXaE9YpHwF5r/view"
  className="inline-block bg-[#1f5d55] hover:bg-[#184b45] text-white px-8 py-4 rounded-xl font-semibold transition"
>
  The Nervous System SOS Kit — Complete Bundle
  <span className="block text-sm mt-1">
    <del>₹4,999</del> → ₹999
  </span>
</a>

        <p className="mt-4 text-sm">
  <a href="/ty-er-fb5" className="underline text-gray-600 font-semibold">
    No thanks, I&apos;ll manage without it
  </a>
</p>

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

      {/* VALUE STACK */}
     {/* <section className="max-w-4xl mx-auto px-6 py-16 text-center"> */}

  {/* Image */}
<section className="flex justify-center px-6 py-24 bg-gradient-to-b from-[#f7f6f3] to-[#f1efe9]">

  <div className="max-w-3xl w-full bg-white rounded-[32px] shadow-2xl border border-gray-100 p-10 sm:p-14 text-center transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">

    {/* Heading */}
    <h3
      className="text-xl sm:text-2xl md:text-4xl font-bold md:font-semibold whitespace-nowrap mb-12"
      style={{ fontFamily: "Playfair Display, serif", letterSpacing: "-0.02em" }}
    >
      Five tools. One simple price.
    </h3>

    {/* Image */}
    <div className="flex justify-center mb-12">
      <img
        src="/valarmathi.jpeg"
        alt="Guide System"
        className="w-[360px] sm:w-[420px] md:w-[460px] max-w-full object-contain"
      />
    </div>

    {/* Pricing list */}
    <div className="text-left text-lg space-y-5">

      <ValueItem name="Breath Chakra Reset Workbook" price="₹999" />
      <ValueItem name="5-Minute Body Reset Protocols" price="₹999" />
      <ValueItem name="Hormone Reset Field Guide" price="₹999" />
      <ValueItem name="30 Days Body Conversations" price="₹999" />
      <ValueItem name="Nervous System Playlist" price="₹999" />

      <hr className="border-gray-200 my-6" />

      <div className="flex justify-between items-center font-semibold text-lg">
        <span>Total Value</span>
        <span className="line-through text-gray-400 text-xl">₹4,999</span>
      </div>

    </div>

    {/* Offer */}
    <div className="mt-12 bg-[#f7f6f3] rounded-2xl py-6 px-6">
      <p className="text-lg text-gray-600 mb-2">Limited-time offer</p>
      <p className="text-3xl font-bold text-[#1f5d55]">
        Today only: ₹999 — 80% off
      </p>
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
  onClick={() => window.location.href = "https://pages.razorpay.com/pl_SQgXaE9YpHwF5r/view"}
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

        <div className="bg-[#2fb4a6]/15 text-[#2fb4a6] p-3 rounded-xl shadow-sm">
          {React.cloneElement(icon, { size: 26, strokeWidth: 2.5 })}
        </div>

        <span className="text-xs font-semibold bg-[#e5f2ef] text-[#1f5d55] px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>

      <h4
        className="text-xl mb-4"
        style={{ fontFamily: "Playfair Display, serif", letterSpacing: "-0.02em" }}
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

function ValueItem({ name, price }) {
  return (
    <div className="flex justify-between">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
}