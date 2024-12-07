// src/context/AlertContext.tsx
'use client';

import React, { useState, ReactNode, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleExclamation, FaCircleXmark, FaInfo, FaTriangleExclamation, FaXmark } from 'react-icons/fa6';
import { Button } from '@nextui-org/button';


type AlertProps = {
  severity: "success" | "info" | "warning" | "error";
  title: string;
  description?: string;
  isDismissable?: boolean;
  footer?: ReactNode;
};

type ShowAlert = (title: string, options?: Omit<AlertProps, 'title' | 'severity'>) => void


let alertCallback: ((props: AlertProps) => void) | null = null;

const validateCallback = () => {
  if (!alertCallback)
    throw new Error('No se encontró un proveedor de alertas. Asegura que tu aplicación esté envuelta con AlertProvider. ');
}


export const showAlert: Record<AlertProps['severity'], ShowAlert> = {
  success: (title, options) => {
    validateCallback();
    alertCallback!({ ...options, title, severity: 'success' })
  },

  info: (title, options) => {
    validateCallback();
    alertCallback!({ ...options, title, severity: 'info' })
  },

  warning: (title, options) => {
    validateCallback();
    alertCallback!({ ...options, title, severity: 'warning' })
  },

  error: (title, options) => {
    validateCallback();
    alertCallback!({ ...options, title, severity: 'error' })
  }
}




export const AlertProvider = ({ children }: { children: ReactNode }) => {

  const [alertProps, setAlertProps] = useState<AlertProps | null>(null);
  const [open, setOpen] = useState(false)


  const closeAlert = () => {
    setAlertProps(null);
    setOpen(false)
  };


  useEffect(() => {

    alertCallback = (props: AlertProps) => {
      setAlertProps(props);
      setOpen(true);
    };

    return () => {
      alertCallback = null;
    };

  }, []);

  return (
    <>
      {children}

      <CustomAlert
        title={alertProps?.title ?? ''}
        severity={alertProps?.severity ?? 'success'}
        description={alertProps?.description ?? 'success'}
        open={open}
        onClose={() => setOpen(false)}
        {...alertProps}
        footer={
          <Button
            onPress={closeAlert}
          >
            Cerrar
          </Button>
        }
      />
    </>
  );
};



const CustomAlert = ({ severity, title, description = 'Descripción', footer, isDismissable = true, open = true, onClose }: AlertProps & { open: boolean, onClose: () => void }) => {

  const icons: Record<AlertProps['severity'], ReactNode> = {
    success: <FaCheckCircle size={100} />,
    info: <FaCircleExclamation size={100} />,
    warning: <FaTriangleExclamation size={100} />,
    error: <FaCircleXmark size={100} />
  }


  const { isOpen, onOpenChange } = useDisclosure({ isOpen: open });


  useEffect(() => {
    if (!isOpen)
      onClose();
  }, [isOpen, onOpenChange])


  return (
    <Modal
      placement="center"
      isDismissable={isDismissable}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onClose}
      hideCloseButton
      closeButton={<Button isIconOnly color="default" variant="light" > <FaXmark size="1.2rem" /> </Button>}
      className="rounded-3xl bg-content2 mx-2"
      classNames={{ closeButton: 'top-2 right-2'}}
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
        <ModalHeader className="flex flex-col justify-center items-center py-7">
          {icons[severity]}
        </ModalHeader>

        <ModalBody className="gap-4">
          <p className="text-2xl text-foreground-800 text-center font-medium">
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