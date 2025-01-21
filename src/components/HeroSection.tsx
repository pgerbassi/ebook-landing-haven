import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroContent {
  title: string;
  subtitle: string;
  button_text: string;
}

interface HeroSectionProps {
  content: HeroContent;
}

export const HeroSection = ({ content }: HeroSectionProps) => {
  // Convert YouTube URL to embed URL
  const videoId = "YsC4J0c9PmA";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slideUp">
              {content.title}
            </h1>
            <p className="text-xl mb-8 text-orange-100 animate-slideUp [animation-delay:200ms]">
              {content.subtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-100 hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-white via-orange-100 to-white bg-[length:400%_100%] animate-shine"
            >
              {content.button_text} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl animate-float">
              <iframe
                src={embedUrl}
                title="YouTube video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};