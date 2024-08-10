'use client';
import { useUIStore } from '@/store';
import { Button } from '@nextui-org/button';
import React from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';

const HamburguerButton = () => {

  const isOpen = useUIStore.use.isSideMenuOpen();
  const closeSidebar = useUIStore.use.closeSideMenu();
  const openSidebar = useUIStore.use.openSideMenu();

  return (
    <Button isIconOnly onClick={() => isOpen ? closeSidebar() : openSidebar()}>
      {
        isOpen
          ? <FaXmark />
          : <FaBars />
      }
    </Button>
  )
}

export default HamburguerButton