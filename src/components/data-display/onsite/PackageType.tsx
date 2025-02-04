import React, { useMemo } from 'react'
import Image from 'next/image'
import type { PackageType as TypePackageType } from '@/types'
import { cn } from '@/lib/utils'

type Props = {
  type: TypePackageType
  width?: number,
  height?: number
  className?: string
}

const packages: Record<TypePackageType, { src: string, alt: string }> = {
  box: {
    src: '/assets/package-type/box.png',
    alt: 'box.png'
  },
  envelope: {
    src: '/assets/package-type/envelope.png',
    alt: 'envelope.png'
  },
  pallet: {
    src: '/assets/package-type/pallet.png',
    alt: 'pallet.png'
  }
}

export const PackageType = ({ type, width = 40, height = 40, className = "" }: Props) => {

  return (
    <Image
      src={packages[type].src}
      alt={packages[type].alt}
      width={width}
      height={height}
      className={cn('object-contain', className)}
    />
  )
}