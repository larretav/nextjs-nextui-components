'use client';
import { useUIStore } from '@/store'
import { Button } from '@nextui-org/button'
import { Modal, ModalProps, useDisclosure } from '@nextui-org/modal'
import { extendVariants } from '@nextui-org/system'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode | ReactNode[],
}

export const Drawer = ({ children, ...props }: ModalProps & Props) => {

  const isOpen2 = useUIStore.use.isSideMenuOpen()

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Modal
      isOpen={isOpen}
    >
      <h1>Hola mundo</h1>
      {children}
    </Modal >
  )
}