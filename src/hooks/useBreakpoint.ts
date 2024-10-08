import { useState, useEffect } from 'react';
import tailwindThemeConfig from 'tailwindcss/defaultTheme';

const screens = { xs: '0px', ...tailwindThemeConfig.screens };

type Breakpoints = keyof typeof screens;
type Direction = 'down' | 'up';

function useBreakpoint(key: Breakpoints, direction: Direction = 'down') {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = screens[key];

    if (!mediaQuery) return;

    // Construir la media query de acuerdo a la dirección especificada
    const query = direction === 'up'
      ? `(min-width: ${mediaQuery})`
      : `(max-width: ${mediaQuery})`;

    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      if (media.matches !== matches)
        setMatches(media.matches);

      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);

      return () => media.removeEventListener('change', listener);
    }

  }, [key, matches, direction]);

  return matches;
}

export default useBreakpoint;
