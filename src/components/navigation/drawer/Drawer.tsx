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

interface ModalPropsExtended {
  anchor: 'left' | 'right' | 'top' | 'bottom',
  open: boolean,
  onOpen?: (isOpen: boolean) => void,
  onClose?: (isOpen: boolean) => void,
  hideCloseButton?: boolean
}

type Props = Omit<ModalProps, keyof ModalPropsExtended> & ModalPropsExtended

export const Drawer = ({ children, anchor = 'top', open = false, onOpen = () => { }, onClose = () => { }, hideCloseButton = true, closeButton,  ...props }: Props) => {


  const { isOpen: localIsOpen, onOpen: localOnOpen, onClose: localOnClose } = useDisclosure({ isOpen: open });

  const anchors: Record<typeof anchor, any> = {
    left: {
      classNames: {
        wrapper: "justify-start",
        base: 'w-[300px] h-[100dvh] my-0 mx-0 sm:mx-0 sm:my-0 rounded-none',
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
        base: 'w-[300px] h-[100dvh] my-0 mx-0 sm:mx-0 sm:my-0 rounded-none ',
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
        wrapper: "w-screeen justify-center items-start sm:items-start",
        base: 'max-w-full h-[300px] my-0 mx-0 sm:mx-0 sm:my-0 rounded-none ',
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
        wrapper: "w-screen justify-center sm:items-end",
        base: 'max-w-full h-[300px] my-0 mx-0 sm:mx-0 sm:my-0 rounded-none ',
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
      onOpen(localIsOpen);
    }

    if (!localIsOpen) {
      localOnClose();
      onClose(localIsOpen);
    }
  }

  const handleClose = () => {
    localOnClose()
    onClose(!localIsOpen)
  }

  useEffect(() => {
    toggle();
  }, [open])


  return (
    <>
      <Modal
        isOpen={localIsOpen}
        onClose={handleClose}
        hideCloseButton={hideCloseButton}
        closeButton={closeButton && <Button isIconOnly size="sm" variant="light" >{closeButton}</Button>}
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
        
        {...props}

        classNames={{
          ...props.classNames,
          wrapper: anchors[anchor].classNames.wrapper + ' ' + props.classNames?.wrapper,
          base: anchors[anchor].classNames.base + ' ' + props.classNames?.base,
          // closeButton: "size-8"
        }}
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