import { ColorScale, ConfigThemes, NextUIPluginConfig, ThemeColors } from "@nextui-org/theme";

// type ExtendedColors = Partial<ThemeColors> & Record<string, Record<number | string, string> & { DEFAULT?: string }>;
type ExtendedColors = Partial<ThemeColors> & Record<string, ColorScale>;

type NextUIPluginConfigExtended = NextUIPluginConfig & {
  themes: ConfigThemes & {
    light: { colors: ExtendedColors },
    dark: { colors: ExtendedColors }
  }
}

export const nextuiConfig: NextUIPluginConfig = {
  themes: {
    light: {
      colors: {
        primary: {
          50: "#E5FBD4",
          100: "#E5FBD4",
          200: "#C7F7AB",
          300: "#9BE77D",
          400: "#71CF59",
          500: "#3BAF2A",
          600: "#24961E",
          700: "#157D18",
          800: "#0D6517",
          900: "#085316",

          DEFAULT: "#3BAF2A",
        },
        secondary: {
          50: "#DEE2F9",
          100: "#D2D7F6",
          200: "#A7B1ED",
          300: "#717CC9",
          400: "#434C94",
          500: "#151B4E",
          600: "#0F1443",
          700: "#0A0E38",
          800: "#06092D",
          900: "#040625",

          DEFAULT: "#151B4E",
        },
      },
    },
    dark: {
      colors: {
        primary: {
          50: "#085316",
          100: "#0D6517",
          200: "#157D18",
          300: "#24961E",
          400: "#3BAF2A",
          500: "#71CF59",
          600: "#9BE77D",
          700: "#C7F7AB",
          800: "#E5FBD4",
          900: "#E5FBD4",

          DEFAULT: "#3BAF2A",
        },

        secondary: {
          50: "#040625",
          100: "#06092D",
          200: "#0A0E38",
          300: "#0F1443",
          400: "#151B4E",
          500: "#434C94",
          600: "#717CC9",
          700: "#A7B1ED",
          800: "#D2D7F6",
          900: "#DEE2F9",
          DEFAULT: "#151B4E",
        },
      },
    }
  }
}