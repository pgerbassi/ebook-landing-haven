import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is this different from other language learning methods?",
    answer: "Our method combines proven cognitive science with practical exercises, creating a unique approach that accelerates learning while ensuring long-term retention.",
  },
  {
    question: "How long will it take to see results?",
    answer: "Most students start seeing significant improvements in their language skills within the first 30 days of following our method consistently.",
  },
  {
    question: "Is this suitable for complete beginners?",
    answer: "Yes! Our method is designed to work for all levels, from complete beginners to advanced learners looking to perfect their skills.",
  },
  {
    question: "What if I'm not satisfied with the product?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your purchase with no questions asked.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};