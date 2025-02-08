'use client';
import { AddressCardInput, AutocompleteLocation, Drawer, IconButton } from '@/components'
import { cn } from '@/lib/utils';
import { AutocompleteLocationModel } from '@/models';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal';
import { Tab, Tabs } from '@nextui-org/tabs';
import React, { Key, useState } from 'react'
import { FaMapLocationDot, FaUserGroup, FaXmark } from 'react-icons/fa6';

export const OSSetDestAddressCard = () => {

  const [address, setAddress] = useState<AutocompleteLocationModel>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTab, setSelectedTab] = useState<Key>('addressess');

  return (
    <>
      <AddressCardInput address={address?.address || ''} title="Destino:" postalCode={address?.postalCode || '0000'} onPress={() => {
        onOpen();
      }} />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeButton={<IconButton className="hidden sm:flex" ><FaXmark size="1.25rem" className="text-default-400 " /></IconButton>}
        size='2xl'
        classNames={{
          base: 'bg-transparent shadow-none sm:bg-content1 sm:shadow-small relative',
          backdrop: 'bg-content1/80 sm:bg-overlay/50',
          wrapper: '[--slide-enter:0px] [--slide-exit:-100px] justify-start items-start sm:justify-center sm:items-center ',
          closeButton: 'top-2 right-2'
        }}
      >
        <ModalContent className="p-0 m-0 bg-red-200">
          {(onClose) => <>
            
            <ModalHeader className="hidden sm:flex">
              Direccion destino
            </ModalHeader>

            <Tabs
              aria-label="Pestañas de direcciones"
              selectedKey={selectedTab.toString()}
              onSelectionChange={setSelectedTab}
              classNames={{ tabList: 'w-full', base: "w-full p-4" }}
              radius="none"
            >
              <Tab
                key="addressess"
                title={
                  <div className="flex items-center space-x-2">
                    <FaMapLocationDot size="1.25rem" />
                    <span>Direcciones</span>
                  </div>}
              >

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
                  />
                </ModalBody>
              </Tab>


              <Tab key="customers" title={
                <div className="flex items-center space-x-2">
                  <FaUserGroup size="1.25rem" />
                  <span>Clientes</span>
                </div>}
              >
                Clientes
              </Tab>
            </Tabs>



          </>}
        </ModalContent>
      </Modal >


    </>
  )
}

