'use client';

import { QuotationRadio } from '@/components'
import { Shippers } from '@/types';
import { Button } from '@nextui-org/button';
import { Checkbox } from '@nextui-org/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { RadioGroup } from '@nextui-org/radio'
import React, { useState } from 'react'
import { FaCircleExclamation } from 'react-icons/fa6';

interface Quotation {
  id: number;
  cost: number;
  normalCost: number;
  deliveredType: string;
  estimateDate: string;
  shipper: Shippers;
}

export const OSQuotationRadio = () => {

  const quotations: Quotation[] = [
    {
      id: 1,
      cost: 250.5,
      normalCost: 200.0,
      deliveredType: "Standard",
      estimateDate: "Miercoles 8 de septiembre",
      shipper: "fedex",
    },
    {
      id: 2,
      cost: 250.5,
      normalCost: 200.0,
      deliveredType: "Standard",
      estimateDate: "Miercoles 8 de septiembre",
      shipper: "fedex",
    },
    {
      id: 3,
      cost: 250.5,
      normalCost: 200.0,
      deliveredType: "Standard",
      estimateDate: "Miercoles 8 de septiembre",
      shipper: "fedex",
    },
    {
      id: 4,
      cost: 350.5,
      normalCost: 600.0,
      deliveredType: "Standard",
      estimateDate: "Miercoles 8 de septiembre",
      shipper: "fedex",
    },
  ]

  const [selected, setSelected] = useState<string | undefined>()
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [errorOpen, setErrorOpen] = useState([])

  const handleChange = (value: string) => {
    setSelected(value)
    console.log(value)
  }

  return (
    <>
      <RadioGroup className="gap-3" value={selected} onValueChange={handleChange}>
        {
          quotations.map(({ id, cost, normalCost, deliveredType, estimateDate, shipper }) => (
            <QuotationRadio
              key={id}
              value={shipper}
              cost={cost}
              normalCost={normalCost}
              deliveredType={deliveredType}
              estimateDate={estimateDate}
              shipper={shipper}
            />
          ))
        }

        <QuotationRadio
          value="fedex"
          cost={250.5}
          normalCost={200.0}
          deliveredType="Standard"
          estimateDate="Miercoles 8 de septiembre"
          shipper="fedex"
          isDisabled
          errorContent={<div className="w-full h-full flex justify-end bg-content1/80 p-3">
            <Popover placement="left-start">
              <PopoverTrigger>
                <div>
                  <FaCircleExclamation size="1.25rem" className="text-warning-500" />
                </div>
              </PopoverTrigger>
              <PopoverContent >
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Popover Content</div>
                  <div className="text-tiny">This is the popover content</div>
                </div>
              </PopoverContent>
            </Popover>
          </div>}
        />
        <QuotationRadio value="pkt1" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="pkt1" />
        <QuotationRadio value="paquetexpress" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="paquetexpress" />
        <QuotationRadio value="dhl" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="dhl" />
        <QuotationRadio value="ups" cost={250.5} normalCost={200.0} deliveredType="Standard" estimateDate="Miercoles 8 de septiembre" shipper="ups" />
      </RadioGroup>
    </>
  )
}
