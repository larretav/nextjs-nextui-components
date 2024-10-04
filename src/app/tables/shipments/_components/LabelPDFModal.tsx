
import React, { useEffect, useState } from 'react'
import { Modal, ModalFooter, ModalBody, ModalContent, useDisclosure } from '@nextui-org/modal'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store';
import { Button } from '@nextui-org/button';

export default function LabelPDFModal() {
  const { onOpenChange } = useDisclosure();
  const toggleViewPDFModal = useShipmentTableStore.use.toggleLabelPDFModal()
  const selectedShipmentOrder = useShipmentTableStore.use.selectedShipmentOrderForMenu()
  const isOpen = useShipmentTableStore.use.isLabelPDFModalOpen()

  const [pdfUrl, setPdfUrl] = useState("");
  const urlCall = `https://onsite.pktuno.mx/ws2//Api/Labels/PDF?id=${selectedShipmentOrder.id}&ecom=true`
  async function callDetailsPDFApi() {
    console.log(selectedShipmentOrder.getStatusName)
    try {
        const res = await fetch(urlCall)
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        setPdfUrl(url);
    } catch (error) {
        console.error(error)
    }
}
  useEffect(() => {
    callDetailsPDFApi()
}, [selectedShipmentOrder])
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} classNames={{ closeButton: "opacity-0" }}>
    <ModalContent >
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
            <Button color="danger" variant="light" onPress={() => toggleViewPDFModal(false)}>
                Cerrar
            </Button>
        </ModalFooter>
    </ModalContent>
</Modal>
  )
}