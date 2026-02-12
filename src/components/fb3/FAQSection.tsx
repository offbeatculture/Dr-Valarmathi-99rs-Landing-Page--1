import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly will I learn in the 2-day challenge?",
    answer: "You'll discover the fundamental connection between gut health and mental clarity, learn specific protocols to reset your digestive system, practice proven mindfulness techniques for calming mental chatter, and receive a complete energy optimization system you can use daily."
  },
  {
    question: "Is this suitable for beginners with no wellness experience?",
    answer: "Absolutely! This challenge is designed for anyone, regardless of their current wellness knowledge. Dr. Valarmathi breaks down complex concepts into simple, actionable steps that anyone can follow and implement immediately."
  },
  {
    question: "What if I can't attend the live sessions?",
    answer: "No worries! All sessions are recorded and you'll have lifetime access to the materials. You can complete the challenge at your own pace and revisit the content whenever you need it."
  },
  {
    question: "How quickly will I see results?",
    answer: "Many participants notice improvements in energy and mental clarity within the first 24 hours. The full benefits of gut healing may take a few weeks to manifest completely, but the foundational changes begin immediately."
  },
  {
    question: "Is there any ongoing support after the challenge?",
    answer: "Yes! You'll get access to our exclusive community group where you can connect with other participants and receive ongoing guidance. Dr. Valarmathi also provides follow-up resources to help you maintain your transformation."
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "We're so confident in the power of this program that we offer a 30-day money-back guarantee. If you don't feel a significant improvement in your energy and mental clarity, we'll refund your investment completely."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-cream">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 lg:mb-16 fade-in">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-wellness-text mb-4">
            Frequently Asked <span className="heading-italic">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about your transformation journey.
          </p>
        </div>
        
        <div className="fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="wellness-card border-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-wellness-text hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
     
    </section>
  );
};