'use client';
import { getNextUiColor, getNextUIOrTailwindColor, getTailwindColorHex, ThemeName } from '@/utils';
import { IconSvgProps } from '@/types'
import { useTheme } from 'next-themes';
import React from 'react'

export const SvgIcon = ({
  size = 24,
  width,
  height,
  children,
  viewBox = "0 0 24 24",
  color = "inherit",
  ...props
}: IconSvgProps) => {

  const { theme = 'light' } = useTheme();
  const hexColor = color !== 'inherit' ? getNextUIOrTailwindColor(color, theme as ThemeName) : undefined;

  return (
    <svg
      height={height || size}
      width={width || size}
      viewBox={viewBox}
      {...props}
      style={{ color: hexColor }}
    >{children}</svg>
  )
}