import React, { useEffect, useState } from 'react'
import { Modal, ModalFooter, ModalBody, ModalContent, useDisclosure } from '@nextui-org/modal'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store';
import { Button } from '@nextui-org/button';
import toast from 'react-hot-toast';
import { Spinner } from "@nextui-org/spinner";
import { ShipmentTrackingMapper } from '@/mapper/shipmentTrackingMapper';
import { Accordion, AccordionItem } from "@nextui-org/accordion"
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LiaTruckMovingSolid } from 'react-icons/lia';
export default function TrackingModal() {
    const { onOpenChange } = useDisclosure();
    const isOpen = useShipmentTableStore.use.isTrackingModalOpen()
    const toggleTrackingModal = useShipmentTableStore.use.toggleTrackingModal()
    const selectedShipmentOrder = useShipmentTableStore.use.selectedShipmentOrder()
    const [shipmentTracking, setShipmentTracking] = useState<ShipmentTrackingMapper>()
    const [isLoading, setIsLoading] = useState(false)
    const [selectedAccordionKey, setSelectedAccordionKey] = useState<Set<string>>(new Set([]))
    const lastUpdate = shipmentTracking?.reports[0].status
    const lastUpdateTime = `El ${shipmentTracking?.reports[0].date} a las ${shipmentTracking?.reports[0].time}`
    const reports = shipmentTracking?.reports    

    async function callDeliveryTrackingApi() {
        try {
            const response = await fetch("https://test-mx-api.paq1.com.mx//API/Tracking/2/251195308815/complete") //Temporal para test
            const json = await response.json()
            const mappedResponse = ShipmentTrackingMapper.fromResponse(json)                       
            setShipmentTracking(mappedResponse)
        } catch (error) {
            toast.error("Error al consultar el servicio de rastreo del envío")
        }
    }
    useEffect(() => {
        if (!selectedShipmentOrder.id) return
        setIsLoading(true)
        callDeliveryTrackingApi().finally(() => setIsLoading(false))
    }, [])
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='outside' size='2xl'
            onClose={() => toggleTrackingModal(false)}
            className='bg-neutral-100 dark:bg-neutral-800'>
            <ModalContent >
                <ModalBody className='px-2'>
                    {isLoading && <Spinner color="success" size="lg" />}
                    {!isLoading && shipmentTracking && <>
                        <span className='text-xl font-bold text-green-500 self-center py-2 text-center'>{lastUpdate}</span>
                        <span className='self-center -mt-4'>{lastUpdateTime}</span>
                        <div className="flex  justify-center items-center gap-1">
                            {shipmentTracking.trackingLabels?.map((label, index) => (
                                <div key={`${label.Namestate}-${index}`} className='w-1/4'>
                                    <div className='flex flex-col items-center'>
                                        <Image src={label.UrlImg} alt={label.Namestate} width={100} height={100} className={`${label.On ? '' : 'grayscale'}`}/>
                                        <span className='text-[10px] py-3'>{label.Namestate}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <span className='text-xl font-semibold text-green-500 self-center text-center '>Detalles del envío</span>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                            <div className='flex flex-col items-center'>
                                <span className='text-blue-900 dark:text-blue-300 font-semibold'>Rastreo</span>
                                <span className='text-xs text-center'>{shipmentTracking.trackingNumber}</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-blue-900 dark:text-blue-300 font-semibold'>Servicio</span>
                                <span className='text-xs text-center'>{shipmentTracking.serviceName}, {shipmentTracking.shipper}</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-blue-900 dark:text-blue-300 font-semibold'>Fecha de envío</span>
                                <span className='text-xs text-center'>{shipmentTracking.documentDate}</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-blue-900 dark:text-blue-300 font-semibold'>Fecha promesa</span>
                                <span className='text-xs text-center'>{shipmentTracking.promiseDate}</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-blue-900 dark:text-blue-300 font-semibold'>Origen</span>
                                <span className='text-xs text-center'>{shipmentTracking.getOrigin}</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <span className='text-blue-900 dark:text-blue-300 font-semibold'>Origen</span>
                                <span className='text-xs text-center'>{shipmentTracking.getDestination}</span>
                            </div>
                        </div>
                        <div>
                            <Accordion selectedKeys={selectedAccordionKey}
                                onSelectionChange={(ev) => {
                                    let selectedItem = Array.from(ev)[0]
                                    if (selectedItem) {
                                        selectedItem = selectedItem.toString()
                                        setSelectedAccordionKey(new Set([selectedItem]))
                                    } else {
                                        setSelectedAccordionKey(new Set([]))
                                    }
                                }}
                            >
                                <AccordionItem key="1" aria-label="rastreo del envío" title="Desplegar rastreo del envío"
                                    classNames={{ title: 'text-xl font-semibold text-green-500 self-center text-center', indicator: 'text-green-500 ' }}>
                                    <VerticalTimeline lineColor="#2BD450" layout='1-column'>
                                        {reports?.map((report, index) => (
                                            <VerticalTimelineElement
                                                key={index}
                                                className=""
                                                contentStyle={{ background: index % 2 === 0 ? '#2BD450' : '#27418e', color: '#fff', borderRadius: '10px',  }}
                                                iconStyle={{ background: index % 2 === 0 ? '#2BD450' : '#27418e', color: '#fff', boxShadow: '0 0 0 2px #fff' }}
                                                contentArrowStyle={{ borderRight: index % 2 === 0 ? '7px solid  #2BD450' : '7px solid  #27418e' }}
                                                icon={<LiaTruckMovingSolid />}
                                            >
                                                <span className="vertical-timeline-element-title">{report.date}</span> <br />
                                                <span className='text-xs text-neutral-200'>{report.time}</span>
                                                <p>
                                                    {report.status}
                                                </p>
                                                <span className='font-bold text-neutral-200'>{report.location}</span>
                                            </VerticalTimelineElement>
                                        ))}
                                    </VerticalTimeline>
                                    <Button
                                        color="primary"
                                        onClick={() => setSelectedAccordionKey(new Set([]))}>Cerrar rastreo</Button>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </>}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={() => toggleTrackingModal(false)}>
                        Cerrar modal
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}


