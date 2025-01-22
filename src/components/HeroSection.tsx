import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";

interface HeroContent {
  title: string;
  subtitle: string;
  button_text: string;
  background_image_url: string;
}

interface HeroSectionProps {
  content: HeroContent;
}

export const HeroSection = ({ content }: HeroSectionProps) => {
  const isMobile = useIsMobile();
  const videoId = "YsC4J0c9PmA";
  const paymentLink = "https://pay.hotmart.com/D96966130K?bid=1735330800536";
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('youtube-cookie-consent');
    setCookiesAccepted(consent === 'accepted');
  }, []);

  const embedUrl = `https://www.youtube.com/embed/${videoId}${cookiesAccepted ? '' : '?nocookie=true'}`;

  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90"
        style={{
          backgroundImage: `url(${content.background_image_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slideUp">
              {content.title}
            </h1>
            <p className="text-xl mb-8 text-orange-100 animate-slideUp [animation-delay:200ms]">
              {content.subtitle}
            </p>
            <a 
              href={paymentLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-100 hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-white via-orange-100 to-white bg-[length:400%_100%] animate-shine"
              >
                {content.button_text} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          <div className={`${isMobile ? 'w-screen -mx-4' : 'lg:w-1/2'}`}>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl animate-float">
              {!cookiesAccepted && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-center p-4">
                  <p className="text-gray-600">
                    Por favor, aceite os cookies do YouTube para visualizar o vídeo.
                  </p>
                </div>
              )}
              <iframe
                src={embedUrl}
                title="YouTube video"
                className={`absolute inset-0 w-full h-full ${!cookiesAccepted ? 'opacity-0' : ''}`}
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