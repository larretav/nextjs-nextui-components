import { IconSvgProps } from '@/types'
import React from 'react'
import { IconType } from 'react-icons'

export const SvgIcon = ({
  size = 24,
  width,
  height,
  // color,
  children,
  viewBox = "0 0 24 24",
  ...props
}: IconSvgProps) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox={viewBox}
      {...props}
    >{children}</svg>
  )
}