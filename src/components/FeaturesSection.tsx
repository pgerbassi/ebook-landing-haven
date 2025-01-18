import { BookOpen, Brain, Clock, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Abordagem Científica",
    description: "Baseado em ciência cognitiva e metodologias de aprendizado comprovadas",
  },
  {
    icon: Clock,
    title: "Eficiência de Tempo",
    description: "Aprenda mais rápido com nosso caminho de aprendizado estruturado",
  },
  {
    icon: Target,
    title: "Orientado a Objetivos",
    description: "Marcos claros e acompanhamento de progresso",
  },
  {
    icon: BookOpen,
    title: "Conteúdo Completo",
    description: "Tudo que você precisa em um só lugar",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 animate-slideUp">
          Por Que Escolher Nosso Método?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};