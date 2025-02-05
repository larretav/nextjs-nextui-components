import React, { useState, ReactNode, useEffect, use, ReactElement } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleExclamation, FaCircleXmark, FaInfo, FaQuestion, FaTriangleExclamation, FaXmark } from 'react-icons/fa6';
import { Button } from "@heroui/button";


type AlertProps = {
  severity: "success" | "info" | "warning" | "error" | "question";
  title: ReactNode;
  description?: ReactNode;
  isDismissable?: boolean;
  footer?: ReactNode | ((onClose: () => void) => ReactElement);
  confirmButton?: ReactElement;
  cancelButton?: ReactElement;
};

type ShowAlertOptions = Omit<AlertProps, 'title' | 'severity'>;


let alertCallback: ((props: AlertProps) => void) | null = null;
let isConfirmed: boolean | null = null;


const sleep = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const validateCallback = () => {
  if (!alertCallback)
    throw new Error('No se encontró un proveedor de alertas. Asegura que tu aplicación esté envuelta con AlertProvider. ');
}

const success = (title: string, options?: ShowAlertOptions) => {
  validateCallback();
  alertCallback!({ ...options, title, severity: 'success' });
}

const info = (title: string, options?: ShowAlertOptions) => {
  validateCallback();
  alertCallback!({ ...options, title, severity: 'info' });
}

const warning = (title: string, options?: ShowAlertOptions) => {
  validateCallback();
  alertCallback!({ ...options, title, severity: 'warning' });
}

const error = (title: string, options?: ShowAlertOptions) => {
  validateCallback();
  alertCallback!({ ...options, title, severity: 'error' });
}

const question = async (title: string, options: ShowAlertOptions): Promise<{ isConfirmed: boolean }> => {

  validateCallback();
  alertCallback!({ ...options, title, severity: 'question' });

  return new Promise((resolve) => {
    const interval = setInterval(async () => {
      if (isConfirmed !== null) {

        clearInterval(interval);
        const existingElement = document.querySelector<HTMLElement>('section[role="dialog"]');

        await sleep(0.2);

        if (existingElement)
          await sleep(0.2);

        resolve({ isConfirmed });
        isConfirmed = null;
      }
    }, 50);
  });
}

export const showAlert = {
  success,
  info,
  warning,
  error,
  question,
}

// --------------- Components ---------------

export const AlertProvider = ({ children }: { children: ReactNode }) => {

  const [alertProps, setAlertProps] = useState<AlertProps | null>(null);
  const [open, setOpen] = useState(false);

  const closeAlert = () => {
    setOpen(false);
    setAlertProps(null);
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
        onClose={closeAlert}
        isDismissable={alertProps?.severity === 'question' ? false : alertProps?.isDismissable}
        {...alertProps}
        footer={
          alertProps?.severity === 'question'
            ? <div className="flex gap-4">
              {
                React.cloneElement(alertProps?.cancelButton || <Button color="danger" variant="solid" >Cancelar</Button>, {
                  onClick: () => {
                    isConfirmed = false;
                    closeAlert();
                  }
                })
              }
              {
                React.cloneElement(alertProps?.confirmButton || <Button color="primary" >Aceptar</Button>, {
                  onClick: () => {
                    isConfirmed = true;
                    closeAlert();
                  }
                })
              }
            </div>
            : alertProps?.footer || <Button onPress={closeAlert} >Cerrar</Button>
        }
      />
    </>
  );
};



const CustomAlert = ({ severity, title, description = 'Descripción', footer, isDismissable = true, open = true, onClose }: AlertProps & { open: boolean, onClose: () => void }) => {

  const icons: Record<AlertProps['severity'], ReactNode> = {
    success: <FaCheckCircle size={100} className="text-green-500" />,
    info: <FaCircleExclamation size={100} className="text-sky-500" />,
    warning: <FaTriangleExclamation size={100} className="text-amber-500" />,
    error: <FaCircleXmark size={100} className="text-red-500" />,
    question: <FaQuestion size={100} className="text-blue-500" />
  }


  const { isOpen, onOpenChange } = useDisclosure({ isOpen: open });


  return (
    <Modal
      itemID={severity === 'question' ? 'modal-question' : 'modal-alert'}
      placement="center"
      isDismissable={isDismissable}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onClose}
      hideCloseButton
      closeButton={<Button isIconOnly color="default" variant="light" > <FaXmark size="1.2rem" /> </Button>}
      className="rounded-3xl bg-content2 mx-2"
      classNames={{ closeButton: 'top-2 right-2' }}
      motionProps={{
        variants: {
          enter: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.2,
              ease: [.47, 1.64, .41, .8]
            }
          },
          exit: {
            scale: 0.8,
            opacity: 0,
            transition: {
              duration: 0.1,
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
          {
            typeof title === 'string'
              ? <p className="text-2xl text-foreground-800 text-center font-medium">
                {title}
              </p>
              : <>{title}</>
          }

          {
            typeof description === 'string'
              ? <p className="text-lg text-foreground-500 text-center">
                {description}
              </p>
              : <>{description}</>
          }

        </ModalBody>

        <ModalFooter className="justify-center mt-6">
          {
            typeof footer === 'function' ? <>{footer(onClose)}</> : <>{footer}</>
          }
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}