import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

export const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 animate-slideUp">
          Comece Sua Jornada de Aprendizado de Idiomas Hoje
        </h2>
        <div className="max-w-lg mx-auto">
          <Card className="border-2 border-orange-500 animate-slideUp hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center bg-orange-500 text-white py-8">
              <h3 className="text-2xl font-bold">Sistema Completo de Aprendizado de Idiomas</h3>
              <p className="text-3xl font-bold mt-4">R$247</p>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4 mb-6">
                {[
                  "Metodologia completa de aprendizado",
                  "200+ páginas de conteúdo estruturado",
                  "Exercícios práticos e planilhas",
                  "Ferramentas de acompanhamento de progresso",
                  "Acesso vitalício às atualizações",
                  "Garantia de 30 dias",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full text-lg py-6 bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-[length:400%_100%] animate-shine" 
                size="lg"
              >
                Comece Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};