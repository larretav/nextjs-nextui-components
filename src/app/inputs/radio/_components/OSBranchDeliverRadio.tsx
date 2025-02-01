'use client';

import { BranchDeliverRadio } from '@/components';
import { RadioGroup } from '@nextui-org/radio';
import React, { useState } from 'react'

export const OSBranchDeliverRadio = () => {

  const [selected, setSelected] = useState<string | undefined>()

  const handleChange = (value: string) => {
    setSelected(value);
  }

  return (
    <>
      <RadioGroup className="gap-3" value={selected} onValueChange={handleChange}>
        <BranchDeliverRadio
          value="0"
          shipper="fedex"
          branchName="LMM - GUASAVE"
          address="Av. Francisco I. Madero #2314, Guasave, Guasave, Sinaloa, México."
        />
      </RadioGroup>

    </>
  )
}
