import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7k_ibL4l57reSl5_tU-Iy8f8ou_FpC3Pvjj_38AalAQLxGmFEqcbrLElxub1pso31_ZdukwyIqCI/pub?gid=138894925&single=true&output=csv";

export default function Thankupage7999() {
  const [eventDate, setEventDate] = useState("29 Apr 2026");
  const [eventTime, setEventTime] = useState("Wednesday | 6:30 PM to 10:00 PM");

  useEffect(() => {
    fetch(SHEET_CSV, { cache: "no-store" })
      .then((res) => res.text())
      .then((data) => {
        const rows = data.trim().split(/\r?\n/);
        const row = rows[1];

        if (!row) return;

        const columns =
          row
            .match(/("([^"]|"")*"|[^,]+)/g)
            ?.map((c) =>
              c.trim().replace(/^"|"$/g, "").replace(/""/g, '"')
            ) || [];

        const date = columns[0]?.trim();
        const time = columns[1]?.trim();

        if (date) setEventDate(date);
        if (time) setEventTime(time);
      })
      .catch(() => {
        setEventDate("29 Apr 2026");
        setEventTime("Wednesday | 6:30 PM to 10:00 PM");
      });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8F6E8] px-4 py-12">
      <div className="max-w-lg w-full text-center space-y-6">
        <CheckCircle className="w-16 h-16 mx-auto text-[#175B53]" />

        <h1 className="text-2xl md:text-4xl text-[#312B24]">
          Thank You for <span className="italic">Joining!</span>
        </h1>

        <p className="text-[#312B24]/80 text-base md:text-lg">
          Your spot for the <strong>Breath Chakra Liberation</strong> program is confirmed.
        </p>

        <p className="text-[#312B24]/80 text-base md:text-lg">
          📅 Your session starts on <strong>{eventDate}</strong>
        </p>

        <p className="text-[#312B24]/80 text-base md:text-lg">
          ⏰ Time: <strong>{eventTime}</strong>
        </p>

        <a
          // href="https://chat.whatsapp.com/FWr0dhP2K29BPZBROpMjZq"
          href="http://join.valarmathisrinivasan.in/5day-bcl-wap"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#175B53] hover:bg-[#134741] px-6 py-3 text-white font-semibold shadow-md transition-all duration-300"
        >
          👉 Click here to join WhatsApp Group
        </a>
      </div>
    </section>
  );
}