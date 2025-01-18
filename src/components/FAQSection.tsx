import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como isso é diferente de outros métodos de aprendizado de idiomas?",
    answer: "Nosso método combina ciência cognitiva comprovada com exercícios práticos, criando uma abordagem única que acelera o aprendizado enquanto garante retenção a longo prazo.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "A maioria dos alunos começa a ver melhorias significativas em suas habilidades linguísticas nos primeiros 30 dias seguindo nosso método consistentemente.",
  },
  {
    question: "Isso é adequado para iniciantes completos?",
    answer: "Sim! Nosso método foi projetado para funcionar em todos os níveis, desde iniciantes completos até alunos avançados que buscam aperfeiçoar suas habilidades.",
  },
  {
    question: "E se eu não ficar satisfeito com o produto?",
    answer: "Oferecemos garantia de devolução do dinheiro em 30 dias. Se você não ficar completamente satisfeito, devolveremos seu dinheiro sem fazer perguntas.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Perguntas Frequentes
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