import { BaseColors, ThemeColors } from "@nextui-org/theme";
import type { DefaultColors } from 'tailwindcss/types/generated/colors'


type BaseColorsKeys = keyof BaseColors;
type ThemeColorsWithoutBase = Omit<ThemeColors, BaseColorsKeys>;
export type NextUIColorKeys = { [K in keyof ThemeColorsWithoutBase]: K }[keyof ThemeColorsWithoutBase]

export type TailwindColorKeys = { [K in keyof DefaultColors]: K }[keyof DefaultColors]