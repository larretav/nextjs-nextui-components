'use client';
import { useUIStore } from '@/store';
import { Button } from '@nextui-org/button';
import React, { cloneElement, ReactElement, ReactNode } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';

type Props = {
  children?: ReactNode
}

const HamburguerButton = ({ children }: Props) => {

  const isOpen = useUIStore.use.isSideMenuOpen();
  const closeSidebar = useUIStore.use.closeSideMenu();
  const openSidebar = useUIStore.use.openSideMenu();

  return (
    <Button isIconOnly variant="light" radius="full"  disableAnimation onClick={() => isOpen ? closeSidebar() : openSidebar()}>

      {
        children ? children : isOpen
          ? <FaXmark size={24} />
          : <FaBars size={24} />
      }
    </Button>
  )
}

export default HamburguerButton