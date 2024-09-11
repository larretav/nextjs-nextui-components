'use client';
import { IconEcommerce } from '@/components/data-display/onsite/IconEcommerce'
import { EcommercePlatforms, ShipmentStatus, Shippers } from '@/types'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import React from 'react'
import { MoreOptionsShipment } from './MoreOptionsShipment'
import { Status } from '@/components/data-display/onsite/Status';
import { ShipperType } from '@/components/data-display/onsite/ShipperType';
import OriginDestination from './OriginDestination';

type Props = {
  customer: string,
  date: string,
  origin: string,
  destination: string,
  orderNumber: string,
  cost: number,
  status: ShipmentStatus,
  ecommerce: EcommercePlatforms,
  shipper: Shippers
}

const ShipmentCard = ({ cost, customer, date, destination, orderNumber, origin, status, ecommerce, shipper }: Props) => {
  return (
    <Card className="min-w-[300px] px-2 shadow-md text-default-600">
      <CardHeader className="justify-between">
        <div className="flex gap-4 items-center ">
          <IconEcommerce ecommerce={ecommerce} className="size-7" />
          <span className="text-xl font-bold items-center">#{orderNumber}</span>
          <Status color="blue" variant="dot" />
        </div>
        <MoreOptionsShipment />
      </CardHeader>

      <CardBody className="gap-5">
        <div className="flex justify-between items-center">
          <span className="text-base font-medium">{customer}</span>
          <span className="text-base">{date}</span>
        </div>

        <div className="flex justify-between items-center ">
          {/* Origin - Destination */}
          <OriginDestination origin={origin}  destination={destination} />

          {/* IconShipper & Cost */}
          <div className="flex flex-col justify-between items-end  gap-3">
            <ShipperType shipper={shipper} />
            <span className="text-3xl font-semibold">${cost.toFixed(2)}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ShipmentCard


