"use client"
import { PaqueteExpressDeliveryMapper } from '@/models/shipments/paquetexpressDelivery.model';
import { useShipmentListStore } from '@/store/tables/shipment-list-store';
import { Button } from "@heroui/button"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Spinner } from "@heroui/spinner"


export default function DeliveryDetailsModal() {
    const { onOpenChange } = useDisclosure();
    const isOpen = useShipmentListStore.use.isDeliveryDetailsModalOpen()
    const toggleDeliveryDetailsModal = useShipmentListStore.use.toggleDeliveryDetailsModal()
    const selectedShipmentOrder = useShipmentListStore.use.selectedShipmentOrder()
    const [deliveryDetails, setDeliveryDetails] = useState<PaqueteExpressDeliveryMapper>()
    const [deliverySignature, setDeliverySignature] = useState<string>("")
    const [isLoading, setIsLoading] = useState(false)
    async function callDeliveryDetailsApi() {
        if (!selectedShipmentOrder.trackingNumber || selectedShipmentOrder.getShipper !== "paquetexpress") return
        try {
            const trackingNumber = selectedShipmentOrder?.trackingNumber?.split("-")[1]
            const response = await fetch(`https://cc.paquetexpress.com.mx/ptxws/rest/api/v1/guia/historico/ultimoevento/${trackingNumber}/@1@2@3@4@5?`)
            const text = await response.text()
            const jsonMatch = text.match(/Resultado\((.*)\)/);
            if (jsonMatch && jsonMatch[1]) {
                const jsonData = JSON.parse(jsonMatch[1]);
                const mappedResponse = PaqueteExpressDeliveryMapper.fromJson(jsonData[0])
                setDeliveryDetails(mappedResponse)
            }

        } catch (error) {
            toast.error("Error al obtener los detalles de la entrega por paqueteexpress")
        }
    }

    async function callDeliverySignatureApi() {
        if (!selectedShipmentOrder.trackingNumber || selectedShipmentOrder.getShipper !== "paquetexpress") return
        try {
            const trackingNumber = selectedShipmentOrder.trackingNumber.split("-")[1]
            const response = await fetch(`https://cc.paquetexpress.com.mx/ptxws/rest/api/v1/entrega/firma/${trackingNumber}/@1@2@3@4@5?`)
            const text = await response.text()
            const jsonString = text.slice(text.indexOf('(') + 1, text.lastIndexOf(')'));
            const data = JSON.parse(jsonString);
            const imageSrc = `data:image/png;base64,${data[0].imagen}`;
            setDeliverySignature(imageSrc)
        } catch (error) {
            toast.error("Error al obtener la imagen de la entrega por paqueteexpress")
        }
    }

    useEffect(() => {
        setIsLoading(true)
        callDeliveryDetailsApi()
        callDeliverySignatureApi().finally(() => setIsLoading(false))
    }, [callDeliveryDetailsApi, callDeliverySignatureApi])
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={() => toggleDeliveryDetailsModal(false)}>
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col text-xl text-center">Evidencia de entrega del envío</ModalHeader>
                    <ModalBody>
                        {isLoading && <Spinner color='secondary' size='lg' />}
                        {!isLoading && <>
                            <div className='flex flex-col items-center'>
                                <span className='font-semibold'> {deliveryDetails?.getDate}</span>
                                <span className='text-xs'> {deliveryDetails?.getTime}</span>
                                <span className='text-blue-600 dark:text-blue-300 text-center py-2 font-semibold'>{deliveryDetails?.data.status}</span>
                                <span>{deliveryDetails?.data.destinationCity}</span>
                            </div>
                            <span className='-mb-2 font-bold'>Firma electrónica</span>
                            <div className='bg-neutral-100 border rounded-lg'>
                                {deliverySignature &&
                                    <Image
                                        className='w-auto h-auto min-h-40'
                                        alt='delivery-signature'
                                        width={200}
                                        height={200}
                                        src={deliverySignature}
                                    >
                                    </Image>}
                            </div>
                        </>}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={() => toggleDeliveryDetailsModal(false)}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </>

            </ModalContent>
        </Modal>
    )
}