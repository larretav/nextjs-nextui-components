'use client';
import { AddressCardInput, Drawer } from '@/components'
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
          backdrop: 'bg-content1/80',
        }}
      >
        <DrawerContent className="p-4 ">
          {(onClose) => <>
            <DrawerBody className="bg-content1 rounded-lg  ">
              <h3>Esto es un modal</h3>
            </DrawerBody>

            <DrawerFooter>
              <Button onPress={onClose}>Cerrar</Button>
            </DrawerFooter>
          </>}
        </DrawerContent>

      </Drawer>
    </>
  )
}

export default OSSetAddressCard