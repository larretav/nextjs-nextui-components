'use client';
import { getNextUiColorHex, getTailwindColorHex } from '@/app/utils';
import { IconSvgProps } from '@/types'
import { useTheme } from 'next-themes';
import React from 'react'
import { IconType } from 'react-icons'

export const SvgIcon = ({
  size = 24,
  width,
  height,
  children,
  viewBox = "0 0 24 24",
  color = "white",
  ...props
}: IconSvgProps) => {

  const { theme = 'light' } = useTheme()
  const hexColor = !getTailwindColorHex(color) ? getNextUiColorHex(color, theme) : getTailwindColorHex(color);

  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox={viewBox}
      {...props}
      style={{color: hexColor}}
    >{children}</svg>
  )
}