'use client';
import { Drawer, List, ThemeSwitch } from '@/components'
import { DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@/components/navigation/drawer/Drawer'
import { useUIStore } from '@/store'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input';
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import { User } from '@nextui-org/user';
import clsx from 'clsx';
import React from 'react'
import { FaChevronLeft, FaMagnifyingGlass, FaMoon } from 'react-icons/fa6'
import OSSidebarList from './OSSidebarList';
import { useComponentsStore } from '@/store/ui/components-store';
import { OnSiteLogoSolid2 } from '@/components/icons';
import { IoLogOut } from "react-icons/io5";
import { MdLogout } from 'react-icons/md';
import { OSSidebarThemeSwitch } from './OSSidebarThemeSwitch';


export const OSSidebar = () => {

  const isOpen = useComponentsStore.use.isOSSidebarOpen();
  const toggleSidebar = useComponentsStore.use.toggleOSSidebar();

  return (
    <Drawer
      anchor="left"
      open={true}
      closeButton={<FaChevronLeft size={16} />}
      onOpenChange={(isOpen) => { toggleSidebar() }}
      className="w-full sm:w-80"
      classNames={{ body: "px-4 w-full sm:w-80" }}
    // hideCloseButton={false}
    >
      <DrawerContent>
        {
          (onClose) => <>
            <DrawerHeader className="flex-col gap-8 mt-2">
              <div className="w-full flex justify-between items-center">
                <OnSiteLogoSolid2 width={90} height={30} className="py-px px-2 box-content dark:bg-neutral-700 rounded-lg" viewBox="0 0 23 6.15512" />
                <Button isIconOnly variant="light" radius="full" size="sm" onPress={onClose} > <FaChevronLeft size={18} /> </Button>
              </div>
              <User
                name="Maria Antonieta de las Nieves"
                description="Cliente"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                className="justify-start"
              />
            </DrawerHeader>

            <DrawerBody className="overflow-y-auto no-scrollbar">
              <OSSidebarList />
            </DrawerBody>
            
            <DrawerFooter className="pt-1">
              <Listbox aria-label="Sidebar Footer">
                <ListboxItem
                  key="logout"
                  startContent={<IoLogOut className="rotate-180" />}
                  classNames={{
                    base: clsx(
                      "py-2 transition-colors text-slate-600 dark:text-slate-100 data-[hover=true]:text-slate-600 data-[hover=true]:bg-default-200", {
                    }),
                  }}
                >
                  Cerrar sesión
                </ListboxItem>
                <ListboxItem
                  key="theme-switch"
                  startContent={<FaMoon size={20} />}
                  endContent={ <OSSidebarThemeSwitch size="sm" />}
                  classNames={{
                    base: clsx(
                      "p-2 pl-4 transition-colors text-slate-600 dark:text-slate-100 data-[hover=true]:text-slate-600 data-[hover=true]:bg-default-200", {
                    }),
                  }}
                >
                  Tema oscuro
                </ListboxItem>

              </Listbox>
            </DrawerFooter>

          </>
        }
      </DrawerContent>
    </Drawer>
  )
}
