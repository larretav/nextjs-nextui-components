// src/context/AlertContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleExclamation, FaCircleXmark, FaInfo, FaTriangleExclamation } from 'react-icons/fa6';


type AlertProps = {
  severity: "success" | "info" | "warning" | "error";
  title: string;
  description: string;
  isDismissable?: boolean;
  footer?: ReactNode;
};

type AlertContextType = {
  showAlert: (title: string, options: Omit<AlertProps, 'title'>) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {

  const [alertProps, setAlertProps] = useState<AlertProps | null>(null);
  const [open, setOpen] = useState(false)

  const showAlert = (title: string, options: Omit<AlertProps, 'title'>) => {
    setAlertProps({ title, ...options });
    setOpen(true)
  };

  const closeAlert = () => {
    setAlertProps(null);
    setOpen(false)
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <CustomAlert
        title={alertProps?.title ?? ''}
        severity={alertProps?.severity ?? 'success'}
        description={alertProps?.description ?? 'success'}
        open={open}
        onOpenChange={setOpen}
        {...alertProps}
        isDismissable
        footer={
          <button
            className="btn btn-primary"
            onClick={closeAlert}
          >
            Cerrar
          </button>
        }
      />
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert debe usarse dentro de un AlertProvider');
  }
  return context;
};





const CustomAlert = ({ severity = "success", title, description, footer, isDismissable = false, open = true, onOpenChange }: AlertProps & { open: boolean, onOpenChange: (isOpen: boolean) => void }) => {

  const icons: Record<AlertProps['severity'], ReactNode> = {
    success: <FaCheckCircle size={100} />,
    info: <FaCircleExclamation size={100} />,
    warning: <FaTriangleExclamation size={100} />,
    error: <FaCircleXmark size={100} />
  }


  const { isOpen, onOpenChange: onOpChange } = useDisclosure({ defaultOpen: open });
  

  useEffect(() => {
    onOpChange();
  }, [open])
  

  return (
    <Modal
      placement="center"
      isDismissable={false}
      className="rounded-3xl bg-content2"
      isOpen={isOpen}
      onOpenChange={(isOpen) => {
        onOpChange();
        onOpenChange(isOpen);
      }}
      // hideCloseButton
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