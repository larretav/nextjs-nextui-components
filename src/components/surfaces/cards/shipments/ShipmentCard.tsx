'use client';
import { IconEcommerce } from '@/components/data-display/onsite/IconEcommerce'
import { EcommercePlatforms, ShipmentStatus } from '@/types'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import React from 'react'
import { MoreOptionsShipment } from './MoreOptionsShipment'
import { Status } from '@/components/data-display/onsite/Status';

type Props = {
  customer: string,
  date: string,
  origin: string,
  destination: string,
  orderNumber: string,
  cost: number,
  status: ShipmentStatus,
  ecommerce: EcommercePlatforms
}

const ShipmentCard = ({ cost, customer, date, destination, orderNumber, origin, status, ecommerce }: Props) => {
  return (
    <Card className="min-w-[300px] px-2">
      <CardHeader className="justify-between">
        <div className="flex gap-4 items-center ">
          <IconEcommerce ecommerce={ecommerce} className="size-7"/>
          <span className="text-xl font-bold items-center">#{orderNumber}</span>
          <Status color="blue" variant="dot" />
        </div>
        <MoreOptionsShipment />
      </CardHeader>
      <CardBody>

      </CardBody>
    </Card>
  )
}

export default ShipmentCard


