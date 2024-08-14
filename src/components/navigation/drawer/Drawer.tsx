'use client';
import { useUIStore } from '@/store'
import { Button } from '@nextui-org/button'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  useDisclosure
} from '@nextui-org/modal'

import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode | ReactNode[],
}

export const Drawer = ({ children, ...props }: ModalProps & Props) => {

  const isOpen2 = useUIStore.use.isSideMenuOpen()

  const { isOpen, onOpen, onClose } = useDisclosure();

  const anchors = {
    top: {

    }
  }

  return (
    <>

      <div className="p-4 w-full flex items-center justify-center" >
        <Button onClick={() => onOpen()} className="max-w-24" >Open</Button>
      </div>

      <Modal
        size="full"
        isOpen={isOpen}
        onClose={onClose}
        hideCloseButton

        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            },
            exit: {
              y: 200,
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: "easeIn",
              },
            },
          }
        }}

        classNames={{

          wrapper: "justify-center sm:items-end",
          base: 'w-full sm:h-[300px]',
        }}
        as="aside"
        className="items"
      >
        <ModalContent >
          {children}
        </ModalContent>
      </Modal >
    </>
  )
}


export const DrawerContent = ModalContent;
export const DrawerHeader = ModalHeader;
export const DrawerBody = ModalBody;
export const DrawerFooter = ModalFooter;