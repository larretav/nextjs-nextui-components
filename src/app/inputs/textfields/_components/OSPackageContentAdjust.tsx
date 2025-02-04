'use client';
import { AutocompleteProductSAT, AutocompleteProductSATCard, PackageContentAdjustCard } from '@/components'
import clsx from 'clsx';
import React, { useState } from 'react'

export const OSPackageContentAdjust = () => {

  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (value: string) => {
    setValue(value);
    setIsInvalid(value.length > 60)
  }
  return (
    <>
      <div className="w-full flex flex-col items-end gap-2">
        <PackageContentAdjustCard
          packageType="box"
          dimensions="20cm x 20cm x 3cm"
          quantity={9}
          weight={4}
          radius="sm"
          value={value}
          onValueChange={handleChange}
          isInvalid={isInvalid}
        />

        <AutocompleteProductSATCard
          packageType="box"
          description="Decoraciones de navidad"
          dimensions="20cm x 20cm x 3cm"
          quantity={9}
          weight={4}
          radius="sm"
          isInvalid={isInvalid}
          onSelectedItem={(productSAT) => console.log({productSAT})}
        />

        <p className={clsx({
          "text-danger-500": isInvalid,
          "text-success-500": !isInvalid
        })}>{value.length}/60</p>
      </div>


    </>
  )
}