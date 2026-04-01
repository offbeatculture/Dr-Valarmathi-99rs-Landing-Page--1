// src/pages/Thanku.tsx
import { ThankYouPage } from "@/components/Thanku";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const ThankuGa5Oto = () => {
  // fires PageView + Lead on mount
  useFacebookPixel();

  return (
    <main className="min-h-screen bg-[#F8F6E8] flex flex-col items-center">

      {/* NoScript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1525232074920142&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* Purchase Success Message */}
      {/* <div className="max-w-xl mx-auto text-center py-2 px-4">
  <h1 className="text-xl md:text-2xl font-semibold text-[#12332F] mb-1">
    🎉 Purchase Successful!
  </h1>

  <p className="text-sm md:text-base text-[#12332F]">
    You have successfully purchased the <strong>Nervous System Toolkit</strong>.  
    You will receive access within the next <strong>2 minutes</strong> in your email.
  </p>
</div> */}

{/* Existing Thank You Page Content */}
<div>
  <ThankYouPage />
</div>
    </main>
  );
};

export default ThankuGa5Oto;