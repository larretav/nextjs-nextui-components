import React, { useMemo } from 'react'
import Image from 'next/image'
import box from "@/assets/box.png"
import envelope from "@/assets/envelope.png"
import pallet from "@/assets/pallet.png"

type Props = {
    type: "box" | "envelope" | "pallet"
    width?: number,
    height?: number
    className?: string
}

export default function PackageType({ type, width = 40, height = 40, className = "" }: Props) {
    const imageSrc = useMemo(() => {
        switch (type) {
            case "box":
                return box
            case "envelope":
                return envelope
            case "pallet":
                return pallet
            default:
                return box // Fallback to a default image
        }
    }, [type])

    const altText = useMemo(() => {
        return `Image of a ${type}`
    }, [type])

    return (
        <Image src={imageSrc} alt={altText}
            width={width}
            height={height}
            className={className}
        />
    )
}