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
import TablePagination from './TablePagination';
import DetailsPDFModal from './DetailsPDFModal'
import { FaFileExport } from "react-icons/fa6";
import LabelPDFModal from './LabelPDFModal'
import toast, { Toaster } from 'react-hot-toast';
import { extractCFDIParams } from '../functions/extractCFDIParams'
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { BsFiletypeXml } from "react-icons/bs";
import { ShipmentsDocumenterMapper } from '@/mapper/shipmentsDocumenterMapper'

type Props = {
    documenters: any
}
export default function ShipmentsTable({ documenters }: Props) {

    const [shipmentsData, setShipmentsData] = useState<ShipmentsMapper>();       
    
    //Store hooks
    const isDetailsOpen = useShipmentTableStore.use.isDetailsOpen()
    const toggleDetails = useShipmentTableStore.use.toggleDetails()
    const selectShipmentOrder = useShipmentTableStore.use.selectShipmentOrder()
    const selectShipmentOrderForMenu = useShipmentTableStore.use.selectShipmentOrderForMenu()
    const setDocumenters = useShipmentTableStore.use.setDocumenters()
    //Filters    
    const setSelectedTabKey = useShipmentTableStore.use.setSelectedTabKey()
    const selectedTabKey = useShipmentTableStore.use.selectedTabKey() as string
    const filterShipper = useShipmentTableStore.use.filterShipper()
    const filterEcommercePlatform = useShipmentTableStore.use.filterEcommercePlatform()
    const filterDocumenter = useShipmentTableStore.use.filterDocumenter()
    const filterWord = useShipmentTableStore.use.filterWord()
    //Pagination
    const setPage = useShipmentTableStore.use.setPage()
    const start = useShipmentTableStore.use.start()
    const setStart = useShipmentTableStore.use.setStart()
    const rowsPerPage = useShipmentTableStore.use.rowsPerPage()
    //Modals
    const toggleViewPDFModal = useShipmentTableStore.use.toggleDetailsPDFModal()
    const toggleViewLabelPDFModal = useShipmentTableStore.use.toggleLabelPDFModal()
    //Fetch shipments
    useEffect(() => {
        callShipmentsApi()
    }, [filterShipper, filterEcommercePlatform,filterDocumenter, selectedTabKey, rowsPerPage, start])
    //Separate useEffect for debounce
    const debounceDelay = 200;
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            callShipmentsApi();
        }, debounceDelay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [filterWord])

    //Save documenters in global store
    useEffect(()=>{
        const mappedDocumenters = ShipmentsDocumenterMapper.fromResponse(documenters)
        setDocumenters(mappedDocumenters)
    },[documenters])
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
            console.log(error)
        }
    }

    const handleSelectionChange = (ev: Selection) => {
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
    }, [setSelectedTabKey, setPage])

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
                <Dropdown >
                    <DropdownTrigger>
                        <Button isIconOnly radius='full' size='sm' variant='light' onClick={() => {
                            selectShipmentOrderForMenu(order)
                        }}>
                            <FaEllipsisVertical size={16} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new" startContent={<FaFilePdf size={16} className='text-red-500' />}
                            onClick={() => {
                                if (order.getStatusName == "cancelada") {
                                    toast.error("Documentación cancelada");
                                    return;
                                }
                                toggleViewPDFModal(true)
                            }}
                        >Detalles PDF
                        </DropdownItem>
                        <DropdownItem key="copy" startContent={<FaFileExport size={16} className='text-green-500' />}
                            onClick={() => {
                                if (order.getStatusName == "cancelada") {
                                    toast.error("Documentación cancelada");
                                    return;
                                }
                                toggleViewLabelPDFModal(true)
                            }}
                        >Guía PDF
                        </DropdownItem>
                        <DropdownItem key="edit" startContent={<FaFileInvoiceDollar size={16} className='text-red-500' />}
                            onClick={() => {
                                if (order.getStatusName == "cancelada") {
                                    toast.error("Documentación cancelada");
                                    return;
                                }
                                const [param1, param2] = extractCFDIParams(order.buttons)
                                if (param1.length < 2 || param2.length < 2) {
                                    toast.error("No se encontró CFDI");
                                    return
                                }
                                const url = `https://documentacion.paq1.com.mx/api/v2/Facturacion/Factura/${param1}/${param2}?Tipo=1`
                                window.open(url, '_blank');
                            }}
                        >
                            CFDI PDF
                        </DropdownItem>
                        <DropdownItem key="delete" startContent={<BsFiletypeXml size={16} className='text-sky-500' />}
                            onClick={() => {
                                if (order.getStatusName == "cancelada") {
                                    toast.error("Documentación cancelada");
                                    return;
                                }
                                const [param1, param2] = extractCFDIParams(order.buttons)
                                if (param1.length < 2 || param2.length < 2) {
                                    toast.error("No se encontró CFDI");
                                    return
                                }
                                const url = `https://documentacion.paq1.com.mx/api/v2/Facturacion/Factura/${param1}/${param2}?Tipo=0`
                                window.open(url, '_blank');
                            }}
                        >
                            CFDI XML
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            ),
            isForeign: order.isForeignBranch
        }
    }) || []

    return (
        <div className='bg-zinc-100 dark:bg-zinc-950'>
            <Toaster />
            <DetailsPDFModal />
            <LabelPDFModal />
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
                        <div className='flex items-center ml-auto'>
                            <ShipmentsPopoverFilter />
                        </div>
                    </div>
                    <Table aria-label="dynamic collection table" selectionMode='single' selectionBehavior='toggle' removeWrapper
                        onSelectionChange={handleSelectionChange}
                        bottomContent={
                            shipmentsData?.data?.length && shipmentsData.data.length > 0 ? <TablePagination shipmentsData={shipmentsData} /> : ""
                        }
                    >
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={rows} emptyContent="No hay resultados que coincidan con la búsqueda">
                            {(item) => (
                                <TableRow key={item.key} className={`cursor-pointer ${item.isForeign && "bg-emerald-100 dark:bg-emerald-900"}`} >
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