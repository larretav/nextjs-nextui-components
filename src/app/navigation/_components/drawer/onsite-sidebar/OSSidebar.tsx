'use client';
import { Drawer, List, ThemeSwitch } from '@/components'
import { OnSiteIconSolid } from '@/components/icons';
import { DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@/components/navigation/drawer/Drawer'
import { useUIStore } from '@/store'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { User } from '@nextui-org/user';
import clsx from 'clsx';
import React from 'react'
import { FaChevronLeft, FaMagnifyingGlass } from 'react-icons/fa6'
import tailwindTheme from "tailwindcss/defaultTheme";
import OSSidebarList from './OSSidebarList';



export const OSSidebar = () => {
  const screens = Object.keys(tailwindTheme.screens);

  const isOpen = useUIStore.use.isSideMenuOpen();
  const onOpen = useUIStore.use.openSideMenu();
  const onClose = useUIStore.use.closeSideMenu();


  

  return (
    <Drawer
      anchor="left"
      open={true}
      closeButton={<FaChevronLeft size={16} />}
      hideCloseButton={false}
      onOpenChange={(isOpen) => isOpen ? onOpen() : onClose()}
      className="w-full sm:w-80"
      classNames={{ body: "px-4 w-full sm:w-80", closeButton: "top-3 right-3" }}
    >
      <DrawerContent>
        {
          (onClose) => <>
            <DrawerHeader className="flex-col gap-4">
              <OnSiteIconSolid size={56} />
              <User
                name="Juan Perez"
                description="Cliente"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                className="justify-start"
              />
            </DrawerHeader>

            <DrawerBody>
              <OSSidebarList />


            </DrawerBody>
            <DrawerFooter>
              <ThemeSwitch />
              <Button color="danger" onPress={onClose}>Cerrar</Button>
            </DrawerFooter>

          </>
        }
      </DrawerContent>
    </Drawer>
  )
}
