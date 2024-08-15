'use client';
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

type Props = {
  children?: ReactNode | ReactNode[],
  anchor: 'left' | 'right' | 'top' | 'bottom' | string,
  open: boolean,
  onOpen: (isOpen: boolean) => void,
  onClose: (isOpen: boolean) => void,
  hideCloseButton?: boolean
}

export const Drawer = ({ children, anchor = 'top', open, onOpen, onClose, hideCloseButton = true, ...props }: ModalProps & Props) => {


  const { isOpen: localIsOpen, onOpen: localOnOpen, onClose: localOnClose } = useDisclosure();

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

  useEffect(() => {
    if (open) {
      localOnOpen();
      onOpen(localIsOpen);
    }

    if (!open) {
      localOnClose()
      onClose(localIsOpen)
    }

  }, [open])



  return (
    <>
      {/* <div className="p-4 w-full flex items-center justify-center" >
        <Button onClick={() => onOpen()} className="max-w-24" >Open</Button>
      </div> */}

      <Modal
        size="full"
        isOpen={localIsOpen}
        onClose={localOnClose}
        hideCloseButton={hideCloseButton}
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
        {/* <ModalContent > */}
        {children}
        {/* </ModalContent> */}
      </Modal >
    </>
  )
}


export const DrawerContent = ModalContent;
export const DrawerHeader = ModalHeader;
export const DrawerBody = ModalBody;
export const DrawerFooter = ModalFooter;