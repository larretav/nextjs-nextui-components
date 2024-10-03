"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Selection, getKeyValue, } from "@nextui-org/table"
import { Pagination, } from "@nextui-org/pagination";
import { IconEcommerce, PageTitle, ShipperType, } from '@/components'
import TabFilter from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import ShipmentDetails from './_components/ShipmentDetails'
import PopoverFilter from './_components/PopoverFilter'
import { filterShipments } from './functions/filterShipments'
import { DateFormatter } from '@internationalized/date'
import OsStatus from '@/components/data-display/onsite/OsStatus'
import { Button } from '@nextui-org/button'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { dataMock } from "./shipmentsDataMock"
import { Select, SelectItem } from '@nextui-org/select';
import { SharedSelection } from '@nextui-org/system';
import { ShipmentsMapper } from '@/mapper/shipmentsMapper';
import { EcommercePlatforms, ShipmentStatus, Shippers } from '@/types';
import PaginationText from '@/components/pagination/PaginationText';

export default function Page() {
    const isDetailsOpen = useShipmentTableStore.use.isDetailsOpen()
    const toggleDetails = useShipmentTableStore.use.toggleDetails()
    const selectShipmentOrder = useShipmentTableStore.use.selectShipmentOrder()
    const setSelectedTabKey = useShipmentTableStore.use.setSelectedTabKey()
    const selectedTabKey = useShipmentTableStore.use.selectedTabKey() as string
    const [shipmentsData, setShipmentsData] = React.useState<ShipmentsMapper>();
    //Filters
    const filterDate = useShipmentTableStore.use.filterDate()
    const filterShipper = useShipmentTableStore.use.filterShipper()
    const filterEcommercePlatform = useShipmentTableStore.use.filterEcommercePlatform()
    const filterWord = useShipmentTableStore.use.filterWord()
    //Pagination
    const page = useShipmentTableStore.use.page()
    const setPage = useShipmentTableStore.use.setPage()
    const start = useShipmentTableStore.use.start()
    const setStart = useShipmentTableStore.use.setStart()
    const rowsPerPage = useShipmentTableStore.use.rowsPerPage()
    const setRowsPerPage = useShipmentTableStore.use.setRowsPerPage()

    const debounceDelay = 500;
    //Fetch
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            callApi();
        }, debounceDelay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [filterShipper, filterWord, filterEcommercePlatform, selectedTabKey, rowsPerPage, start])


    async function callApi() {
        try {
            const myHeaders = new Headers({
                "Content-Type": "application/json",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InBrdDFmaGVyIiwibmJmIjoxNzI3OTA3NTgwLCJleHAiOjE3Mjc5OTM5ODAsImlhdCI6MTcyNzkwNzU4MCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDQ2OSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTA0NjkifQ.VvIsdYrnuZR8TortgbXv70889hDFqjw7JqnkRExotIA"

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
                documentador: "X",
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
    const onRowsPerPageChange = useCallback((val: SharedSelection) => {
        if (val.currentKey) setRowsPerPage(Number(val.currentKey));
        setStart(0)
        setPage(1);
    }, [setPage, setRowsPerPage]);

    const handleSelectionChange = (ev: Selection) => {
        const orderId = Array.from(ev)[0]
        const shipmentOrder = shipmentsData?.data.find((item) => item.id == orderId)
        console.log(shipmentOrder)
        if (shipmentOrder) {
            selectShipmentOrder(shipmentOrder)
            toggleDetails(true)
        } else {
            toggleDetails(false)
        }
    }

    const onPageChange = (page: number) => {
        page > 0 ? setPage(page) : setPage(1)
        const newStart = (page - 1) * rowsPerPage;
        setStart(newStart)
    }

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
            actions: <Button isIconOnly radius="full" size="sm" variant="light">
                <FaEllipsisVertical size={16} className="text-zinc-500" />
            </Button>,
            isForeign: order.isForeignBranch
        }
    }) || []


    const onTabChange = useCallback((key: React.Key) => {
        setStart(0)
        setPage(1)
        setSelectedTabKey(key)
    }, [setSelectedTabKey, setPage])

    return (
        <div className='bg-zinc-100 dark:bg-zinc-950'>
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
                            <PopoverFilter />
                        </div>
                    </div>
                    <Table aria-label="dynamic collection table" selectionMode='single' selectionBehavior='toggle' removeWrapper
                        onSelectionChange={handleSelectionChange}
                        bottomContent={
                            shipmentsData?.data?.length && shipmentsData.data.length > 0 ? <div className="flex w-full justify-center gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center text-xs  text-nowrap">
                                        Filas por página:
                                    </span>
                                    <Select
                                        selectionMode='single'
                                        disallowEmptySelection
                                        aria-label='filas por página'
                                        size='sm'
                                        className="bg-transparent outline-none text-default-400 text-small w-20"
                                        value={rowsPerPage}
                                        defaultSelectedKeys={[rowsPerPage.toString()]}
                                        onSelectionChange={(e) => onRowsPerPageChange(e)}
                                    >
                                        <SelectItem key={10} value="10">10</SelectItem>
                                        <SelectItem key={25} value="25">25</SelectItem>
                                        <SelectItem key={50} value="50">50</SelectItem>
                                        <SelectItem key={100} value="100">100</SelectItem>
                                    </Select>
                                </div>
                                <PaginationText
                                    itemsPerPage={rowsPerPage}
                                    page={page}
                                    totalItems={shipmentsData?.recordsFiltered || 0}
                                />
                                <Pagination
                                    isCompact
                                    showControls
                                    showShadow
                                    color="secondary"
                                    page={page}
                                    total={Math.ceil((shipmentsData?.recordsFiltered || 0) / rowsPerPage)}
                                    onChange={onPageChange}
                                />
                            </div> : ""
                        }
                    >
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={rows} emptyContent="No hay resultados que coincidan con la búsqueda">
                            {(item) => (
                                <TableRow key={item.key} className={`cursor-pointer ${item.isForeign ? "bg-green-300" : ""}`} >
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