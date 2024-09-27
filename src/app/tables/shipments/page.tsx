"use client"
import React, { useCallback } from 'react'
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

export default function Page() {
  const isDetailsOpen = useShipmentTableStore.use.isDetailsOpen()
  const toggleDetails = useShipmentTableStore.use.toggleDetails()
  const selectShipmentOrder = useShipmentTableStore.use.selectShipmentOrder()
  const setSelectedTabKey = useShipmentTableStore.use.setSelectedTabKey()
  const selectedTabKey = useShipmentTableStore.use.selectedTabKey() as string
  //Pagination
  const page = useShipmentTableStore.use.page()
  const setPage = useShipmentTableStore.use.setPage()
  const rowsPerPage = useShipmentTableStore.use.rowsPerPage()
  const setRowsPerPage = useShipmentTableStore.use.setRowsPerPage()
  //Filtering
  const { filterByFilterWord, filterByStatus } = filterShipments(dataMock)
  //Item count
  const itemsOnSite = filterByFilterWord.filter((item) => item.status === "en sitio").length
  const itemsInTransit = filterByFilterWord.filter((item) => item.status === "en tránsito").length
  const itemsDelivered = filterByFilterWord.filter((item) => item.status === "entregado").length
  const itemsCancelled = filterByFilterWord.filter((item) => item.status === "cancelado").length

  const handleSelectionChange = (ev: Selection) => {
    const orderId = Array.from(ev)[0]
    const shipmentOrder = filterByStatus.find((item) => item.orderId.toString() === orderId)
    if (shipmentOrder) {
      selectShipmentOrder(shipmentOrder)
      toggleDetails(true)
    } else {
      toggleDetails(false)
    }
  }
  const formatter = new DateFormatter('es-MX', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const columns = [{
    key: "orden",
    label: "Orden"
  },
  {
    key: "fecha",
    label: "Fecha"
  },
  {
    key: "cliente",
    label: "Cliente"
  },
  {
    key: "origen-destino",
    label: "Origen - Destino"
  },
  {
    key: "costo",
    label: "Costo"
  },
  {
    key: "estatus",
    label: "Estatus"
  },
  {
    key: "alianza",
    label: "Alianza"
  },
  {
    key: "acciones",
    label: "Acciones"
  },
  ]
  const rows = filterByStatus.map((order) => {
    return {
      key: order.orderId,
      orden: <div className="flex gap-2 items-center">
        <div className="rounded-xl bg-default-200">
          <IconEcommerce className="w-8 h-8" ecommerce={order.ecommercePlatform} />
        </div>
        <span>#{order.orderId}</span>
      </div>,
      fecha: formatter.format(new Date(order.date)),
      cliente: order.customer,
      "origen-destino": `${order.origin} - ${order.destination}`,
      costo: `$${order.cost.toFixed(2)}`,
      estatus: <OsStatus status={order.status} />,
      alianza: <ShipperType shipper={order.shipper} />,
      acciones: <Button isIconOnly radius="full" size="sm" variant="light">
        <FaEllipsisVertical size={16} className="text-zinc-500" />
      </Button>
    }
  })
  //Pagination logic from nextui docs
  const pages = Math.ceil(rows.length / rowsPerPage);
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedItems = rows.slice(start, end);

  const onRowsPerPageChange = useCallback((val: SharedSelection) => {
   if(val.currentKey) setRowsPerPage(Number(val.currentKey));
    setPage(1);
  }, [setPage, setRowsPerPage]);

  const onTabChange = useCallback((key: React.Key) => {
    setSelectedTabKey(key)
    setPage(1)
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
              <TabFilter key={"Todos"} text="Todos" value={filterByFilterWord.length} activeColor="green" />
              <TabFilter key={"En sitio"} text="En sitio" value={itemsOnSite} activeColor="amber" />
              <TabFilter key={"En tránsito"} text="En transito" value={itemsInTransit} activeColor="blue" />
              <TabFilter key={"Entregado"} text="Entregado" value={itemsDelivered} activeColor="green" />
              <TabFilter key={"Cancelado"} text="Cancelado" value={itemsCancelled} activeColor="red" />
            </TabsFilters>
            <div className='flex items-center ml-auto'>
              <PopoverFilter />
            </div>
          </div>
          <Table aria-label="dynamic collection table" selectionMode='single' selectionBehavior='toggle' removeWrapper
            onSelectionChange={handleSelectionChange}
            bottomContent={
              pages > 0 && <div className="flex w-full justify-center gap-2">
                <div className="flex items-center gap-2">
                  <label className="flex items-center text-default-400 text-small text-nowrap">
                    Filas por página:
                  </label>
                  <Select
                  selectionMode='single'
                  disallowEmptySelection
                  aria-label='filas por página'
                    size='sm'
                    className="bg-transparent outline-none text-default-400 text-small w-20"
                    value={rowsPerPage}
                    defaultSelectedKeys={["2"]}
                    onSelectionChange={(e)=>onRowsPerPageChange(e)}
                  >
                    <SelectItem key={2} value="2">2</SelectItem>
                    <SelectItem key={4} value="4">4</SelectItem>
                    <SelectItem key={5} value="5">5</SelectItem>
                  </Select>
                </div>
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={(page) => { page > 0 ? setPage(page) : setPage(1) }}
                />
              </div>
            }
          >
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={paginatedItems} emptyContent="No hay resultados que coincidan con la búsqueda">
              {(item) => (
                <TableRow key={item.key} className='cursor-pointer' >
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