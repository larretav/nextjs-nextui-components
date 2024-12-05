'use client';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import React, { ReactElement, ReactNode } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleExclamation, FaCircleXmark, FaInfo, FaTriangleExclamation } from 'react-icons/fa6';

type AlertProps = {
  severity: "success" | "info" | "warning" | "error";
  title: string;
  description: string;
  isDismissable?: boolean;
  footer?: ReactNode
}

const CustomAlert = ({
  severity = "success",
  title,
  description,
  footer,
  isDismissable = false,

}: AlertProps) => {

  const icons: Record<AlertProps['severity'], ReactNode> = {
    success: <FaCheckCircle size={100} />,
    info: <FaCircleExclamation size={100} />,
    warning: <FaTriangleExclamation size={100} />,
    error: <FaCircleXmark size={100} />
  }


  const { isOpen, onOpenChange } = useDisclosure({ defaultOpen: true });

  return (
    <Modal
      placement="center"
      isDismissable={false}
      className="rounded-3xl bg-content2"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      motionProps={{
        variants: {
          enter: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: [.47, 1.64, .41, .8]
            }
          },
          exit: {
            scale: 0.8,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: 'easeInOut'
            },
          },
        }
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col justify-center items-center ">
          {icons[severity]}
        </ModalHeader>

        <ModalBody className="gap-4">
          <p className="text-2xl text-foreground-800 text-center">
            {title}
          </p>
          <p className="text-lg text-foreground-500 text-center">
            {description}
          </p>
        </ModalBody>

        <ModalFooter className="justify-center mt-6">
          {footer}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}


export const alert = {
  success: (title: AlertProps['title'], props: Omit<AlertProps, 'title' | 'severity'>) => { CustomAlert({ ...props, title, severity: 'success' }) },
}
