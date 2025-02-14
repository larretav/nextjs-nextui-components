
import { useState, useEffect } from 'react';

import tailwindThemeConfig from "tailwindcss/defaultTheme";


const screens = { xs: '0px', ...tailwindThemeConfig.screens };

type Breakpoints = keyof typeof screens

function useBreakpoint(key: Breakpoints, direction: 'up' | 'down' = 'down') {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = screens[key];

    if (!mediaQuery) return;

    const query = direction === "up"
      ? `(min-width: ${mediaQuery})`  // Después del breakpoint
      : `(max-width: ${+mediaQuery.replaceAll("px", "") - 1}px)`; // Antes del breakpoint

    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      if (media.matches !== matches)
        setMatches(media.matches);


      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);

      return () => media.removeEventListener('change', listener);
    }

  }, [key, matches]);

  return matches;
}

export default useBreakpoint;
