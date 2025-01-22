import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const consent = localStorage.getItem('youtube-cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('youtube-cookie-consent', 'accepted');
    setShowConsent(false);
    toast({
      title: "Cookies aceitos",
      description: "Suas preferências foram salvas.",
    });
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          Este site usa cookies do YouTube para reproduzir vídeos. Ao aceitar, você concorda com o uso desses cookies.
        </p>
        <Button 
          onClick={acceptCookies}
          className="bg-orange-500 hover:bg-orange-600"
        >
          Aceitar Cookies
        </Button>
      </div>
    </div>
  );
};