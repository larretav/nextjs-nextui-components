'use client';
import { Drawer } from '@/components'
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


export const OSDrawer = () => {
  const screens = Object.keys(tailwindTheme.screens) ;
  console.log(screens)

  const isOpen = useUIStore.use.isSideMenuOpen();
  const onOpen = useUIStore.use.openSideMenu();
  const onClose = useUIStore.use.closeSideMenu();


  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    }
  ];

  return (
    <Drawer
      anchor="left"
      open={isOpen}
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
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }}
                className="justify-start"
              />
            </DrawerHeader>
            <DrawerBody>
              <Input
                startContent={<FaMagnifyingGlass color="grey" size={20} />}
                placeholder="Buscar..."
              />
              <Listbox
                items={items}
                aria-label="Dynamic Actions"
                onAction={(key) => console.log(key)}
                classNames={{ list: "gap-1" }}
              >
                {(item) => (
                  <ListboxItem
                    key={item.key}
                    className="text"
                    classNames={{
                      base: clsx(
                        "py-2 transition-colors ", {
                        "py-2 border-0 bg-green-600/20 text-green-700 data-[hover=true]:bg-green-600/20 data-[hover=true]:text-green-700 dark:text-green-600 border-0 transition-colors": true
                      }
                      ),
                      title: clsx(
                        "text-medium",
                        {
                          "font-semibold": !true
                        })
                    }}
                  >
                    {item.label}
                  </ListboxItem>
                )}
              </Listbox>
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
