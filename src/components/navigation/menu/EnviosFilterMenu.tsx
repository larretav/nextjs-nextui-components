"use client"
import { Card } from "@heroui/card";
import React from 'react'
import { DatePicker } from "@heroui/date-picker";
import { Select, SelectItem } from "@heroui/select";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@heroui/input";
type Props = {}

export default function EnviosFilterMenu({ }: Props) {

  return (
    <div className='grid grid-cols-1 gap-2 p-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5'>
      <DatePicker  radius='sm' size='lg' onKeyDown={(e) => e.preventDefault()} aria-label='Calendario'  />
      <Select
        classNames={{ label: "text-xs" }}
        size='sm'
        label="Alianzas"
      >
        <SelectItem key={1} classNames={{ title: "text-xs" }}>
          PKTExpress
        </SelectItem>
        <SelectItem key={2} classNames={{ title: "text-xs" }}>
          DHL
        </SelectItem>
        <SelectItem key={3} classNames={{ title: "text-xs" }}>
          FAST
        </SelectItem>
      </Select>
      <Select
        size='sm'
        label="Plataforma"
        classNames={{ label: "text-xs" }}
      >
        <SelectItem key={1} classNames={{ title: "text-xs" }}>
          Plataforma 1
        </SelectItem>
        <SelectItem key={2} classNames={{ title: "text-xs" }}>
          Plataforma 2
        </SelectItem>
        <SelectItem key={3} classNames={{ title: "text-xs" }}>
          Plataforma 3
        </SelectItem>
      </Select>
      <Select
        size='sm'
        label="Documentador"
        classNames={{ label: "text-xs" }}
      >
        <SelectItem key={1} classNames={{ title: "text-xs" }}>
          Documentador 1
        </SelectItem>
        <SelectItem key={2} classNames={{ title: "text-xs" }}>
          Documentador 2
        </SelectItem>
        <SelectItem key={3} classNames={{ title: "text-xs" }}>
          Documentador 3
        </SelectItem>
      </Select>
      <Input radius="sm" startContent={<IoIosSearch />} placeholder='Buscar por cliente o # de cliente' size='lg' classNames={{ input: "text-xs" }} />
    </div>
  )
}