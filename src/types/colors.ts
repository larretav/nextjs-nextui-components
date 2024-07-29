import { BaseColors, ColorScale, ThemeColors } from "@nextui-org/theme";

type BaseColorsKeys = keyof BaseColors;
type ThemeColorsWithoutBase = Omit<ThemeColors, BaseColorsKeys>;
export type ColorKeys = { [K in keyof ThemeColorsWithoutBase]: K }[keyof ThemeColorsWithoutBase]