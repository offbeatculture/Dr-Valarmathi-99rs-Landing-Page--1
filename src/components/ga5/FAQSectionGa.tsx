import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will I get Recording?",
    answer:
      "You will get the recording only if you opt in for the recording during checkout."
  },
  {
    question: "Is it in Hindi or English?",
    answer:
      "This workshop will be conducted in basic English only."
  },
  {
    question: "What is the duration?",
    answer:
      "It is a 2.5 hours program."
  },
  {
    question: "What are the next steps after registering for the Masterclass?",
    answer:
      "You have to join the WhatsApp group for the Masterclass. All announcements will be communicated in the group. We will also share the Masterclass link over email."
  },
  {
    question: "Is it Live?",
    answer:
      "This Masterclass was originally recorded during a live session and is now available as a limited-time broadcast. You’ll experience the full energy of the original session, just like those who attended it live."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-10 lg:py-14 px-4 bg-[#F8F6E8]">
      <div className="container mx-auto max-w-3xl">
        
        <div className="text-center mb-8 lg:mb-10 fade-in">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-wellness-text mb-3">
            Frequently Asked <span className="heading-italic">Questions</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before joining the Masterclass.
          </p>
        </div>
        
        <div className="fade-in">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/80 border border-[#E7DFC8] rounded-2xl px-5 shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-wellness-text hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-5 pt-1">
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