import React, { useEffect, useState } from 'react'
import { Modal, ModalFooter, ModalBody, ModalContent, useDisclosure } from '@nextui-org/modal'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store';
import { Button } from '@nextui-org/button';
import toast from 'react-hot-toast';

export default function DetailsPDFModal() {
    const { onOpenChange } = useDisclosure();
    const isOpen = useShipmentTableStore.use.isDetailsPDFModalOpen()
    const toggleViewPDFModal = useShipmentTableStore.use.toggleDetailsPDFModal()
    const selectedShipmentOrder = useShipmentTableStore.use.selectedShipmentOrder()
    const [pdfUrl, setPdfUrl] = useState("");
    const urlCall = `https://web.pktuno.mx/PKT1/impresiondocumentacion.php?id=${selectedShipmentOrder.id}&GPDF=Si&idfranquicia=${selectedShipmentOrder.branchId}&idcontacto=${selectedShipmentOrder.userId}&Onsite`    
    async function callViewPDFApi() {
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
        callViewPDFApi()
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