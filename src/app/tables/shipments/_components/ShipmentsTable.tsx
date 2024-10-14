"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Selection, getKeyValue, } from "@nextui-org/table"
import { IconEcommerce, PageTitle, ShipperType, } from '@/components'
import TabFilter from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import ShipmentDetails from './ShipmentDetails'
import ShipmentsPopoverFilter from './ShipmentsPopoverFilter'
import OsStatus from '@/components/data-display/onsite/OsStatus'
import { Button } from '@nextui-org/button'
import { FaEllipsisVertical, FaFilePdf } from 'react-icons/fa6'
import { ShipmentsMapper } from '@/mapper/shipmentsMapper';
import { EcommercePlatforms, ShipmentStatus, Shippers } from '@/types';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import TablePagination from '../../../../components/pagination/TablePagination';
import DetailsPDFModal from './DetailsPDFModal'
import { FaFileExport ,FaLocationDot,FaFileContract} from "react-icons/fa6";
import LabelPDFModal from './LabelPDFModal'
import toast, { Toaster } from 'react-hot-toast'; 
import { BsFiletypeXml } from "react-icons/bs";
import { ShipmentsDocumenterMapper } from '@/mapper/shipmentsDocumenterMapper'
import { Spinner } from "@nextui-org/spinner";
import PaqueteExpressMap from './PaqueteExpressMap'
import { TbTruckDelivery } from 'react-icons/tb'
import DeliveryDetailsModal from './DeliveryDetailsModal'
import { IoFootstepsSharp } from 'react-icons/io5'
import TrackingModal from './TrackingModal'
import { Input } from '@nextui-org/input'
import { IoIosSearch } from 'react-icons/io'
type Props = {
    documenters: any
}
export default function ShipmentsTable({ documenters }: Props) {

    const [shipmentsData, setShipmentsData] = useState<ShipmentsMapper>();
    const [isLoading, setIsLoading] = useState(false);

    //Store hooks
    const isDetailsOpen = useShipmentTableStore.use.isDetailsOpen()
    const toggleDetails = useShipmentTableStore.use.toggleDetails()
    const selectShipmentOrder = useShipmentTableStore.use.selectShipmentOrder()
    const setDocumenters = useShipmentTableStore.use.setDocumenters()
    const selectedTableKey = useShipmentTableStore.use.selectedTableKey()
    const setSelectedTableKey = useShipmentTableStore.use.setSelectedTableKey()
    //Filters    
    const setSelectedTabKey = useShipmentTableStore.use.setSelectedTabKey()
    const selectedTabKey = useShipmentTableStore.use.selectedTabKey() as string
    const filterShipper = useShipmentTableStore.use.filterShipper()
    const filterEcommercePlatform = useShipmentTableStore.use.filterEcommercePlatform()
    const filterDocumenter = useShipmentTableStore.use.filterDocumenter()
    const filterWord = useShipmentTableStore.use.filterWord()
    const setFilterWord = useShipmentTableStore.use.setFilterWord()
    //Pagination
    const page = useShipmentTableStore.use.page()
    const setPage = useShipmentTableStore.use.setPage()
    const start = useShipmentTableStore.use.start()
    const setStart = useShipmentTableStore.use.setStart()
    const rowsPerPage = useShipmentTableStore.use.rowsPerPage()
    const setRowsPerPage = useShipmentTableStore.use.setRowsPerPage()
    //Modals
    const toggleViewPDFModal = useShipmentTableStore.use.toggleDetailsPDFModal()
    const toggleViewLabelPDFModal = useShipmentTableStore.use.toggleLabelPDFModal()
    const togglePaquetexpressModal = useShipmentTableStore.use.togglePaquetexpressMapModal()
    const toggleDeliveryDetailsModal = useShipmentTableStore.use.toggleDeliveryDetailsModal()
    const toggleTrackingModal = useShipmentTableStore.use.toggleTrackingModal()
    const isDetailsPDFModalOpen = useShipmentTableStore.use.isDetailsPDFModalOpen()
    const isLabelPDFModalOpen = useShipmentTableStore.use.isLabelPDFModalOpen()
    const isPaquetexpressMapModalOpen = useShipmentTableStore.use.isPaquetexpressMapModalOpen()
    const isDeliveryDetailsModalOpen = useShipmentTableStore.use.isDeliveryDetailsModalOpen()
    const isTrackingModalOpen = useShipmentTableStore.use.isTrackingModalOpen()

    //Fetch shipments    
    useEffect(() => {
        setIsLoading(true)
        callShipmentsApi().finally(() => {
            setIsLoading(false)
        })
    }, [filterShipper, filterEcommercePlatform, filterDocumenter, selectedTabKey, rowsPerPage, start])
    //Separate useEffect for debounce
    const debounceDelay = 100;
    useEffect(() => {        
        setIsLoading(true)
        const timeoutId = setTimeout(() => {
            callShipmentsApi().finally(() => {
                setIsLoading(false)
            })
        }, debounceDelay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [filterWord])

    //Save documenters in global store
    useEffect(() => {
        const mappedDocumenters = ShipmentsDocumenterMapper.fromResponse(documenters)
        setDocumenters(mappedDocumenters)
    }, [documenters])
    async function callShipmentsApi() {
        try {
            const myHeaders = new Headers({
                "Content-Type": "application/json",
                "Authorization": process.env.NEXT_PUBLIC_TOKEN || ""
            })
            const body = JSON.stringify({
                draw: 1,
                start: start,
                length: rowsPerPage,
                search: {
                    value: filterWord
                },
                estatus: selectedTabKey,
                alianza: filterShipper,
                origen: filterEcommercePlatform,
                documentador: filterDocumenter,
            });
            const res = await fetch("https://onsite.pktuno.mx/ws2//Api/DocOS/Obtener/a15df564-22f4-11eb-860f-00505632f3b46212",
                {
                    headers: myHeaders,
                    method: "POST",
                    body
                }
            )
            const json = await res.json()
            const mappedResponse = ShipmentsMapper.fromResponse(json)
            setShipmentsData(mappedResponse)
        } catch (error) {
            toast.error("Error al obtener información, reintente más tarde")
        }
    }
    const handleSelectionChange = (ev: Selection) => {
        setSelectedTableKey(ev)
        const orderId = Array.from(ev)[0]
        const shipmentOrder = shipmentsData?.data.find((item) => item.id == orderId)
        if (shipmentOrder) {
            selectShipmentOrder(shipmentOrder)
            toggleDetails(true)
        } else {
            toggleDetails(false)
        }
    }

    const onTabChange = useCallback((key: React.Key) => {
        setStart(0)
        setPage(1)
        setSelectedTabKey(key)
        toggleDetails(false)
        setSelectedTableKey(new Set([]))
    }, [setSelectedTabKey, setPage])

    const onFilterWordChange = useCallback((val: string) => {
        setFilterWord(val)
        if (filterWord.length > 3 ) {
            setStart(0)
            setPage(1);
            toggleDetails(false)
            setSelectedTableKey(new Set([]))
        }
    }, [setPage, setFilterWord, filterWord]);
    const columns = [{
        key: "order",
        label: "Orden"
    },
    {
        key: "date",
        label: "Fecha"
    },
    {
        key: "customer",
        label: "Cliente"
    },
    {
        key: "origin-destination",
        label: "Origen - Destino"
    },
    {
        key: "cost",
        label: "Costo"
    },
    {
        key: "status",
        label: "Estatus"
    },
    {
        key: "shipper",
        label: "Alianza"
    },
    {
        key: "actions",
        label: "Acciones"
    },
    ]

    const rows = shipmentsData?.data?.map((order) => {
        return {
            key: order.id,
            order: <div className="flex gap-2 items-center text-xs">
                <div className="rounded-xl bg-default-200 p-1">
                    <IconEcommerce className="w-8 h-8" ecommerce={order.formattedEcomType as EcommercePlatforms} />
                </div>
                <span>#{order.id}</span>
            </div>,
            date: order.formattedDate,
            customer: order.CustomerName,
            "origin-destination": order.OriginDestination,
            cost: `$${order.Cost.toFixed(2)}`,
            status: <OsStatus status={order.getStatusName as ShipmentStatus} />,
            shipper: <ShipperType shipper={order.getShipper as Shippers} />,
            actions: (
                <Dropdown isDisabled={order.getStatusName == "cancelada"}  >
                    <DropdownTrigger >
                        <Button isIconOnly radius='full' size='sm' variant='light'
                            onClick={() => {
                                selectShipmentOrder(order)
                                setSelectedTableKey(new Set([order.id.toString()]))
                                toggleDetails(true)
                            }}>
                            <FaEllipsisVertical size={16} className={`${order.getStatusName == "cancelada" && "text-slate-300"}`} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="viewDetailsPDF" startContent={<FaFilePdf size={16} className='text-red-500' />}
                            onClick={() => { toggleViewPDFModal(true) }}
                        >Detalles PDF
                        </DropdownItem>
                        <DropdownItem key="LabelPDF" startContent={<FaFileExport size={16} className='text-green-500' />}
                            onClick={() => { toggleViewLabelPDFModal(true) }}
                        >Guía PDF
                        </DropdownItem>
                        <DropdownItem key="CFDI Traslado" startContent={<FaFileContract size={16} className='text-red-500' />}
                            onClick={() => {
                                if (!order.transferSeries || !order.transferFolio) {
                                    toast.error("No se encontró serie y folio de traslado")
                                    return
                                }
                                const url = `https://documentacion.paq1.com.mx/api/v2/Facturacion/Factura/${order.transferSeries}/${order.transferFolio}?Tipo=1`
                                window.open(url, '_blank');
                            }}
                        >
                            CFDI Traslado PDF
                        </DropdownItem>
                        <DropdownItem key="delete" startContent={<BsFiletypeXml size={16} className='text-sky-500' />}
                            onClick={() => {
                                if (!order.transferSeries || !order.transferFolio) {
                                    toast.error("No se encontró serie y folio de traslado")
                                    return
                                }
                                const url = `https://documentacion.paq1.com.mx/api/v2/Facturacion/Factura/${order.transferSeries}/${order.transferFolio}?Tipo=0`
                                window.open(url, '_blank');
                            }}
                        >
                            CFDI Traslado XML
                        </DropdownItem>

                        {order.forcedOfficeKey != "0" && order.getShipper === "paquetexpress" ?
                            <DropdownItem startContent={<FaLocationDot size={16} className='text-sky-500' />}
                                onClick={() => {
                                    togglePaquetexpressModal(true)
                                }}
                            >Ubicación Paquetexpress
                            </DropdownItem>
                            : <DropdownItem className='hidden'> </DropdownItem>}

                        {order.getStatusName == "entregado" && order.getShipper === "paquetexpress" ?
                            <DropdownItem startContent={<TbTruckDelivery size={16} className='text-teal-500' />}
                                onClick={() => toggleDeliveryDetailsModal(true)}
                            >Detalles de entrega
                            </DropdownItem>
                            : <DropdownItem className='hidden'> </DropdownItem>}

                        {order.getStatusName == "entregado" ?
                            <DropdownItem startContent={<IoFootstepsSharp size={16} className='text-amber-500' />}
                                onClick={() => toggleTrackingModal(true)}
                            >Rastreo del envío</DropdownItem>
                            : <DropdownItem className='hidden'> </DropdownItem>}
                    </DropdownMenu>

                </Dropdown>
            ),
            isForeign: order.isForeignBranch
        }
    }) || []

    return (
        <div className='bg-zinc-100 dark:bg-zinc-950'>
            <Toaster />
            {isDetailsPDFModalOpen && <DetailsPDFModal />}
            {isLabelPDFModalOpen && <LabelPDFModal />}
            {isPaquetexpressMapModalOpen && <PaqueteExpressMap />}
            {isDeliveryDetailsModalOpen && <DeliveryDetailsModal />}
            {isTrackingModalOpen && <TrackingModal />}
            <div className='ml-5'>
                <PageTitle text='Envíos' />
            </div>
            <div className='flex p-3'>
                <div className="flex flex-col w-full bg-neutral-50 rounded-xl dark:bg-zinc-900">
                    <div className="flex px-5">
                        <TabsFilters fullWidth selectedKey={selectedTabKey} onSelectionChange={onTabChange} >
                            <TabFilter key={"P,A"} text="En sitio y tránsito" value={""} activeColor="blue" />
                            <TabFilter key={"P"} text="En sitio" value={""} activeColor="amber" />
                            <TabFilter key={"A"} text="En transito" value={""} activeColor="blue" />
                            <TabFilter key={"E"} text="Entregado" value={""} activeColor="green" />
                            <TabFilter key={"C"} text="Cancelado" value={""} activeColor="red" />
                            <TabFilter key={"X"} text="Todos" value={""} activeColor="green" />
                        </TabsFilters>
                        <div className='flex items-center ml-auto gap-2'>
                            <Input radius="sm" startContent={<IoIosSearch />}
                                value={filterWord}
                                onValueChange={onFilterWordChange}
                                placeholder='Cliente o # orden' size='sm'
                                classNames={{ input: "text-xs" }} 
                                />
                            <ShipmentsPopoverFilter />
                        </div>
                    </div>
                    <Table aria-label="dynamic collection table" selectionMode='single' selectionBehavior='toggle' removeWrapper
                        selectedKeys={selectedTableKey}
                        onSelectionChange={handleSelectionChange}
                        bottomContent={
                            shipmentsData?.data?.length && shipmentsData.data.length > 0 ?
                                <TablePagination page={page}
                                    setPage={setPage}
                                    rowsPerPage={rowsPerPage}
                                    setRowsPerPage={setRowsPerPage}
                                    toggleDetails={toggleDetails}
                                    recordsFiltered={shipmentsData.recordsFiltered}
                                    recordsTotal={shipmentsData.recordsTotal}
                                    setStart={setStart}
                                /> : ""
                        }
                    >
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={rows} emptyContent="No hay resultados que coincidan con la búsqueda" isLoading={isLoading} loadingContent={<Spinner color='primary' size='lg' />}>
                            {(item) => (
                                <TableRow key={item.key} className={`cursor-pointer ${item.isForeign && "bg-emerald-200 dark:bg-green-800"}`} >
                                    {(columnKey) =>
                                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                {isDetailsOpen && <ShipmentDetails />}
            </div>
        </div>
    )
}