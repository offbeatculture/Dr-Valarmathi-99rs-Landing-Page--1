// src/pages/Thanku.tsx
import { ThankYouPage } from "@/components/Thanku";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const Thanku5 = () => {
  // fires PageView + Lead on mount
   useFacebookPixel();


  return (
    <main className="min-h-screen bg-[#F8F6E8]">
      {/* NoScript fallback (safe to include here) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1525232074920142&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <ThankYouPage />
    </main>
  );
};

export default Thanku5;
