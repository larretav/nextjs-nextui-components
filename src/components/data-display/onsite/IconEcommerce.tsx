import { EcommercePlatforms } from '@/types'
import Image, { ImageProps } from 'next/image'
import React from 'react'

type Props = {
  ecommerce: EcommercePlatforms,
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'],
  imageProps?: ImageProps
}

const ecommercePlatforms: Record<EcommercePlatforms, any> = {
  jumpseller: '/assets/ecommerce-platforms/jumpseller.webp',
  onsite: '/assets/ecommerce-platforms/onsite.webp',
  prestashop: '/assets/ecommerce-platforms/prestashop.webp',
  shopify: '/assets/ecommerce-platforms/shopify.webp',
  woocommerce: '/assets/ecommerce-platforms/woocommerce.webp',
}


export const IconEcommerce = ({ ecommerce, className, imageProps }: Props) => {
  return (
    <div className={"size-5 " + className}>
      <Image
        {...imageProps}
        src={ecommercePlatforms[ecommerce]}
        alt={ecommerce}
        width={20}
        height={20}
        className="w-full h-full object-contain"
      />
    </div>
  )
}