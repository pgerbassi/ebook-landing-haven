import { BookOpen, Brain, Clock, Target } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon_name: string;
  display_order: number;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const iconMap = {
  Brain,
  Clock,
  Target,
  BookOpen,
};

export const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 animate-slideUp">
          Por Que Escolher Nosso Método?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon_name as keyof typeof iconMap];
            return (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};