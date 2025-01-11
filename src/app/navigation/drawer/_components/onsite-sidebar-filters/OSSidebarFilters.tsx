'use client';
import { Drawer, SidebarFilterDivider, SidebarFilterTitle, StatusFilterRadio, ThemeSwitchTabs } from '@/components'
import { DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@/components/navigation/drawer/Drawer'
import { useUIStore } from '@/store'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input';
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import { User } from '@nextui-org/user';
import clsx from 'clsx';
import React, { useState } from 'react'
import { FaCalendar, FaChevronLeft, FaMagnifyingGlass } from 'react-icons/fa6'
import { useComponentsStore } from '@/store/ui/components-store';
import { OnSiteLogoSolid2 } from '@/components/icons';
import { IoLogOut } from "react-icons/io5";
import { MdLogout } from 'react-icons/md';
import { DatePicker } from '@nextui-org/date-picker';
import { TbCalendarFilled } from 'react-icons/tb';
import { DateValue, getLocalTimeZone, today } from '@internationalized/date';
import { Select, SelectItem } from '@nextui-org/select';
import { RadioGroup } from '@nextui-org/radio';


export const OSSidebarFilters = () => {

  const isOpen = useComponentsStore.use.isOSSidebarFiltersOpen();
  const toggleSidebar = useComponentsStore.use.toggleOSSidebarFilters();

  const [date, setDate] = useState<DateValue | null>(today(getLocalTimeZone()));
  const [state, setState] = useState('all');

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      closeButton={<FaChevronLeft size={16} />}
      onOpenChange={(isOpen) => { toggleSidebar() }}
      className="w-80 rounded-l-2xl"
    >
      <DrawerContent>
        {
          (onClose) => <>
            <DrawerHeader className="px-4">
              <SidebarFilterTitle text="Filtros" />
            </DrawerHeader>

            <DrawerBody className="overflow-y-auto no-scrollbar p-0">
              <SidebarFilterDivider text="Buscar" />
              <div className="flex flex-col gap-3 px-5 pt-2 pb-7">
                <DatePicker label="Fecha" size="sm" endContent={<FaCalendar size={18} />} value={date} onChange={setDate} />
                <Select
                  label="Plataforma"
                  size="sm"
                >
                  <SelectItem key="jumpseller">Jumpseller</SelectItem>
                  <SelectItem key="onsite">OnSite</SelectItem>
                  <SelectItem key="prestashop">Prestashop</SelectItem>
                  <SelectItem key="shopify">Shopify</SelectItem>
                  <SelectItem key="woocommerce">Woocommerce</SelectItem>
                </Select>

                <Select
                  label="Documentador"
                  size="sm"
                >
                  <SelectItem key="option-1">Opción 1</SelectItem>
                  <SelectItem key="option-2">Opción 2</SelectItem>
                </Select>


                <Input type="email" label="Buscar" placeholder="Cliente o número de orden" size="sm" startContent={<FaMagnifyingGlass color="grey" size={16} />} />
              </div>

              <SidebarFilterDivider text="Estado" />

              <div className="flex flex-col gap-3 px-5 pt-3 pb-7">
                <RadioGroup value={state} onValueChange={setState}>
                  <StatusFilterRadio activeColor="zinc" value="all"  >Todos</StatusFilterRadio>
                  <StatusFilterRadio activeColor="amber" value="in-site-and-transit" >En Sitio y Tránsito</StatusFilterRadio>
                  <StatusFilterRadio activeColor="yellow" value="in-site" >En Sitio</StatusFilterRadio>
                  <StatusFilterRadio activeColor="blue" value="in-transit" >En tránsito</StatusFilterRadio>
                  <StatusFilterRadio activeColor="success" value="delivered" >Entregado</StatusFilterRadio>
                  <StatusFilterRadio activeColor="danger" value="cancelled" >Cancelado</StatusFilterRadio>
                </RadioGroup>
              </div>

            </DrawerBody>

            <DrawerFooter className="flex-col px-4 pt-1 pb-4">
              <Button color="success" radius="sm" className="text-white bg-blue-500">Aplicar</Button>
              <Button color="danger" variant="light" radius="sm">Eliminar filtros</Button>
            </DrawerFooter>

          </>
        }
      </DrawerContent>
    </Drawer>
  )
}
