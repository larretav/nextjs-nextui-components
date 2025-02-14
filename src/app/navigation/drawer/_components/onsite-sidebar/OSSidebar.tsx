'use client';
import { Drawer, List, ThemeSwitch, ThemeSwitchTabs } from '@/components'
import { DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@/components/navigation/drawer/Drawer'
import { useUIStore } from '@/store'
import { Button } from "@heroui/button"
import { Input } from "@heroui/input";
import { Listbox, ListboxItem, ListboxSection } from "@heroui/listbox";
import { User } from "@heroui/user";
import clsx from 'clsx';
import React from 'react'
import { FaChevronLeft, FaMagnifyingGlass, FaMoon } from 'react-icons/fa6'
import OSSidebarList from './OSSidebarList';
import { useComponentsStore } from '@/store/ui/components-store';
import { OnSiteLogoSolid2 } from '@/components/icons';
import { IoLogOut } from "react-icons/io5";
import { MdLogout } from 'react-icons/md';


export const OSSidebar = () => {

  const isOpen = useComponentsStore.use.isOSSidebarOpen();
  const toggleSidebar = useComponentsStore.use.toggleOSSidebar();

  return (
    <Drawer
      anchor="left"
      open={isOpen}
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
              <div className="flex justify-between items-center w-full">
                <OnSiteLogoSolid2 width={90} height={30} className="box-content py-px px-2 rounded-lg dark:bg-neutral-700" viewBox="0 0 23 6.15512" />
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

            <DrawerFooter className="flex-col pt-1 pb-4 md:pb-6">
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

              </Listbox>
              <ThemeSwitchTabs />
            </DrawerFooter>

          </>
        }
      </DrawerContent>
    </Drawer>
  )
}
