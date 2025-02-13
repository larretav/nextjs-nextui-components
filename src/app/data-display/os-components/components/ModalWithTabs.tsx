'use client';

import { IconButton } from "@/components";
import { Button } from "@nextui-org/button";
import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Key, useState } from "react";
import { FaXmark } from "react-icons/fa6";

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
      closeButton={<IconButton tabIndex={-1} ><FaXmark size="1.25rem" className="text-default-400 " /></IconButton>}
      size='2xl'
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
              <Tab key="addressess" title="Direcciones" />

              <Tab key="customers" title="Direcciones" />

            </Tabs>
          </ModalBody>
        </>}

      </ModalContent >
    </Modal >
  </>
  )
}

