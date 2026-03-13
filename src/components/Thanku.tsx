import { CheckCircle } from "lucide-react";

export const ThankYouPage = () => {
  return (
   <section className="min-h-screen flex items-center justify-center bg-[#F8F6E8] px-4 py-12">
  <div className="max-w-lg w-full text-center space-y-4">

    {/* Icon */}
    <CheckCircle className="w-16 h-16 mx-auto text-[#175B53]" />

    {/* Heading */}
    <h1 className="heading-serif text-2xl md:text-3xl text-[#312B24]">
      🎉 Purchase <span className="heading-italic">Successful!</span>
    </h1>

    {/* Purchase Message */}
    <p className="text-[#312B24]/80 text-base md:text-lg leading-relaxed">
      You have successfully purchased the <strong>Nervous System Toolkit</strong>.
      <br />
      You will receive access to the toolkit within the next 
      <strong> 2 minutes</strong> in your email.
    </p>

    {/* Extra Note */}
    <p className="text-sm text-[#312B24]/70 mt-2">
      If you don’t see the email, please check your spam or promotions folder.
    </p>

  </div>
</section>
  );
};
