
import React, { useEffect, useState } from 'react'
import { Modal, ModalFooter, ModalBody, ModalContent, useDisclosure } from '@nextui-org/modal'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store';
import { Button } from '@nextui-org/button';
import { MappedPaqueteExpressOffice } from '@/mapper/paqueteExpressOfficeMapper';
import toast from 'react-hot-toast';
import { APIProvider, Map, Pin, AdvancedMarker } from '@vis.gl/react-google-maps'; 

export default function PaqueteExpressMap() {
    const { onOpenChange } = useDisclosure();
    const selectedShipmentOrder = useShipmentTableStore.use.selectedShipmentOrder()
    const togglePaquetexpressModal = useShipmentTableStore.use.togglePaquetexpressModal()
    const isOpen = useShipmentTableStore.use.isPaquetexpressModalOpen()
    const [PXOffice, setPXOffice] = useState<MappedPaqueteExpressOffice | undefined>()
    async function callPaqueteExpressApi() {
        if (selectedShipmentOrder.forcedOfficeKey == "0" || !selectedShipmentOrder.forcedOfficeKey) return
        try {
            const res = await fetch(`https://cc.paquetexpress.com.mx/ptxws/rest/api/v1/sucursal/${selectedShipmentOrder.forcedOfficeKey}/@1@2@3@4@5?`)
            const text = await res.text()
            const jsonString = text.replace(/^Resultado\(/, '').replace(/\)$/, '');
            const json = JSON.parse(jsonString)
            const mappedResponse = MappedPaqueteExpressOffice.fromResponse(json[0])
            setPXOffice(mappedResponse)
        } catch (error) {
            toast.error("Error al obtener información de la oficina, reintente más tarde")
        }
    }
    
    useEffect(() => {
        callPaqueteExpressApi()
    }, [selectedShipmentOrder])
    return (
        <Modal isOpen={isOpen} onClose={() => togglePaquetexpressModal(false)} onOpenChange={onOpenChange}  scrollBehavior='outside'>
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string}>
                <ModalContent >
                    <ModalBody>
                        <div className='flex flex-col'>
                            <p className='text-center text-xl'>Sucursal {PXOffice?.data.name}</p> <br />
                            <p className='text-xs '><strong>Dirección: </strong> {PXOffice?.getAddress} { }</p> <br />
                            <p className='text-xs'><strong>Horario: </strong>{PXOffice?.data.schedule}</p> <br />
                            <p className='text-xs '><strong>Teléfonos: </strong>{PXOffice?.getPhones}</p>
                            <Button className='w-40 mt-2 text-xs' size='sm' color='secondary'
                                onClick={() => {
                                    navigator.clipboard.writeText(`https://www.google.com/maps?q=${PXOffice?.data.latitude},${PXOffice?.data.longitude}`)
                                    toast.success("Ubicación copiada al portapapeles")
                                }}>Copiar ubicación</Button>
                        </div>
                        {PXOffice?.data.latitude && PXOffice?.data.longitude && (
                            <div className='w-96 h-72'>
                                <Map defaultCenter={{ lat: Number(PXOffice?.data.latitude), lng: Number(PXOffice?.data.longitude) }}
                                    defaultZoom={13}
                                    mapId={"PaqueteExpress-office"}
                                >
                                    <AdvancedMarker
                                        key={"office"}
                                        position={{ lat: Number(PXOffice?.data.latitude), lng: Number(PXOffice?.data.longitude) }}
                                    >
                                        <Pin background={'#e32b1e'} glyphColor={'#000'} borderColor={'#000'} />
                                    </AdvancedMarker>
                                </Map>
                            </div>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={() => togglePaquetexpressModal(false)}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </APIProvider>
        </Modal>
    )
}