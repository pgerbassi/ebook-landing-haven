import { BookOpen, Brain, Clock, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Scientific Approach",
    description: "Based on proven cognitive science and learning methodologies",
  },
  {
    icon: Clock,
    title: "Time Efficient",
    description: "Learn faster with our structured learning path",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Clear milestones and progress tracking",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Content",
    description: "Everything you need in one place",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Our Method?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};