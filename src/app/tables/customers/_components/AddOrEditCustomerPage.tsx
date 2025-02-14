"use client"
import { useCustomerCatalogStore } from '@/store/tables/customer-catalog-store'
import React from 'react'
import { useSwitchPage } from "../functions/useSwitchPage"
import { Button } from '@nextui-org/button'
import { Switch } from '@nextui-org/switch'
import { IoPerson } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { Input, Textarea } from '@nextui-org/input'
import { Avatar  } from "@nextui-org/avatar";
import { Select, SelectItem } from '@nextui-org/select';
import {
  Autocomplete,  
  AutocompleteItem
} from "@nextui-org/autocomplete";
import { LocationItem, LocationResponseMapper } from '@/models/shipments/locationService.model';

export default function AddOrEditCustomerPage() {
  const selectedCustomer = useCustomerCatalogStore.use.selectedCustomer()
  const selectedLocation = useCustomerCatalogStore.use.selectedLocation()
  const { switchToCustomerCatalogTablePage } = useSwitchPage()
  console.log(selectedLocation)
  return (
    <div className='bg-neutral-200 dark:bg-neutral-800'>
      <h1 className='text-xl font-bold p-2'>{selectedCustomer.id ? "Editar Cliente" : "Agregar Cliente"}</h1>
      <div className="flex p-2">
        <div className="flex flex-col shadow-md rounded-lg p-10 bg-neutral-50 dark:bg-neutral-900">
          <span className='ml-auto'>
            <Switch size='sm'> <span className='text-xs'>Activo</span></Switch>
          </span>
          <div>
            <span className='text-xs font-semibold'>Tipo de persona</span>
            <div className="flex flex-col text-xs gap-y-7">
              <div className="flex flex-col items-center outline py-5 px-10 rounded-lg ">
                <IoPerson size={50} />
                <span>Persona</span>
              </div>
              <div className="flex flex-col items-center py-5 px-10 rounded-lg">
                <BsBuildingsFill size={50} />
                <span>Empresa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-4 w-full gap-y-3">
          <div className=' flex  flex-col bg-neutral-50 rounded-lg shadow-md'>
            <span className='text-sm font-semibold p-2'>Nombre</span>
            <div className="flex gap-3 px-3 pb-4">
              <Input placeholder='Nombre' className='w-1/3' variant='faded' autoComplete='nel'/>
              <Input placeholder='Apellido Paterno' className='w-1/3' variant='faded' autoComplete='nel'/>
              <Input placeholder='Apellido Materno' className='w-1/3' variant='faded' autoComplete='nel'/>
            </div>
          </div>

          <div className="flex  flex-col bg-neutral-50 rounded-lg shadow-md px-2">
            <span className='text-sm font-semibold p-2'>Domicilio</span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3">
            <Input placeholder='Calle' variant='faded' autoComplete='nel'/>
            <Input placeholder='Núm. exterior' variant='faded' autoComplete='nel'/>
            <Input placeholder='Núm. interior' variant='faded' autoComplete='nel'/>
            <Input placeholder='Colonia' variant='faded' autoComplete='nel'/>
            <Input placeholder='Ciudad' variant='faded' isDisabled={true}  value={selectedLocation.valueJson?.city}/>
            <Input placeholder='Municipio/Delegación' variant='faded' isDisabled={true} value={selectedLocation.valueJson?.locality} />         
            <Input placeholder='Estado' variant='faded' isDisabled={true} value={selectedLocation.valueJson?.state} />
            <Input placeholder='País' variant='faded' isDisabled={true} value={selectedLocation.valueJson?.country}/>
            <Input placeholder='Código postal' variant='faded' isDisabled={true} value={selectedLocation.valueJson?.postalCode}/>

            </div>
          </div>


          <div className="flex  flex-col bg-neutral-50 rounded-lg shadow-md ">
            <span className='text-sm font-semibold p-2'>Comentarios adicionales</span>
            <Textarea variant='faded' size='sm'/>
          </div>

        </div>
      </div>
    </div>
  )
}