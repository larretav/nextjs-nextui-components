'use client';

import { QuotationRadio } from '@/components'
import { Checkbox } from '@nextui-org/checkbox';
import { RadioGroup } from '@nextui-org/radio'
import React, { useState } from 'react'

export const OSQuotationRadio = () => {

  const [selected, setSelected] = useState<string | undefined>()
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const handleChange = (value: string) => {
    setSelected(value)
    console.log(value)
  }

  return (
    <>
      <RadioGroup className="gap-3" value={selected} onValueChange={handleChange}>
        <QuotationRadio value="fedex" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="fedex" />
        <QuotationRadio value="pkt1" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="pkt1" />
        <QuotationRadio value="paquetexpress" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="paquetexpress" />
        <QuotationRadio value="dhl" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="dhl" />
        <QuotationRadio value="ups" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="ups" />
      </RadioGroup>

      <div className="flex justify-center items-center gap-2 outline">
        <Checkbox
          isSelected={isSelected}
          color="success"
          radius="sm"
          className="z-50"
          onValueChange={setIsSelected}
          onClick={() => { console.log('first click') }}
          className="outline"
        />
      </div>
    </>
  )
}
