'use client';
import { cn } from '@/lib/utils';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { getNextUIOrTailwindColor } from '@/utils';
// import { css } from '@emotion/css';
import { Radio, RadioProps } from '@heroui/radio'
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';
import React from 'react'

type Props = RadioProps & {
  activeColor?: NextUIColorKeys | TailwindColorKeys,
}

export const StatusFilterRadio = ({ activeColor, children, ...otherProps }: Props) => { 
  const { theme = 'light' } = useTheme();
  const isSSR = useIsSSR();

  const accentColor = getNextUIOrTailwindColor(activeColor || 'primary', 'light', theme === 'dark' ? 800 : 500, 'rgba', 100);
  const bgColor = getNextUIOrTailwindColor(activeColor || 'primary', 'light', 500, 'rgba', theme === 'dark' ? 15 : 5);
  const hoverColor = getNextUIOrTailwindColor(activeColor || 'primary', 'light', 500, 'rgba', theme === 'dark' ? 20 : 10);

  if (isSSR) return null;

  return (
    <Radio
      {...otherProps}
      // classNames={{
      //   label: "font-medium text-default-600",
      //   control: css({ backgroundColor: accentColor }),
      //   base: cn(
      //     "inline-flex m-0 max-w-full bg-content1 hover:bg-content2 items-center justify-between transition-all",
      //     "flex-row-reverse cursor-pointer rounded-lg gap-9 px-3 py-2 border-2 border-transparent",
      //     css({
      //       backgroundColor: bgColor,
      //       '&:hover': {
      //         backgroundColor: hoverColor
      //       },
      //       '&[data-selected="true"], &[data-selected="true"] > span ': {
      //         borderColor: accentColor + " !important"
      //       },
      //     })
      //   ),
      // }}
    >
      {children}
    </Radio>
  );
}
