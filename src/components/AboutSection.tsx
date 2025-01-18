import { GraduationCap, Languages, Brain, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
                Conheça Victor
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Victor é um poliglota apaixonado e empreendedor visionário que revolucionou a forma como as pessoas aprendem idiomas. Com sua experiência em dominar múltiplos idiomas simultaneamente, ele desenvolveu um método único e eficaz que está transformando a vida de milhares de estudantes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Languages className="h-6 w-6 text-primary" />
                    <div className="text-sm font-medium">8+ Idiomas</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <div className="text-sm font-medium">10k+ Alunos</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Brain className="h-6 w-6 text-primary" />
                    <div className="text-sm font-medium">Método Inovador</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Award className="h-6 w-6 text-primary" />
                    <div className="text-sm font-medium">Reconhecimento Internacional</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-xl font-medium text-gray-900 mb-4">
                    "Minha missão é democratizar o aprendizado de idiomas e provar que todos podem se tornar poliglotas."
                  </p>
                  <p className="text-primary font-semibold">- Victor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};