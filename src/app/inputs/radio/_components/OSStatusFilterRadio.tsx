'use client';
import { StatusFilterRadio } from '@/components/inputs/radio/StatusFilterRadio';
import { RadioGroup } from '@nextui-org/radio'
import React, { useState } from 'react'

export const OSStatusFilterRadio = () => {
  
  const [selected, setSelected] = useState('');


  return (
    <RadioGroup value={selected}  onValueChange={setSelected}>
      <StatusFilterRadio activeColor="blue" value="all"  >Todos</StatusFilterRadio>
      <StatusFilterRadio activeColor="red" value="in-site-and-transit" >En Sitio y Tránsito</StatusFilterRadio>
      <StatusFilterRadio activeColor="emerald" value="in-site" >En Sitio</StatusFilterRadio>
      <StatusFilterRadio activeColor="indigo" value="in-transit" >En tránsito</StatusFilterRadio>
      <StatusFilterRadio activeColor="black" value="delivered" >Entregado</StatusFilterRadio>
    </RadioGroup>
  )
}
