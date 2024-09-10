import Image from 'next/image'
import React from 'react'
import { Shippers } from '@/types';
import { BagClickSolid } from '@/components/icons';
import clsx from 'clsx';

type Props = {
  shipper: Shippers,
  isEcommerce?: boolean,
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'],
}

const shippers: Record<Shippers, any> = {
  pkt1: '/assets/shippers/shipper-dhl.png',
  paquetexpress: '/assets/shippers/shipper-paquetexpress.png',
  fedex: '/assets/shippers/shipper-fedex.png',
  dhl: '/assets/shippers/shipper-pkt1.png',
  ups: '/assets/shippers/shipper-ups.png',
}


export const ShipperType = ({ shipper, isEcommerce = false, className }: Props) => {
  return (
    <div className={"w-20 h-9 relative overflow-hidden rounded-lg " + className}>
      <Image
        src={shippers[shipper]}
        alt={shipper}
        width={80}
        height={35}
        className="object-cover w-full h-full"
      />

      {
        (isEcommerce && (shipper === "fedex" || shipper === "paquetexpress"))  &&  <BagClickSolid className={clsx(
          "size-2 md:size-3 absolute top-px right-px ", {

          'text-white': shipper === "fedex",
          'text-[#253779]': shipper === "paquetexpress"
        }
        )} />
      }

    </div >
  )
}
