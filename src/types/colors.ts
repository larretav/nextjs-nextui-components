import { BaseColors, ThemeColors } from "@heroui/theme";
import type { DefaultColors as DefaulTailwindtColors } from 'tailwindcss/types/generated/colors'


type BaseColorsKeys = keyof BaseColors;
type ThemeColorsWithoutBase = Omit<ThemeColors, BaseColorsKeys>;
export type NextUIColorKeys = { [K in keyof ThemeColorsWithoutBase]: K }[keyof ThemeColorsWithoutBase]

type DefaulTailwindtColorsUpdated = Omit<DefaulTailwindtColors, "lightBlue" | "warmGray" | "trueGray" | "coolGray" | "blueGray" |  "current" | "transparent" |"black" |"white">
export type TailwindColorKeys = { [K in keyof DefaulTailwindtColorsUpdated]: K }[keyof DefaulTailwindtColorsUpdated]

export type NextUIColorKeys2 = { [K in keyof ThemeColorsWithoutBase]: K } [keyof ThemeColorsWithoutBase]
