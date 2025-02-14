import { PackageType } from '@/components/data-display/onsite/PackageType'
import { ListTile } from '@/components/surfaces/cards/mobile/ListTile'
import { cn } from '@/lib/utils'
import { PackageType as TypePackageType } from '@/types'
import { Card, CardBody, CardHeader, CardProps } from "@heroui/card"
import { Input, InputProps } from "@heroui/input"
import React, { forwardRef } from 'react'

type Props = Pick<CardProps, 'className' | 'shadow' | 'radius'> & InputProps & {
  packageType: TypePackageType,
  dimensions: string,
  weight: number,
  quantity: number,
  classNames?: {
    base?: string,
    leading?: string,
    trailing?: string,
    body?: string,
  },
}

const PackageContentAdjustCard = forwardRef<HTMLInputElement, Props>(({ dimensions, packageType, quantity, weight, classNames, className, radius, shadow, ...inputProps }: Props, ref) => {

  return (
    <Card className={cn('w-full', className)} radius={radius} shadow={shadow} classNames={{
      base: classNames?.base,
      body: classNames?.body,
      header: classNames?.leading,
      footer: classNames?.trailing,
    }}>
      <CardHeader className="p-0">
        <ListTile
          title={`${dimensions} - ${weight}kg`}
          leading={<PackageType type={packageType} className="size-6" />}
          trailing={<span className="font-bold text-sm px-2">x{quantity}</span>}
          classNames={{
            base: "shadow-none rounded-none bg-transparent w-full",
          }}
        />
      </CardHeader>

      <CardBody>
        <Input {...inputProps} ref={ref} placeholder="Descripción" variant="bordered" radius={radius} />
      </CardBody>

    </Card>
  )
})

PackageContentAdjustCard.displayName = "PackageContentAdjustCard";

export { PackageContentAdjustCard };