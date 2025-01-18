import { Target, Globe, Brain, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const objectives = [
  {
    icon: Globe,
    title: "Master Multiple Languages",
    description: "Break language barriers and communicate confidently in various languages, opening doors to new cultures and opportunities.",
  },
  {
    icon: Brain,
    title: "Accelerated Learning",
    description: "Learn languages up to 3x faster with our proven polyglot methodology and cognitive enhancement techniques.",
  },
  {
    icon: Target,
    title: "Career Growth",
    description: "Boost your professional value and access international job markets with multilingual proficiency.",
  },
  {
    icon: Rocket,
    title: "Personal Achievement",
    description: "Experience the satisfaction of mastering multiple languages and joining the elite group of global polyglots.",
  },
];

export const ObjectivesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">
            Transform Your Life as a Polyglot
          </h2>
          <p className="text-lg text-gray-600">
            Unlock your full potential and achieve your language learning goals with our comprehensive system
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {objectives.map((objective) => (
            <Card key={objective.title} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <objective.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {objective.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-primary mb-6">
            Join thousands of successful language learners who have achieved their polyglot dreams
          </p>
          <div className="inline-flex items-center gap-8 text-gray-600">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">10k+</div>
              <div className="text-sm">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};