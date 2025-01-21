import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const FontLoader = () => {
  const { data: settings } = useQuery({
    queryKey: ['global_settings'],
    queryFn: async () => {
      const { data } = await supabase
        .from('global_settings')
        .select('*')
        .single();
      return data;
    },
  });

  useEffect(() => {
    if (settings?.font_url) {
      const fontLink = document.getElementById('custom-font') as HTMLLinkElement;
      if (fontLink) {
        fontLink.href = settings.font_url;
      }

      const loadFont = async () => {
        const font = new FontFace(
          settings.font_family,
          `url(${settings.font_url})`
        );

        try {
          await font.load();
          document.fonts.add(font);
          console.log(`${settings.font_family} font loaded successfully`);
          // Apply the font to the body
          document.body.style.fontFamily = `${settings.font_family}, sans-serif`;
        } catch (error) {
          console.error(`Error loading ${settings.font_family} font:`, error);
        }
      };

      loadFont();
    }
  }, [settings]);

  return null;
};