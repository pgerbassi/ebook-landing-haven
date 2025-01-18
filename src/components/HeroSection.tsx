import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slideUp">
              Domine Qualquer Idioma com Nosso Método Revolucionário
            </h1>
            <p className="text-xl mb-8 text-orange-100 animate-slideUp [animation-delay:200ms]">
              Desbloqueie seu potencial para aprender qualquer idioma de forma eficiente e eficaz com nosso sistema comprovado.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-100 hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-white via-orange-100 to-white bg-[length:400%_100%] animate-shine"
            >
              Comece Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative animate-float">
              <img
                src="/placeholder.svg"
                alt="Prévia do Ebook"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};