'use client';
import { Drawer, ThemeSwitch } from '@/components'
import { OnSiteLogoSolid } from '@/components/icons';
import { DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from '@/components/navigation/drawer/Drawer'
import { useComponentsStore, useUIStore } from '@/store'
import { Button } from '@nextui-org/button'
import { User } from '@nextui-org/user';
import React from 'react'
import { FaChevronLeft, FaMagnifyingGlass } from 'react-icons/fa6'
import { SidebarComponentsList } from './SidebarComponentsList';
import useBreakpoint from '@/hooks/useBreakpoint';
import { ThemeSwitchTabs } from '@/components/inputs/ThemeSwitchTabs';



export const SidebarComponents = () => {

  const isOpen = useUIStore.use.isSideMenuOpen();
  const toggleSidebar = useUIStore.use.toggleSidebar();

  const desktopMatch = useBreakpoint('sm')

  return (
    <Drawer
      anchor={desktopMatch ? 'left' : 'top'}
      open={isOpen}
      closeButton={<FaChevronLeft size={16} />}
      hideCloseButton={false}
      onOpenChange={(isOpen) => toggleSidebar()}
      classNames={{ body: "px-4", base: 'h-full', closeButton: "top-3 right-3" }}
    >
      <DrawerContent className="pt-10">
        {
          (onClose) => <>
            <DrawerBody   className="overflow-y-auto no-scrollbar">
              <SidebarComponentsList />
            </DrawerBody>
            <DrawerFooter className="pt-1 pb-4 md:pb-6">
              <ThemeSwitchTabs />
            </DrawerFooter>
          </>
        }
      </DrawerContent>
    </Drawer>
  )
}
