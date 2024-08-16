'use client';
import { Button } from '@nextui-org/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  useDisclosure
} from '@nextui-org/modal'

import React, { ReactNode, useEffect } from 'react'

interface ExtendedModalProps {
  anchor: 'left' | 'right' | 'top' | 'bottom' | string,
  open: boolean,
  onOpen?: (isOpen: boolean) => void,
  onClose: (isOpen: boolean) => void,
  hideCloseButton?: boolean
}

type Props = Omit<ModalProps, keyof ExtendedModalProps> & ExtendedModalProps

export const Drawer = ({ children, anchor = 'top', open, onOpen = () => { }, onClose = () => { }, hideCloseButton = true, ...props }: Props) => {


  const { isOpen: localIsOpen, onOpen: localOnOpen, onClose: localOnClose } = useDisclosure({isOpen: open});

  const anchors: Record<typeof anchor, any> = {
    left: {
      classNames: {
        wrapper: "justify-start",
        base: 'w-[300px]',
      },
      enter: {
        x: 0,
      },
      exit: {
        x: -200,
      }
    },
    right: {
      classNames: {
        wrapper: "justify-end",
        base: 'w-[300px]',
      },
      enter: {
        x: 0,
      },
      exit: {
        x: 200,
      }
    },
    top: {
      classNames: {
        wrapper: "justify-center sm:items-start",
        base: 'h-[300px]',
      },
      enter: {
        y: 0,
      },
      exit: {
        y: -200,
      }
    },
    bottom: {
      classNames: {
        wrapper: "justify-center sm:items-end",
        base: 'h-[300px]',
      },
      enter: {
        y: 0,
      },
      exit: {
        y: 200,
      }
    }
  }

  const toggle = () => {
    if (localIsOpen) {
      localOnOpen();
    }

    if (!localIsOpen) {
      localOnClose();
      onClose(localIsOpen);
    }
  }

  useEffect(() => {
    toggle();
  }, [open])


  return (
    <>
      <Modal
        size="full"
        isOpen={localIsOpen}
        onClose={localOnClose}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
              ...anchors[anchor].enter
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: "easeIn",
              },
              ...anchors[anchor].exit
            },
          }
        }}

        classNames={anchors[anchor].classNames}
        as="aside"
      >
        {children}
      </Modal >
    </>
  )
}


export const DrawerContent = ModalContent;
export const DrawerHeader = ModalHeader;
export const DrawerBody = ModalBody;
export const DrawerFooter = ModalFooter;