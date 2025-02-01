'use client';

import { BranchDeliverRadio } from '@/components';
import { Shippers } from '@/types';
import { RadioGroup } from '@nextui-org/radio';
import React, { useState } from 'react'



export const OSBranchDeliverRadio = () => {

  const shipper: Shippers = "paquetexpress";

  const branches = [
    {
      "key": "LMM03",
      "name": "LOS MOCHIS 3",
      "branchType": "G",
      "zipCode": "81280",
      "colony": "BIENESTAR",
      "street": "AV. SANTOS DEGOLLADO SUR",
      "number": "665",
      "city": "LOS MOCHIS",
      "state": "SINALOA",
      "municipality": "AHOME",
      "country": "MEXICO"
    },
    {
      "key": "LMM01",
      "name": "LOS MOCHIS 1",
      "branchType": "G",
      "zipCode": "81256",
      "colony": "PARQUE INDUSTRIAL ECOLOGICO",
      "street": "CALLE DE LA AGRICULTURA",
      "number": "972",
      "city": "LOS MOCHIS",
      "state": "SINALOA",
      "municipality": "AHOME",
      "country": "MEXICO"
    },
    {
      "key": "LMM05",
      "name": "LOS MOCHIS 5",
      "branchType": "G",
      "zipCode": "81278",
      "colony": "FRANCISCO VILLA",
      "street": "BLVD. CENTENARIO ESQUINA CON BLVD. CANUTO IBARRA",
      "number": "SN",
      "city": "LOS MOCHIS",
      "state": "SINALOA",
      "municipality": "AHOME",
      "country": "MEXICO"
    }
  ]

  const [selected, setSelected] = useState<string | undefined>()

  const handleChange = (value: string) => {
    setSelected(value);
  }

  return (
    <>
      <RadioGroup className="gap-3" value={selected} onValueChange={handleChange}>
        {
          branches.map(({key, name, branchType, ...address}) => (
            <BranchDeliverRadio
              value={key}
              shipper={shipper}
              branchName={name}
              address={address}
            />
          ))
        }
      </RadioGroup>

    </>
  )
}
