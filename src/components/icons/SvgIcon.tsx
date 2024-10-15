'use client';
import { getNextUiColor, getTailwindColorHex } from '@/utils';
import { IconSvgProps } from '@/types'
import { useTheme } from 'next-themes';
import React from 'react'

export const SvgIcon = ({
  size = 24,
  width,
  height,
  children,
  viewBox = "0 0 24 24",
  color = "neutral",
  ...props
}: IconSvgProps) => {

  const { theme = 'light' } = useTheme();
  const hexColor = !getTailwindColorHex(color) ? getNextUiColor(color, theme) : getTailwindColorHex(color);

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