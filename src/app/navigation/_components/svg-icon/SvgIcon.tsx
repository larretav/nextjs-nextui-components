import { IconSvgProps } from '@/types'
import React from 'react'
import { IconType } from 'react-icons'

const SvgIcon = ({
  size = 24,
  width,
  height,
  // color,
  children,
  ...props
}: IconSvgProps) => {
  return (
    <div>
      <svg
        height={size || height}
        width={size || width}
        viewBox="0 0 24 24"
        {...props}
      >{children}</svg>
    </div>
  )
}

export default SvgIcon