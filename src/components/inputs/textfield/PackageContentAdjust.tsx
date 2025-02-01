import { PackageType } from '@/components/data-display/onsite/PackageType'
import { PackageType as TypePackageType } from '@/types'
import { Card, CardHeader } from '@nextui-org/card'
import React from 'react'

type Props = {
  packageType: TypePackageType,
  dimensions: string,
  weight: string,
  quantity: number,
}

export const PackageContentAdjust = (props: Props) => {

  return (
    <Card>
      <CardHeader>
        <PackageType type="box" />
      </CardHeader>

    </Card>
  )
}