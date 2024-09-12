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
    <Card className='flex-row gap-2 p-4'>
      <DatePicker size='lg' onKeyDown={(e)=> e.preventDefault()} className='w-min' />
      <Select
       
      size='sm'
        label="Alianzas"         
      >
          <SelectItem key={1}>
            PKTExpress
          </SelectItem>
          <SelectItem key={2}>
            DHL
          </SelectItem>
          <SelectItem key={3}>
            FAST
          </SelectItem>
      </Select>
      <Select 
      size='sm'
        label="Plataforma" 
        className="max-w-xs" 
      >
          <SelectItem key={1}>
            Plataforma 1
          </SelectItem>
          <SelectItem key={2}>
            Plataforma 2
          </SelectItem>
          <SelectItem key={3}>
            Plataforma 3
          </SelectItem>
      </Select>
      <Select 
      size='sm'
        label="Documentador" 
        className="max-w-xs" 
      >
          <SelectItem key={1}>
          Documentador 1
          </SelectItem>
          <SelectItem key={2}>
          Documentador 2
          </SelectItem>
          <SelectItem key={3}>
          Documentador 3
          </SelectItem>
      </Select>
      <Input startContent={<IoIosSearch/>} placeholder='Buscar por cliente o # de cliente' size='lg'/>
    </Card>
  )
}