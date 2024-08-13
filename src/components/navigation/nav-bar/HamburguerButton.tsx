'use client';
import { useUIStore } from '@/store';
import { Button } from '@nextui-org/button';
import React, { ReactNode } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6';

type Props = {
  children?: ReactNode
}

export const HamburguerButton = ({ children }: Props) => {

  const isOpen = useUIStore.use.isSideMenuOpen();
  const closeSidebar = useUIStore.use.closeSideMenu();
  const openSidebar = useUIStore.use.openSideMenu();

  return (
    <Button isIconOnly variant="light" radius="full" onClick={() => isOpen ? closeSidebar() : openSidebar()}>
      {
        children ? children : isOpen
          ? <FaXmark />
          : <FaBars />
      }
    </Button>
  )
}
