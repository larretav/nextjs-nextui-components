"use client"
import React, { useEffect, useState } from 'react'
import { Modal, ModalFooter, ModalBody, ModalContent, useDisclosure } from '@nextui-org/modal'
import { useShipmentListStore } from '@/store/tables/shipment-list-store';
import { Button } from '@nextui-org/button';
import toast from 'react-hot-toast';
import { Spinner } from "@nextui-org/spinner";
export default function LabelPDFModal() {
    const { onOpenChange } = useDisclosure();
    const toggleViewPDFModal = useShipmentListStore.use.toggleLabelPDFModal()
    const selectedShipmentOrder = useShipmentListStore.use.selectedShipmentOrder()
    const isOpen = useShipmentListStore.use.isLabelPDFModalOpen()
    const [pdfUrl, setPdfUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)
        callDetailsPDFApi().finally(() => setIsLoading(false))
    }, [])
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} classNames={{ closeButton: "opacity-0" }}>
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
                    {isLoading && <Spinner color="secondary" />}
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