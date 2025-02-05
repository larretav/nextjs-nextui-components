"use client"
import React, { useEffect, useState } from 'react'
import { Modal, ModalFooter, ModalBody, ModalContent, useDisclosure } from "@heroui/modal"
import { useShipmentListStore } from '@/store/tables/shipment-list-store';
import { Button } from "@heroui/button";
import toast from 'react-hot-toast';
import { Spinner } from "@heroui/spinner";
export default function DetailsPDFModal() {
    const { onOpenChange } = useDisclosure();
    const isOpen = useShipmentListStore.use.isDetailsPDFModalOpen()
    const toggleViewPDFModal = useShipmentListStore.use.toggleDetailsPDFModal()
    const selectedShipmentOrder = useShipmentListStore.use.selectedShipmentOrder()
    const [pdfUrl, setPdfUrl] = useState("");
    const urlCall = `https://web.pktuno.mx/PKT1/impresiondocumentacion.php?id=${selectedShipmentOrder.id}&GPDF=Si&idfranquicia=${selectedShipmentOrder.branchId}&idcontacto=${selectedShipmentOrder.userId}&Onsite`
    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)       
        callViewPDFApi().finally(() => setIsLoading(false))
    }, [callViewPDFApi])
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} classNames={{ closeButton: "opacity-0" }} >
            <ModalContent >
                <ModalBody>
                    {!isLoading && pdfUrl && (
                        <embed
                            type="application/pdf"
                            src={pdfUrl}
                            width="100%"
                            height="500"
                        />
                    )}
                    {isLoading && <Spinner size='lg' color='secondary'/>}
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