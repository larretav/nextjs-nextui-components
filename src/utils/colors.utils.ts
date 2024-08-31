import tailwindColors from 'tailwindcss/colors'
import { semanticColors } from '@nextui-org/theme'
import tailwindTheme from '@/tailwind-theme'

type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
type Type = "hex" | "rgba";


export const getTailwindColorHex = (colorName: string, scale: ColorScale = 500, type: Type = "hex", opacity: number = 100): string => {
  const colors = { ...tailwindColors } as Record<string, any>
  if (!colors?.[colorName]?.[scale]) return '';
  
  if (type === "rgba")
    return hexToRGBA(colors[colorName][scale], opacity)

  return colors[colorName][scale];
};

export const getNextUiColor = (
  colorName: string,
  theme: string,
  scale: ColorScale = 500,
  type: Type = "hex",
  opacity: number = 100
): string => {
  const colors = { ...semanticColors } as Record<string, any>

  if (!colors?.[theme]?.[colorName]?.[scale]) return '';

  if (type === "rgba")
    return hexToRGBA(colors[theme][colorName][scale], opacity);

  return colors[theme][colorName][scale];
};


export const hexToRGBA = (hex: string, alpha: number = 100) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r},${g},${b},${(alpha / 100).toFixed(2)})`;
}


export const rgbaToHex = (rgbaColor: string) => {
  const rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)$/;
  const match = rgbaColor.match(rgbaRegex);

  if (!match) return new Error(`Formato de color no válido. [${rgbaColor}]`);

  const [, r, g, b, a] = match;

  const hexR = toHex(r);
  const hexG = toHex(g);
  const hexB = toHex(b);
  const hexA = a ? toHex(Math.round(+a * 255)) : '';

  return `#${hexR}${hexG}${hexB}${hexA}`
}


const toHex = (value: number | string) => {
  const hex = (+value).toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};