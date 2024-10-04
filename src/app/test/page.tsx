"use client"

import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal"
import { Button } from '@nextui-org/button';
type Props = {}

export default function page({ }: Props) {
  const [pdfUrl, setPdfUrl] = useState("");
  const { onOpen, onOpenChange } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    async function callApi() {
      const res = await fetch("https://web.pktuno.mx/PKT1/impresiondocumentacion.php?id=216339&GPDF=Si&idfranquicia=80&idcontacto=11287&Onsite")
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      setPdfUrl(url);
      setIsOpen(true)
    }
    callApi()
  }, [])
  return (
    <div className="flex">
      <p>Test page</p>
      <div className="flex flex-wrap gap-4 ml-auto">
        <Button onPress={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalContent>
            {(onClose) => (
              <>

                <ModalBody>
                  {pdfUrl && (
                    <embed
                      type="application/pdf"
                      src={pdfUrl}
                      width="100%"
                      height="500"
                    />
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={() => setIsOpen(false)}>
                    Close
                  </Button>

                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>

      </div>

    </div>
  )
}