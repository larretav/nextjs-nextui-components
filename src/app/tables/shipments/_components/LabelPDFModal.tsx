
import React, { useEffect, useState } from 'react'
import { Modal, ModalFooter, ModalBody, ModalContent, useDisclosure } from '@nextui-org/modal'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store';
import { Button } from '@nextui-org/button';
import toast from 'react-hot-toast';

export default function LabelPDFModal() {
    const { onOpenChange } = useDisclosure();
    const toggleViewPDFModal = useShipmentTableStore.use.toggleLabelPDFModal()
    const selectedShipmentOrder = useShipmentTableStore.use.selectedShipmentOrder()
    const isOpen = useShipmentTableStore.use.isLabelPDFModalOpen()
    const [pdfUrl, setPdfUrl] = useState("");
    const urlCall = `https://onsite.pktuno.mx/ws2//Api/Labels/PDF?id=${selectedShipmentOrder.id}&ecom=true`
    async function callDetailsPDFApi() {        
        try {
            const res = await fetch(urlCall)
            const blob = await res.blob()
            const url = URL.createObjectURL(blob)
            setPdfUrl(url);
        } catch (error) {
            toast.error("Error al obtener el PDF")
        }
    }
    useEffect(() => {
        if (!selectedShipmentOrder.id) return
        callDetailsPDFApi()
    }, [])
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