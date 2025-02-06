'use client';
import { AddressCardInput, AutocompleteLocation, Drawer } from '@/components'
import { DrawerBody, DrawerContent, DrawerFooter } from '@/components/navigation/drawer/Drawer';
import { Button } from '@nextui-org/button';
import React, { useState } from 'react'

const OSSetAddressCard = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AddressCardInput address="Culiacán Rosales, Culiacán, Sin., México asdasdasdasdaadasdasdas" title="Destino:" postalCode="8000" onPress={() => {
        setOpen(true);
      }} />
      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        classNames={{
          base: 'bg-transparent shadow-none',
          // backdrop: 'bg-content1/80',
          backdrop: 'bg-red-200',
        }}
      >
        <DrawerContent className="p-4 ">
          {(onClose) => <>
            <DrawerBody className="p-0 pb-8 h-fit mb-4 overflow-auto">
              <AutocompleteLocation
                allowedCountries={["CL", "US", "MX"]}
                defaultSelectedCountry="MX"
                onSelectedLocation={(location) => {
                  console.log(location);
                }}
                size="md"
                radius="sm"
                separateResults
              />
            </DrawerBody>
          </>}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default OSSetAddressCard