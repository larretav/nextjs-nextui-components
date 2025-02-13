'use client';
import { AddressCardInput, AutocompleteLocation, Drawer, IconButton } from '@/components'
import { AutocompleteLocationModel } from '@/models';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal';
import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6';
import { addressessDataTest } from '../helpers/addressess-data.helper';

export const OSSetOriginnAddressCard = () => {
  const [address, setAddress] = useState<AutocompleteLocationModel>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AddressCardInput address={address?.address || ''} title="Origen:" postalCode={address?.postalCode || '0000'} onPress={() => {
        onOpen();
      }} />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeButton={<IconButton tabIndex={-1} ><FaXmark size="1.25rem" className="text-default-400 " /></IconButton>}
        size='2xl'
        classNames={{
          base: 'bg-transparent shadow-none sm:bg-content1 sm:shadow-small relative',
          backdrop: 'bg-content1/90 sm:bg-overlay/50',
          wrapper: '[--slide-enter:0px] [--slide-exit:-100px] justify-start items-start sm:justify-center sm:items-center ',
          closeButton: 'top-2 right-2 hidden sm:flex'
        }}
      >
        <ModalContent className="p-0 m-0">
          {(onClose) => <>
            
            <ModalHeader className="hidden sm:flex">
              Dirección origen
            </ModalHeader>

            <ModalBody className="p-4 sm:pt-0 h-fit ">
              <AutocompleteLocation
                allowedCountries={["CL", "US", "MX"]}
                defaultSelectedCountry="MX"
                onSelectedLocation={(location) => {

                  if (!location) return;

                  setAddress(location);
                  onClose();
                }}
                size="md"
                radius="sm"
                separateResults
                startContent={<Accordion variant="splitted" className="px-0">
                  <AccordionItem key="my-addressess" aria-label="Mis direcciones" title="Mis direcciones" classNames={{base: "px-2 shadow rounded-small dark:bg-content2",title: 'px-2', indicator: 'px-2'}}>
                    <Listbox className="max-h-52 sm:max-h-72 overflow-auto no-scrollbar  " emptyContent="Sin resultados">
                      {addressessDataTest.map((item) => (
                        <ListboxItem
                          key={item.id}
                          aria-label={`${item.locality}, ${item.state}, ${item.country}`}
                          description={`${item.locality}, ${item.state}, ${item.country}`}
                          onPress={() => { console.log(item) }}
                          classNames={{ title: 'font-medium' }}
                        >
                          {item.postalCode} - {item.neighborhood}
                        </ListboxItem>
                      ))}
                    </Listbox>
                  </AccordionItem>
                </Accordion>}
              />
            </ModalBody>
            
          </>}
        </ModalContent>
      </Modal >


    </>
  )
}




