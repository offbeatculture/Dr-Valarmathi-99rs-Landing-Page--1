// src/pages/Thanku.tsx
import { ThankYouPageGa1 } from "@/components/ThankuGa1";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const ThankuGa = () => {
  // fires PageView + Lead on mount



  return (
    <main className="min-h-screen bg-[#F8F6E8]">

      <ThankYouPageGa1 />
    </main>
  );
};

export default ThankuGa;
