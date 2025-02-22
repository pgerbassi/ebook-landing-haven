import { GraduationCap, Languages, Brain, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface AboutContent {
  title: string;
  description: string;
  quote: string;
  stats: {
    students: string;
    languages: string;
    method: string;
    recognition: string;
  };
}

interface AboutSectionProps {
  content: AboutContent;
}

export const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
                {content.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Languages className="h-6 w-6 text-primary" />
                    <div className="text-sm font-medium">{content.stats.languages}</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <div className="text-sm font-medium">{content.stats.students}</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Brain className="h-6 w-6 text-primary" />
                    <div className="text-sm font-medium">{content.stats.method}</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <div className="text-sm font-medium">{content.stats.recognition}</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473" 
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};