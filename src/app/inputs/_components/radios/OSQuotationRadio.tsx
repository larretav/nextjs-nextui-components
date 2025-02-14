'use client';

import { QuotationRadio, TagsInput } from '@/components'
import { CircleExclamationOutlined } from '@/components/icons';
import { Shippers } from '@/types';
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { RadioGroup } from "@heroui/radio"
import clsx from 'clsx';
import React, { useState } from 'react'
import { FaCircleExclamation } from 'react-icons/fa6';

interface Quotation {
  id: number;
  cost: number;
  normalCost: number;
  deliveredType: string;
  estimateDate: string;
  shipper: Shippers;
  isDisabled: boolean;
  errors: { keepOpen?: boolean, messages: string[] } | null;
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
      isDisabled: true,
      errors: { keepOpen: true, messages: ["Saldo insuficiente", "E-commerce no puede ser entregado en sucursal"] }
    },
    {
      id: 2,
      cost: 250.5,
      normalCost: 200.0,
      deliveredType: "Standard",
      estimateDate: "Miercoles 8 de septiembre",
      shipper: "paquetexpress",
      isDisabled: true,
      errors: {
        keepOpen: false,
        messages: [
          "PAQUETEXPRESS solo permite máximo 2 lineas de captura de tarimas.",
          "Existen recargos variables que afectan esta cotización, para conocerlos comunícate con tu asesor"
        ]
      }
    },
    {
      id: 4,
      cost: 258.9,
      normalCost: 200.0,
      deliveredType: "Standard",
      estimateDate: "Miercoles 8 de julio",
      shipper: "paquetexpress",
      isDisabled: false,
      errors: null
    },
    {
      id: 5,
      cost: 9999.5,
      normalCost: 200.0,
      deliveredType: "Standard",
      estimateDate: "Miercoles 8 de septiembre",
      shipper: "paquetexpress",
      isDisabled: true,
      errors: null
    },
    {
      id: 6,
      cost: 99999.9,
      normalCost: 600.0,
      deliveredType: "Standard",
      estimateDate: "Miercoles 8 de julio",
      shipper: "ups",
      isDisabled: false,
      errors: null
    },
  ]

  const [selected, setSelected] = useState<string | undefined>()

  const handleChange = (value: string) => {
    const quotation = quotations.find(({ id }) => id.toString() === value);
    setSelected(value);
    console.log({quotation})
  }

  return (
    <>
      <RadioGroup className="gap-3" value={selected} onValueChange={handleChange}>
        {
          quotations.map(({ id, cost, normalCost, deliveredType, estimateDate, shipper, isDisabled, errors }) => (
            <QuotationRadio
              key={id}
              value={id.toString()}
              cost={cost}
              normalCost={normalCost}
              deliveredType={deliveredType}
              estimateDate={estimateDate}
              shipper={shipper}
              isDisabled={isDisabled}
              errorContent={errors && <QuotationWarnings errors={errors.messages} keepOpen={errors.keepOpen} />}
            />
          ))
        }
      </RadioGroup>
    </>
  )
}




const QuotationWarnings = ({ errors, keepOpen }: { keepOpen?: boolean, errors: string[] }) => {

  const [hidden, setHidden] = useState(!keepOpen);

  return (
    <div className="w-full h-full flex flex-row-reverse bg-content1/85 p-4 box-border text-warning-500">
      {!keepOpen && <div className="flex justify-end " > <CircleExclamationOutlined size="1.5rem" className="cursor-pointer" onClick={() => setHidden(!hidden)}  /> </div>}

      <div className="w-full h-full overflow-y-auto no-scrollbar px-4">
        <ul className={clsx("w-full h-full list-disc text-sm font-semibold ", {
          "hidden": hidden
        })}>
          {errors.map((error, index) => (<li key={index}>{error}</li>))}
        </ul>
      </div>

    </div>
  )
}