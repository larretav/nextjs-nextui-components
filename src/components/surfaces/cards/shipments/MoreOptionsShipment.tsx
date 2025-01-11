'use client';
import React from 'react'
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/dropdown'
import { FaEllipsisVertical, FaHandshakeSimple, FaMapLocationDot, FaReceipt, FaTrash, } from 'react-icons/fa6';

type Props = {}

export const MoreOptionsShipment = (props: Props) => {
  return (
    <Dropdown backdrop='opaque'>
      <DropdownTrigger>
        <Button
          variant="light"
          radius="full"
          size="sm"
          isIconOnly
        >
          <FaEllipsisVertical size={18} className="text-default-500" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Más acciones de envío" >
        <DropdownSection showDivider className="text-default-500">
          <DropdownItem key="new" startContent={<FaHandshakeSimple size={18} />}  >Clausulado</DropdownItem>
          <DropdownItem key="copy" startContent={<FaReceipt size={18} />} >Guía</DropdownItem>
          <DropdownItem key="edit" startContent={<FaMapLocationDot size={18} />} >Rastreo</DropdownItem>
        </DropdownSection>

        <DropdownSection>
          <DropdownItem key="delete" startContent={<FaTrash size={18} />} className="text-danger" color="danger">
            Cancelar
          </DropdownItem>
        </DropdownSection>

      </DropdownMenu>
    </Dropdown>
  )
}