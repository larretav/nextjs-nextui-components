import { nextui } from '@nextui-org/theme'
import { nextuiConfig } from './nextui.config'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {

      keyframes: {
        'bg-expand': {
          '0%': { width: '40%' },
          '100%': { width: '100%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },

      },
      animation: {
        'bg-expand': 'bg-expand 250ms cubic-bezier(.5,.21,.21,1) 1',
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui(nextuiConfig),

    ({ addUtilities }) => {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none", /* IE and Edge */
          "scrollbar-width": "none" /* Firefox */
        },

        ".scrollbar-visible::-webkit-scrollbar": {
          display: "block",
        },
        ".scrollbar-visible": {
          "-ms-overflow-style": "auto", /* IE and Edge */
          "scrollbar-width": "auto" /* Firefox */
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

