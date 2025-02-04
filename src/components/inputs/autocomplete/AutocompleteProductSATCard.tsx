'use client';
import { getAutoProductSAT } from '@/actions'
import { PackageType } from '@/components/data-display/onsite/PackageType'
import { ListTile } from '@/components/surfaces/cards/mobile/ListTile'
import { cn } from '@/lib/utils'
import ProductSATModel from '@/models/sat/product-sat.model'
import { PackageType as TypePackageType } from '@/types'
import { AutocompleteProps, MenuTriggerAction } from '@nextui-org/autocomplete'
import { Card, CardBody, CardHeader, CardProps } from '@nextui-org/card'
import { Input, InputProps } from '@nextui-org/input'
import React, { forwardRef, Key, useRef, useState } from 'react'
import { toast } from 'sonner'
import { AutocompleteProductSAT, AutocompleteProductSATProps } from './AutocompleteProductSAT';


type Props = Pick<CardProps, 'className' | 'shadow' | 'radius'> & Pick<AutocompleteProductSATProps, 'onSelectedItem' | 'isInvalid' | 'errorMessage'> & {
  packageType: TypePackageType,
  description: string,
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

const AutocompleteProductSATCard = forwardRef<HTMLInputElement, Props>(({ description, dimensions, packageType, quantity, weight, classNames, className, radius, shadow, ...inputProps }: Props, ref) => {

  const productSATDefualtValue = "31181701";

  return (
    <Card className={cn('w-full', className)} radius={radius} shadow={shadow} classNames={{
      base: classNames?.base,
      body: classNames?.body,
      header: classNames?.leading,
      footer: classNames?.trailing,
    }}>
      <CardHeader className="p-0">
        <ListTile
          title={description}
          subtitle={`${dimensions} - ${weight}kg`}
          leading={<PackageType type={packageType} className="size-8" />}
          trailing={<span className="font-bold text-sm px-2">x{quantity}</span>}
          classNames={{
            base: "shadow-none rounded-none bg-transparent w-full",
          }}
        />
      </CardHeader>

      <CardBody>
        <AutocompleteProductSAT
          ref={ref}
          variant="bordered"
          radius={radius}
          placeholder="Product SAT"
          defaultValue={productSATDefualtValue}
          {...inputProps}
        />
      </CardBody>

    </Card>
  )
})

AutocompleteProductSATCard.displayName = "AutocompleteProductSATCard";

export { AutocompleteProductSATCard };