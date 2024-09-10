'use client';
import { Chip } from '@nextui-org/chip'
import { extendVariants } from '@nextui-org/system'

export const Status = extendVariants(Chip, {
  variants: {
    color: {
      blue: {
        content: "text-sky-600 dark:text-sky-500",
        base: "bg-sky-500/20",
        dot: "bg-sky-500"
      },
    },
    variant: {
      dot: {
        content: "hidden",
        base: "border-none h-fit w-fit p-0",
        dot: "h-4 w-4 m-0"
      },
    },

  },
  defaultVariants: {
    variant: "flat",
    size: "sm",
    radius: "sm"
  },
})
