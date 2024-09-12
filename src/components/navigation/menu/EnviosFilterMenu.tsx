"use client"
import { Card } from '@nextui-org/card';
import React from 'react'
import {DatePicker} from "@nextui-org/date-picker";
import {Select, SelectItem} from "@nextui-org/select";
import { IoIosSearch } from "react-icons/io";
import { Input } from '@nextui-org/input';
type Props = {}

export default function EnviosFilterMenu({}: Props) {

  return (
    <Card className='flex-row gap-2 p-2'>
      <DatePicker size='lg' onKeyDown={(e)=> e.preventDefault()} className='w-min' aria-label='Calendario'/>
      <Select
      classNames={{label:"text-xs"}}           
      size='sm'
        label="Alianzas"         
      >
          <SelectItem key={1} classNames={{title:"text-xs"}}>
            PKTExpress
          </SelectItem>
          <SelectItem key={2} classNames={{title:"text-xs"}}>
            DHL
          </SelectItem>
          <SelectItem key={3} classNames={{title:"text-xs"}}>
            FAST
          </SelectItem>
      </Select>
      <Select 
      size='sm'
        label="Plataforma" 
        classNames={{label:"text-xs"}}           
      >
          <SelectItem key={1} classNames={{title:"text-xs"}}>
            Plataforma 1
          </SelectItem>
          <SelectItem key={2} classNames={{title:"text-xs"}}>
            Plataforma 2
          </SelectItem>
          <SelectItem key={3} classNames={{title:"text-xs"}}>
            Plataforma 3
          </SelectItem>
      </Select>
      <Select 
      size='sm'
        label="Documentador" 
        classNames={{label:"text-xs"}}           
      >
          <SelectItem key={1} classNames={{title:"text-xs"}}>
          Documentador 1
          </SelectItem>
          <SelectItem key={2} classNames={{title:"text-xs"}}>
          Documentador 2
          </SelectItem>
          <SelectItem key={3} classNames={{title:"text-xs"}}>
          Documentador 3
          </SelectItem>
      </Select>
      <Input startContent={<IoIosSearch/>} placeholder='Buscar por cliente o # de cliente' size='lg' classNames={{input:"text-xs"}}/>
    </Card>
  )
}