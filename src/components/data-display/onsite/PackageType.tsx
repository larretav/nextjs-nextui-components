import React, { useMemo } from 'react'
import Image from 'next/image'

type Props = {
  type: "box" | "envelope" | "pallet"
  width?: number,
  height?: number
  className?: string
}

export default function PackageType({ type, width = 40, height = 40, className = "" }: Props) {

  const imageSrc: Record<Props['type'], { src: string, alt: string }> = useMemo(() => (({
    box: {
      src: '/assets/package-type/box.png',
      alt: 'caja.png'
    },
    envelope: {
      src: '/assets/package-type/envelope.png',
      alt: 'sobre.png'
    },
    pallet: {
      src: '/assets/package-type/pallet.png',
      alt: 'tarima.png'
    }
  })), [type]);

  return (
    <Image src={imageSrc[type].src} alt={imageSrc[type].alt}
      width={width}
      height={height}
      className={className}
    />
  )
}