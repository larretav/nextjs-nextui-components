'use client';
import { Button as HeroUIButton } from "@heroui/button";
import { extendVariants } from "@heroui/system";


export const Button = extendVariants(HeroUIButton, {
  variants: {
    color: {
      purple: "bg-purple-600 text-white",
      info: "bg-sky-600 text-white",
      blue: "bg-blue-600 text-white",
      emerald: "bg-emerald-600 text-white",
      contrast: "bg-default-900 text-default-100",
    },
    variant: {}
  },
  defaultVariants: {
    color: 'primary',
    radius: 'sm'
  },
  compoundVariants: [
    // BASE
    {
      className: 'data-[pressed=true]:scale-1',
      
    },
    // CONTRAST
    {
      color: 'contrast',
      variant: 'bordered',
      className: 'bg-transparent border-default-900 text-default-900'
    },
    // PURPLE
    {
      color: 'purple',
      variant: 'bordered',
      className: "bg-transparent border-purple-600 text-purple-600 dark:text-purple-500",
    },
    {
      color: 'purple',
      variant: 'flat',
      className: "bg-opacity-20 border-purple-600 text-purple-600 dark:text-purple-500",
    },
    {
      color: 'purple',
      variant: 'light',
      className: "data-[hover=true]:bg-purple-600/20 bg-transparent border-purple-600 text-purple-600 dark:text-purple-500",
    },

    // INFO
    {
      color: 'info',
      variant: 'bordered',
      className: "bg-transparent border-sky-600 text-sky-600 dark:text-sky-500",
    },
    {
      color: 'info',
      variant: 'flat',
      className: "bg-opacity-20 border-sky-600 text-sky-600 dark:text-sky-500",
    },
    {
      color: 'info',
      variant: 'light',
      className: "data-[hover=true]:bg-sky-600/20 bg-transparent border-sky-600 text-sky-600 dark:text-sky-500",
    },

    // INFO
    {
      color: 'blue',
      variant: 'bordered',
      className: "bg-transparent border-blue-600 text-blue-600 dark:text-blue-500",
    },
    {
      color: 'blue',
      variant: 'flat',
      className: "bg-opacity-20 border-blue-600 text-blue-600 dark:text-blue-500",
    },
    {
      color: 'blue',
      variant: 'light',
      className: "data-[hover=true]:bg-blue-600/20 bg-transparent border-blue-600 text-blue-600 dark:text-blue-500",
    },

    // EMERALD
    {
      color: 'emerald',
      variant: 'bordered',
      className: "bg-transparent border-emerald-600 text-emerald-600 dark:text-emerald-500",
    },
    {
      color: 'emerald',
      variant: 'flat',
      className: "bg-opacity-20 border-emerald-600 text-emerald-600 dark:text-emerald-500",
    },
    {
      color: 'emerald',
      variant: 'light',
      className: "data-[hover=true]:bg-emerald-600/20 bg-transparent border-emerald-600 text-emerald-600 dark:text-emerald-500",
    },


  ],
});
