import tailwindColors from 'tailwindcss/colors'
import { semanticColors } from '@nextui-org/theme'

type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950


export const getTailwindColorHex = (colorName: string, scale: ColorScale = 500): string => {
  const colors = { ...tailwindColors } as Record<string, any>
  if (!colors?.[colorName]?.[scale]) return ''
  return colors[colorName][scale];
};

export const getNextUiColorHex = (colorName: string, theme: string, scale: ColorScale = 500): string => {
  const colors = { ...semanticColors } as Record<string, any>

  if (!colors?.[theme]?.[colorName]?.[scale]) return ''
  return colors[theme][colorName][scale];
};