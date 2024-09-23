"use client"
import React from 'react'
import { useShipmentTableStore } from '@/store/tables/shipment-table-store'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table"
import { Button } from '@nextui-org/button'
import { FaEye, } from 'react-icons/fa6'
import type { ShipmentOrder } from "@/types/shipment-order.type"


import { IconEcommerce, PageTitle, ShipperType } from '@/components'
import OsStatus from '@/components/data-display/onsite/OsStatus'
import TabFilter from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { FaFilter } from "react-icons/fa";
import ShipmentDetails from './_components/ShipmentDetails'

const dataMock: ShipmentOrder[] = [
  {
    ecommercePlatform: "onsite",
    orderId: 1218,
    date: "20/05/2024",
    customer: "Ricardo Montreal",
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
    customer: "Ana Lopez",
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
      { title: "Puma Future Rider", subTitle: "tenis 27cm", dimensions: "30x14x10-0.8kg", quantity: 1 },]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1221,
    date: "23/05/2024",
    customer: "Carlos Perez",
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
    customer: "Sofia Martinez",
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
    customer: "Luis Fernandez",
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
  },
  {
    ecommercePlatform: "shopify",
    orderId: 1224,
    date: "26/05/2024",
    customer: "Maria Rodriguez",
    origin: "Queretaro",
    destination: "Merida",
    cost: 450.00,
    status: "en tránsito",
    shipper: "dhl",
    shipmentItems: [
      { title: "Canon EOS Rebel", subTitle: "cámara", dimensions: "20x15x10-0.8kg", quantity: 1 },
      { title: "Nikon D5600", subTitle: "cámara", dimensions: "22x18x12-1.0kg", quantity: 1 },
      { title: "Sony Alpha a6400", subTitle: "cámara", dimensions: "20x12x8-0.6kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "onsite",
    orderId: 1225,
    date: "27/05/2024",
    customer: "Juan Garcia",
    origin: "San Luis Potosi",
    destination: "Chihuahua",
    cost: 279.99,
    status: "entregado",
    shipper: "fedex",
    shipmentItems: [
      { title: "Xbox Series X", subTitle: "consola", dimensions: "30x20x15-2.5kg", quantity: 1 },
      { title: "PlayStation 5", subTitle: "consola", dimensions: "32x22x16-2.8kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1226,
    date: "28/05/2024",
    customer: "Ana Torres",
    origin: "Hermosillo",
    destination: "Oaxaca",
    cost: 599.99,
    status: "en sitio",
    shipper: "ups",
    shipmentItems: [
      { title: "LG 4K TV", subTitle: "televisor 55'", dimensions: "120x80x30-15kg", quantity: 1 },
      { title: "Samsung QLED TV", subTitle: "televisor 50'", dimensions: "110x70x25-12kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1227,
    date: "29/05/2024",
    customer: "Pedro Lopez",
    origin: "Ciudad Juarez",
    destination: "Tampico",
    cost: 199.99,
    status: "cancelado",
    shipper: "dhl",
    shipmentItems: [
      { title: "HP Pavilion Gaming", subTitle: "laptop", dimensions: "35x25x5-2.0kg", quantity: 1 },
      { title: "Dell Inspiron", subTitle: "laptop", dimensions: "33x23x4-1.8kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "shopify",
    orderId: 1228,
    date: "30/05/2024",
    customer: "Sofia Gomez",
    origin: "Torreon",
    destination: "Villahermosa",
    cost: 399.99,
    status: "en tránsito",
    shipper: "ups",
    shipmentItems: [
      { title: "Fender Stratocaster", subTitle: "guitarra", dimensions: "40x15x5-3.5kg", quantity: 1 },
      { title: "Gibson Les Paul", subTitle: "guitarra", dimensions: "42x17x6-4.0kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "prestashop",
    orderId: 1229,
    date: "31/05/2024",
    customer: "Carlos Hernandez",
    origin: "Mexicali",
    destination: "Durango",
    cost: 525.00,
    status: "entregado",
    shipper: "dhl",
    shipmentItems: [
      { title: "Apple MacBook Air", subTitle: "laptop", dimensions: "30x20x5-1.5kg", quantity: 1 },
      { title: "Dell Monitor", subTitle: "pantalla 24'", dimensions: "50x30x10-5kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "jumpseller",
    orderId: 1230,
    date: "01/06/2024",
    customer: "Maria Sanchez",
    origin: "Culiacan",
    destination: "Cozumel",
    cost: 299.99,
    status: "en tránsito",
    shipper: "fedex",
    shipmentItems: [
      { title: "Nike Running Shoes", subTitle: "zapatillas", dimensions: "25x15x10-1kg", quantity: 2 },
      { title: "Adidas Soccer Ball", subTitle: "pelota", dimensions: "20x20x10-0.5kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "onsite",
    orderId: 1231,
    date: "02/06/2024",
    customer: "Juan Martinez",
    origin: "Guadalajara",
    destination: "Puebla",
    cost: 649.99,
    status: "en sitio",
    shipper: "paquetexpress",
    shipmentItems: [
      { title: "Sony Soundbar", subTitle: "barra de sonido", dimensions: "90x20x15-10kg", quantity: 1 },
      { title: "LG Smart Speaker", subTitle: "altavoz inteligente", dimensions: "20x15x10-2kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "onsite",
    orderId: 1232,
    date: "03/06/2024",
    customer: "Ana Garcia",
    origin: "Monterrey",
    destination: "Tijuana",
    cost: 399.99,
    status: "entregado",
    shipper: "paquetexpress",
    shipmentItems: [
      { title: "HP Printer", subTitle: "impresora", dimensions: "40x30x20-5kg", quantity: 1 },
      { title: "Epson Scanner", subTitle: "escáner", dimensions: "30x20x10-2kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "woocommerce",
    orderId: 1233,
    date: "04/06/2024",
    customer: "Pedro Lopez",
    origin: "Queretaro",
    destination: "San Luis Potosi",
    cost: 225.00,
    status: "cancelado",
    shipper: "pkt1",
    shipmentItems: [
      { title: "Xiaomi Smartwatch", subTitle: "reloj inteligente", dimensions: "10x5x2-0.1kg", quantity: 2 },
      { title: "Samsung Wireless Earbuds", subTitle: "auriculares", dimensions: "5x5x2-0.1kg", quantity: 1 },
    ]
  },
  {
    ecommercePlatform: "shopify",
    orderId: 1234,
    date: "05/06/2024",
    customer: "Sofia Rodriguez",
    origin: "León",
    destination: "Hermosillo",
    cost: 499.99,
    status: "en tránsito",
    shipper: "ups",
    shipmentItems: [
      { title: "Gopro Camera", subTitle: "cámara", dimensions: "10x5x5-0.2kg", quantity: 1 },
      { title: "DJI Drone", subTitle: "dron", dimensions: "30x20x15-1.5kg", quantity: 1 },
    ]
  },
];

export default function Page() {
  const isDetailsOpen = useShipmentTableStore.use.isDetailsOpen()
  const toggleDetails = useShipmentTableStore.use.toggleDetails()
  const selectedShipmentOrder = useShipmentTableStore.use.selectedShipmentOrder()
  const selectShipmentOrder = useShipmentTableStore.use.selectShipmentOrder()
  const selectedKey = useShipmentTableStore.use.selectedTabKey() as string
  const setSelectedKey = useShipmentTableStore.use.setSelectedTabKey()

  return (
    <div className='bg-zinc-100 dark:bg-zinc-950'>
      <div className='ml-5'>
        <PageTitle text='Envíos' />
      </div>
      <div className='flex p-3'>
        <div className="flex flex-col w-full bg-white rounded-xl dark:bg-zinc-900">
          <div className="flex px-5">
            <TabsFilters fullWidth selectedKey={selectedKey} onSelectionChange={setSelectedKey} >
              <TabFilter key={1} text="Todos" value="200" activeColor="green" />
              <TabFilter key={2} text="En sitio y transito" value="50" activeColor="amber" />
              <TabFilter key={3} text="En sitio" value="25" activeColor="amber" />
              <TabFilter key={4} text="En transito" value="25" activeColor="blue" />
              <TabFilter key={5} text="Entregado" value="10" activeColor="green" />
              <TabFilter key={6} text="Cancelado" value="2" activeColor="red" />
            </TabsFilters>
            <div className='flex items-center ml-auto'>
              <Button isIconOnly variant="light" radius='full' size='sm'><FaFilter size={16} /></Button>
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
                  <TableCell className='flex gap-2 items-center'>
                    <div className='p-1 rounded-xl bg-default-200'>
                      <IconEcommerce className='w-8 h-8' ecommerce={row.ecommercePlatform} />
                    </div>
                    <span>#{row.orderId}</span>
                  </TableCell>
                  <TableCell >{row.date}</TableCell>
                  <TableCell>{row.customer}</TableCell>
                  <TableCell>{row.origin} - {row.destination}</TableCell>
                  <TableCell>${row.cost.toFixed(2)}</TableCell>
                  <TableCell><OsStatus status={row.status} /></TableCell>
                  <TableCell><ShipperType shipper={row.shipper} /></TableCell>
                  <TableCell>
                    <Button isIconOnly radius='full' size='sm' variant='light'
                      onPress={() => {
                        selectShipmentOrder(row)
                        toggleDetails(true)
                      }}
                    >
                      <FaEye size={16} className='text-blue-500' />
                    </Button>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </div>
        {isDetailsOpen && <ShipmentDetails />}
      </div>
    </div>

  )
}