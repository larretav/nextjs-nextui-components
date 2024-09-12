'use client';
import Address from '@/models/shipments/shipment.model';
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Chip } from '@nextui-org/chip'
import { Divider } from '@nextui-org/divider'
import clsx from 'clsx';
import React from 'react'
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6'

type Props = {
  addressInstance: Address

  onSetMain?: (id: string) => void,
  onEdit: (id: string) => void,
  onDelete?: (id: string) => void,
}


export const AddressCard = ({
  addressInstance,
  onSetMain = () => { },
  onDelete = () => { },
  onEdit = () => { }
}: Props) => {

  return (
    <Card className="shadow-md">
      {
        addressInstance.isMain && <CardHeader className="py-0 pr-0 justify-end">
          <Chip color="secondary" className="rounded-none rounded-bl-xl bg-blue-800" >Principal</Chip>
        </CardHeader>
      }

      <CardBody >
        <span className="text-sm font-medium">{addressInstance.name}</span>
        <span className="text-sm font-light">{addressInstance.street} #{addressInstance.number}</span>
        <span className="text-sm font-light">{addressInstance.suburb}</span>
        <span className="text-sm font-light">{addressInstance.city}, {addressInstance.state}, {addressInstance.country}, {addressInstance.postalCode}</span>
        <span className="text-sm font-light">Número de télefono: {addressInstance.phone}</span>
        <span className="text-sm font-light">Correo: {addressInstance.email}</span>
      </CardBody>

      <Divider className="" />


      <CardFooter className={clsx({
        "justify-end": addressInstance.isMain,
        "justify-between": !addressInstance.isMain
      })}>

        {addressInstance.isMain && <Button isIconOnly variant="flat" color="success" size="sm" onPress={() => { onEdit(addressInstance.id) }} ><FaPenToSquare size={20} /></Button>}

        {!addressInstance.isMain && <>
          <Button variant="flat" size="sm" onPress={() => { onSetMain(addressInstance.id) }}>Establecer como principal</Button>
          <div className="flex gap-2">
            <Button isIconOnly variant="flat" color="success" size="sm" onPress={() => { onEdit(addressInstance.id) }} ><FaPenToSquare size={20} /></Button>
            <Button isIconOnly variant="flat" color="danger" size="sm" onPress={() => { onDelete(addressInstance.id) }} ><FaTrashCan size={20} /></Button>
          </div>
        </>}

      </CardFooter>
    </Card >
  )
}
