'use client';
import { StatusFilterRadio, StyledStatusFilterRadio2 } from '@/components';
import { RadioGroup } from "@heroui/radio"
import React, { useState } from 'react'

export const OSStatusFilterRadio = () => {

  const [selected, setSelected] = useState('');


  return (
    <>
      <RadioGroup value={selected} onValueChange={setSelected}>
        <StyledStatusFilterRadio2 activeColor="blue" value="all"  >Todos</StyledStatusFilterRadio2>
        <StyledStatusFilterRadio2 activeColor="red" value="in-site-and-transit" >En Sitio y Tránsito</StyledStatusFilterRadio2>
        <StyledStatusFilterRadio2 activeColor="emerald" value="in-site" >En Sitio</StyledStatusFilterRadio2>
        <StyledStatusFilterRadio2 activeColor="indigo" value="in-transit" >En tránsito</StyledStatusFilterRadio2>
        <StyledStatusFilterRadio2 activeColor="fuchsia" value="delivered" >Entregado</StyledStatusFilterRadio2>
      </RadioGroup>
    </>
  )
}
