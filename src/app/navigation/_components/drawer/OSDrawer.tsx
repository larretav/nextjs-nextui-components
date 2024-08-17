'use client';
import { Drawer } from '@/components'
import { DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@/components/navigation/drawer/Drawer'
import { useUIStore } from '@/store'
import { Button } from '@nextui-org/button'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa6'


export const OSDrawer = () => {

  const isOpen = useUIStore.use.isSideMenuOpen();
  const onOpen = useUIStore.use.openSideMenu();
  const onClose = useUIStore.use.closeSideMenu();

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      closeButton={<FaChevronLeft size={16} />}
      hideCloseButton={false}
      onOpenChange={(isOpen) => isOpen ? onOpen() : onClose()}
      classNames={{ wrapper: "", base: "h-[100dvh]" }}
    >
      <DrawerContent >
        {
          (onClose) => <>
            <DrawerHeader>
              <Button fullWidth>List Item</Button>
            </DrawerHeader>
            <DrawerBody>
              {
                Array(10).fill("").map((item, idx) => <span key={idx} className="py-2 px-3 rounded-md shadow-md bg-default-100">{idx} - List Item</span>)
              }
            </DrawerBody>
            <DrawerFooter>
              <Button color="danger" onPress={onClose}>Cerrar</Button>
            </DrawerFooter>

          </>
        }
      </DrawerContent>
    </Drawer>
  )
}
