"use client"
import React from 'react'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table"
import { Button } from '@nextui-org/button'
import { FaEye } from 'react-icons/fa6'
import type { ShipmentOrder } from "@/types/shipment-order.type"
import PackageMobileCard from '@/components/surfaces/cards/mobile/PackageMobileCard'
import { Card } from '@nextui-org/card'
import { RxCross2 } from "react-icons/rx";
import { IconEcommerce, ShipperType } from '@/components'
import OsStatus from '@/components/data-display/onsite/OsStatus'
import TabFilter from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { FaFilter } from "react-icons/fa";
const dataMock1: ShipmentOrder[] = [
  {
    ecommercePlatform: "onsite",
    orderId: 1218,
    date: "20/05/2024",
    client: "Ricardo Montreal",
    origin: "Los Mochis",
    destination: "Acapulco",
    cost: 373.33,
    status: "en sitio",
    shipper: "dhl",
    shipmentItems: [
      { title: "Nike Air Force", subTitle: "tenis 28cm", dimensions: "35x0x20-1kg", quantity: 2 },
      { title: "Adidas Superstar", subTitle: "tenis 27cm", dimensions: "30x15x10-0.8kg", quantity: 2 },
    ]
  },
  {
    ecommercePlatform: "shopify",
    orderId: 1220,
    date: "22/05/2024",
    client: "Ana Lopez",
    origin: "Guadalajara",
    destination: "Cancún",
    cost: 480.75,
    status: "en tránsito",
    shipper: "fedex",
    shipmentItems: [
      { title: "Adidas Ultraboost", subTitle: "tenis 27cm", dimensions: "30x15x10-0.8kg", quantity: 2 },
      { title: "Converse Chuck Taylor", subTitle: "tenis 26cm", dimensions: "28x12x8-0.6kg", quantity: 3 },
      { title: "Vans Old Skool", subTitle: "tenis 25cm", dimensions: "26x10x6-0.4kg", quantity: 1 },
      { title: "New Balance 574", subTitle: "tenis 27cm", dimensions: "29x13x9-0.7kg", quantity: 2 },
      { title: "Reebok Classic", subTitle: "tenis 26cm", dimensions: "27x11x7-0.5kg", quantity: 1 },
      { title: "Puma Future Rider", subTitle: "tenis 27cm", dimensions: "30x14x10-0.8kg", quantity: 1 },    ]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1221,
    date: "23/05/2024",
    client: "Carlos Perez",
    origin: "Monterrey",
    destination: "CDMX",
    cost: 215.50,
    status: "en tránsito",
    shipper: "paquetexpress",
    shipmentItems: [
      { title: "Apple Watch", subTitle: "Serie 7", dimensions: "10x10x5-0.2kg", quantity: 1 },
      { title: "Samsung Galaxy Buds", subTitle: "auriculares", dimensions: "5x5x2-0.1kg", quantity: 2 },
    ]
  },
  {
    ecommercePlatform: "prestashop",
    orderId: 1222,
    date: "24/05/2024",
    client: "Sofia Martinez",
    origin: "Tijuana",
    destination: "Puebla",
    cost: 599.99,
    status: "cancelado",
    shipper: "pkt1",
    shipmentItems: [
      { title: "Samsung Galaxy S23", subTitle: "smartphone", dimensions: "20x10x5-0.3kg", quantity: 1 },
      { title: "Google Pixel 7", subTitle: "smartphone", dimensions: "19x9x4-0.2kg", quantity: 1 },
      { title: "iPhone 14", subTitle: "smartphone", dimensions: "18x8x3-0.1kg", quantity: 1 },
      { title: "Apple Watch", subTitle: "Serie 7", dimensions: "10x10x5-0.2kg", quantity: 1 },
      { title: "Samsung Galaxy Buds", subTitle: "auriculares", dimensions: "5x5x2-0.1kg", quantity: 2 },
      { title: "Google Pixel Buds", subTitle: "auriculares", dimensions: "4x4x1-0.05kg", quantity: 1 },
      { title: "Sony Wireless Earbuds", subTitle: "auriculares", dimensions: "6x6x3-0.2kg", quantity: 1 },
      { title: "JBL Reflect Flow", subTitle: "auriculares", dimensions: "7x7x4-0.3kg", quantity: 1 },
      { title: "Beats Powerbeats", subTitle: "auriculares", dimensions: "8x8x5-0.4kg", quantity: 1 },
      { title: "Sennheiser Momentum", subTitle: "auriculares", dimensions: "9x9x6-0.5kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "jumpseller",
    orderId: 1223,
    date: "25/05/2024",
    client: "Luis Fernandez",
    origin: "León",
    destination: "Veracruz",
    cost: 325.00,
    status: "entregado",
    shipper: "ups",
    shipmentItems: [
      { title: "Sony Headphones", subTitle: "WH-1000XM5", dimensions: "25x20x10-0.5kg", quantity: 2 },
      { title: "Bose SoundLink", subTitle: "altavoces", dimensions: "20x15x5-0.3kg", quantity: 1 },
      { title: "JBL Flip", subTitle: "altavoces", dimensions: "15x10x3-0.2kg", quantity: 1 },
      { title: "Samsung Galaxy S23", subTitle: "smartphone", dimensions: "20x10x5-0.3kg", quantity: 1 },
      { title: "Google Pixel 7", subTitle: "smartphone", dimensions: "19x9x4-0.2kg", quantity: 1 },
    ]
  }
];

const dataMock = dataMock1.concat(dataMock1).concat(dataMock1).concat(dataMock1).concat(dataMock1)
export default function Page() {
  const isDetailsOpen = useShipmentTableStore.use.isDetailsOpen()
  const toggleDetails = useShipmentTableStore.use.toggleDetails()
  const selectedShipmentOrder = useShipmentTableStore.use.selectedShipmentOrder()
  const selectShipmentOrder = useShipmentTableStore.use.selectShipmentOrder()
  const selectedKey = useShipmentTableStore.use.selectedTabKey() as string
  const setSelectedKey = useShipmentTableStore.use.setSelectedTabKey()
  return (
    <div className='flex'>
      <div className="flex flex-col w-full">
        <div className="flex px-5">
          <TabsFilters fullWidth selectedKey={selectedKey} onSelectionChange={setSelectedKey} >
            <TabFilter key={1} text="Todos" value="200" activeColor="green" />
            <TabFilter key={2} text="En sitio y transito" value="50" activeColor="amber" />
            <TabFilter key={3} text="En sitio" value="25" activeColor="amber" />
            <TabFilter key={4} text="En transito" value="25" activeColor="blue" />
            <TabFilter key={5} text="Entregado" value="10" activeColor="green" />
            <TabFilter key={6} text="Cancelado" value="2" activeColor="red" />
          </TabsFilters>
          <div className='ml-auto'>
            <Button  isIconOnly variant="light" radius='full' size='sm'><FaFilter size={18}/></Button>
            </div>          
        </div>
        <Table aria-label="Example static collection table" >
          <TableHeader>
            <TableColumn className='w-min' >Orden</TableColumn>
            <TableColumn>Fecha</TableColumn>
            <TableColumn>Cliente</TableColumn>
            <TableColumn>Origen - Destino</TableColumn>
            <TableColumn>Costo</TableColumn>
            <TableColumn>Estatus</TableColumn>
            <TableColumn>Alianza</TableColumn>
            <TableColumn>Acciones</TableColumn>
          </TableHeader>
          <TableBody>
            {dataMock.map((row, index) =>
              <TableRow key={`${row.orderId} ${index}`}>
                <TableCell className='flex gap-1 items-center'>
                  <div className='p-1 bg-slate-200 rounded-xl'>
                    <IconEcommerce className='w-8 h-8' ecommerce={row.ecommercePlatform} />
                  </div>
                  <span className='font-medium'>#{row.orderId}</span>
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.client}</TableCell>
                <TableCell>{row.origin} - {row.destination}</TableCell>
                <TableCell>${row.cost.toFixed(2)}</TableCell>
                <TableCell><OsStatus status={row.status} /></TableCell>
                <TableCell><ShipperType shipper={row.shipper}/></TableCell>
                <TableCell>
                  <Button isIconOnly radius='full' size='sm' variant='light'
                    onPress={() => {
                      selectShipmentOrder(row)
                      toggleDetails(true)
                    }}
                  >
                    <FaEye size={18} className='text-blue-500' />
                  </Button>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </div>
      {isDetailsOpen &&
        <Card className="flex min-w-72 flex-col p-2  mx-1 sticky top-28 max-h-96">
          <Button isIconOnly radius='full' size='sm' variant='light'
            className='absolute top-3 right-3'
            onPress={() => toggleDetails(false)}
          >
            <RxCross2 size={18} className='text-red-500' />
          </Button>
          <p className='font-semibold pt-2 px-2'>Orden #{selectedShipmentOrder.orderId}</p>
          <p className='font-medium text-sm px-3'>Paquetes: {selectedShipmentOrder.shipmentItems.length}</p>
          <div className="flex flex-col w-full p-1 gap-2 scrollbar-hide overflow-y-scroll sticky">
            {selectedShipmentOrder?.shipmentItems?.map((item, index) =>
              <PackageMobileCard key={`${item.title}-${index}`}
                leadingIcon='box'
                title={item.title}
                subtitle={item.subTitle}
                quantity={item.quantity}
                weightMeasures={item.dimensions} />
            )}
          </div>
        </Card>}
    </div>

  )
}