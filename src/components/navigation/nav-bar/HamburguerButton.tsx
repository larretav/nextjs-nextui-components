'use client';
import { useUIStore } from '@/store';
import { Button } from "@heroui/button";
import React, { ReactNode } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6';

type Props = {
  children?: ReactNode
}

export const HamburguerButton = ({ children }: Props) => {

  const isOpen = useUIStore.use.isSideMenuOpen();
  const toggleSidebar = useUIStore.use.toggleSidebar();

  return (
    <Button isIconOnly variant="light" radius="full" onPress={toggleSidebar}>
      {
        children ? children : isOpen
          ? <FaXmark />
          : <FaBars />
      }
    </Button>
  )
}
