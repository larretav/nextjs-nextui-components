'use client';
import { useComponentsStore } from '@/store';
import { Button } from '@nextui-org/button';
import React, { ReactNode } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6';

type Props = {
  children?: ReactNode
}

export const OSHamburguerButton = ({ children }: Props) => {

  const isOpen = useComponentsStore.use.isOSSidebarOpen();
  const toggleSidebar = useComponentsStore.use.toggleOSSidebar();

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
