"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { useShipmentListStore } from '@/store/tables/shipment-list-store'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Selection, getKeyValue, } from "@heroui/table"
import { IconEcommerce, PageTitle, ShipperType, } from '@/components'
import TabFilter from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import ShipmentDetails from './ShipmentDetails'
import ShipmentsPopoverFilter from './ShipmentsPopoverFilter'
import OsStatus from '@/components/data-display/onsite/OsStatus'
import { Button } from "@heroui/button"
import { FaEllipsisVertical, FaFilePdf } from 'react-icons/fa6'
import { ShipmentsMapper } from '@/models/shipments/shipments.model';
import { EcommercePlatforms, ShipmentStatus, Shippers } from '@/types';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import TablePagination from '../../../../components/pagination/TablePagination';
import DetailsPDFModal from './DetailsPDFModal'
import { FaFileExport, FaLocationDot, FaFileContract } from "react-icons/fa6";
import LabelPDFModal from './LabelPDFModal'
import toast, { Toaster } from 'react-hot-toast';
import { BsFiletypeXml } from "react-icons/bs";
import { ShipmentsDocumenterMapper } from '@/models/shipments/shipmentsDocumenter.model'
import { Spinner } from "@heroui/spinner";
import PaqueteExpressMap from './PaqueteExpressMap'
import { TbTruckDelivery } from 'react-icons/tb'
import DeliveryDetailsModal from './DeliveryDetailsModal'
import { IoFootstepsSharp } from 'react-icons/io5'
import TrackingModal from './TrackingModal'
import { Input } from "@heroui/input"
import { IoIosSearch } from 'react-icons/io'
import clsx from 'clsx'
type Props = {
  documenters: any
}
export default function ShipmentsTable({ documenters }: Props) {

  const [shipmentsData, setShipmentsData] = useState<ShipmentsMapper>();
  const [isLoading, setIsLoading] = useState(false);

  //Store hooks
  const isDetailsOpen = useShipmentListStore.use.isDetailsOpen()
  const toggleDetails = useShipmentListStore.use.toggleDetails()
  const selectShipmentOrder = useShipmentListStore.use.selectShipmentOrder()
  const setDocumenters = useShipmentListStore.use.setDocumenters()
  const selectedTableKey = useShipmentListStore.use.selectedTableKey()
  const setSelectedTableKey = useShipmentListStore.use.setSelectedTableKey()
  //Filters    
  const setSelectedTabKey = useShipmentListStore.use.setSelectedTabKey()
  const selectedTabKey = useShipmentListStore.use.selectedTabKey() as string
  const filterShipper = useShipmentListStore.use.filterShipper()
  const filterEcommercePlatform = useShipmentListStore.use.filterEcommercePlatform()
  const filterDocumenter = useShipmentListStore.use.filterDocumenter()
  const filterWord = useShipmentListStore.use.filterWord()
  const setFilterWord = useShipmentListStore.use.setFilterWord()
  //Pagination
  const page = useShipmentListStore.use.page()
  const setPage = useShipmentListStore.use.setPage()
  const start = useShipmentListStore.use.start()
  const setStart = useShipmentListStore.use.setStart()
  const rowsPerPage = useShipmentListStore.use.rowsPerPage()
  const setRowsPerPage = useShipmentListStore.use.setRowsPerPage()
  //Modals
  const toggleViewPDFModal = useShipmentListStore.use.toggleDetailsPDFModal()
  const toggleViewLabelPDFModal = useShipmentListStore.use.toggleLabelPDFModal()
  const togglePaquetexpressModal = useShipmentListStore.use.togglePaquetexpressMapModal()
  const toggleDeliveryDetailsModal = useShipmentListStore.use.toggleDeliveryDetailsModal()
  const toggleTrackingModal = useShipmentListStore.use.toggleTrackingModal()
  const isDetailsPDFModalOpen = useShipmentListStore.use.isDetailsPDFModalOpen()
  const isLabelPDFModalOpen = useShipmentListStore.use.isLabelPDFModalOpen()
  const isPaquetexpressMapModalOpen = useShipmentListStore.use.isPaquetexpressMapModalOpen()
  const isDeliveryDetailsModalOpen = useShipmentListStore.use.isDeliveryDetailsModalOpen()
  const isTrackingModalOpen = useShipmentListStore.use.isTrackingModalOpen()

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
    const mappedDocumenters = ShipmentsDocumenterMapper.fromJson(documenters)
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
      const mappedResponse = ShipmentsMapper.fromJson(json)
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
    if (filterWord.length > 3) {
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
              onPress={() => { toggleViewPDFModal(true) }}
            >Detalles PDF
            </DropdownItem>
            <DropdownItem key="LabelPDF" startContent={<FaFileExport size={16} className='text-green-500' />}
              onPress={() => { toggleViewLabelPDFModal(true) }}
            >Guía PDF
            </DropdownItem>
            <DropdownItem key="CFDI Traslado" startContent={<FaFileContract size={16} className='text-red-500' />}
              onPress={() => {
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
              onPress={() => {
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

            <DropdownItem key="pqtx-location" startContent={<FaLocationDot size={16} className={clsx('text-sky-500', {
              'hidden': !(order.forcedOfficeKey != "0" && order.getShipper === "paquetexpress")
            })} />}
              onPress={() => {
                togglePaquetexpressModal(true)
              }}
            >
              Ubicación Paquetexpress
            </DropdownItem>


            <DropdownItem key="delivery-details" startContent={<TbTruckDelivery size={16} className={clsx('text-amber-500', {
              'hidden': !(order.getStatusName == "entregado" && order.getShipper === "paquetexpress")
            })} />}
              onPress={() => toggleDeliveryDetailsModal(true)}
            >
              Detalles de entrega
            </DropdownItem>


            <DropdownItem key="tracking" startContent={<IoFootstepsSharp size={16} className={clsx('text-amber-500', {
              'hidden': order.getStatusName !== "entregado"
            })} />}
              onPress={() => toggleTrackingModal(true)}
            >Rastreo del envío</DropdownItem>

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