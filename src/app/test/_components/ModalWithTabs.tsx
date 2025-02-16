'use client';

import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@heroui/modal";
import { Tabs, Tab } from "@heroui/tabs";
import { Key, useState } from "react";


export const ModalWithTabs = () => {

  const [selectedKey, setSelectedKey] = useState<Key>('addressess');
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (<>
    <Button onPress={() => {
      onOpen();
    }} >Modal con Tabs</Button>

    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size='2xl'
      classNames={{
        closeButton: 'top-2 right-2 text-2xl',
      }}
    >
      <ModalContent >
        {(onClose) => <>

          <ModalHeader>
            Direccion destino
          </ModalHeader>

          <ModalBody >
            <Tabs
              aria-label="Pestañas de direcciones"
              selectedKey={selectedKey.toString()}
              onSelectionChange={setSelectedKey}
              radius="sm"
            >
              <Tab key="addressess" title="Direcciones" >
                Estas seran las direcciones
              </Tab>

              <Tab key="customers" title="Direcciones" >
                Estos los clientes
              </Tab>

            </Tabs>
          </ModalBody>
        </>}

      </ModalContent >
    </Modal >
  </>
  )
}

