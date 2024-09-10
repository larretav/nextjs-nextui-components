'use client';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/dropdown'
import React from 'react'
import { FaEllipsisV, FaHandshake } from 'react-icons/fa'
import { FaHandshakeSimple, FaMapLocationDot, FaReceipt, FaTrash } from 'react-icons/fa6';

type Props = {}

export const MoreOptionsShipment = (props: Props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="flat"
          radius="full"
          size="sm"
          isIconOnly
        >
          <FaEllipsisV size={18} className="text-slate-600" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Más acciones de envío">
        <DropdownSection showDivider>
          <DropdownItem key="new" startContent={<FaHandshakeSimple size={18} />} className="text-slate-600" >Clausulado</DropdownItem>
          <DropdownItem key="copy" startContent={<FaReceipt size={18} />} className="text-slate-600">Guía</DropdownItem>
          <DropdownItem key="edit" startContent={<FaMapLocationDot size={18} />} className="text-slate-600">Rastreo</DropdownItem>
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