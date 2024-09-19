"use client"
import React from 'react'
import { useClientTableStore } from '@/store/tables/clients-table-store'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table"
import { Button } from '@nextui-org/button'
import { FaEye } from 'react-icons/fa6'
import type { Client } from "@/types/client.type"
import { IoPerson } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { Card } from '@nextui-org/card'
import { RxCross2 } from "react-icons/rx";
import TabFilter from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { FaFilter } from "react-icons/fa";
import AddressCard from '@/components/surfaces/cards/desktop/AddressCard'
const dataMock1: Client[] = [
    {
        id: "173826",
        type: "company",
        name: "Armonía Seguros Y Finanzas",
        postalCode: "81110",
        location: "Zapopan Jalisco",
        country: "Mx",
        addressList: [
            {
                address: "Allende #14 Centro",
                postalCode: "81200",
                location: "Los Mochis Sinaloa",
                country: "Mx"
            },
            {
                address: "Principal #2811, Ciudad Mante Centro",
                postalCode: "89200",
                location: "Ciudad Mante Tamaulipas",
                country: "Mx"
            },
            {
                address: "Avenida Universidad #123",
                postalCode: "83100",
                location: "Chihuahua Chihuahua",
                country: "Mx"
            },
            {
                address: "Calle 16 de Septiembre #456",
                postalCode: "83200",
                location: "Ciudad Juárez Chihuahua",
                country: "Mx"
            },
        ]
    },
    {
        id: "173866",
        type: "person",
        name: "Juan Manuel Rosas Rosas",
        postalCode: "82210",
        location: "Hermosillo Sonora",
        country: "Mx",
        addressList: [
            {
                address: "Juarez Sur #1550",
                postalCode: "81200",
                location: "Hermosillo Sonora",
                country: "Mx"
            },
            {
                address: "Tapiki Dopiki",
                postalCode: "71200",
                location: "Ciudad Tapiki Sur",
                country: "Mx"
            },
        ]
    },
    {
        id: "173827",
        type: "company",
        name: "Servicios Financieros del Norte",
        postalCode: "83100",
        location: "Chihuahua Chihuahua",
        country: "Mx",
        addressList: [
            {
                address: "Avenida Universidad #123",
                postalCode: "83100",
                location: "Chihuahua Chihuahua",
                country: "Mx"
            },
            {
                address: "Calle 16 de Septiembre #456",
                postalCode: "83200",
                location: "Ciudad Juárez Chihuahua",
                country: "Mx"
            },
        ]
    },
    {
        id: "173867",
        type: "person",
        name: "María del Carmen Hernández García",
        postalCode: "84010",
        location: "Culiacán Sinaloa",
        country: "Mx",
        addressList: [
            {
                address: "Calle Lázaro Cárdenas #789",
                postalCode: "84010",
                location: "Culiacán Sinaloa",
                country: "Mx"
            },
            {
                address: "Avenida Mazatlán #345",
                postalCode: "84100",
                location: "Mazatlán Sinaloa",
                country: "Mx"
            },
        ]
    },
    {
        id: "173868",
        type: "company",
        name: "Distribuidores de Electrónicos del Sur",
        postalCode: "86000",
        location: "Villahermosa Tabasco",
        country: "Mx",
        addressList: [
            {
                address: "Avenida de los Ríos #901",
                postalCode: "86000",
                location: "Villahermosa Tabasco",
                country: "Mx"
            },
            {
                address: "Calle 5 de Febrero #234",
                postalCode: "86100",
                location: "Comalcalco Tabasco",
                country: "Mx"
            },
        ]
    },
    {
        id: "173869",
        type: "person",
        name: "Jorge Luis Martínez Martínez",
        postalCode: "87010",
        location: "Tuxtla Gutiérrez Chiapas",
        country: "Mx",
        addressList: [
            {
                address: "Calle Central #567",
                postalCode: "87010",
                location: "Tuxtla Gutiérrez Chiapas",
                country: "Mx"
            },
            {
                address: "Avenida del Sol #890",
                postalCode: "87100",
                location: "San Cristóbal de las Casas Chiapas",
                country: "Mx"
            },
        ]
    },
    {
        id: "173870",
        type: "company",
        name: "Constructora y Edificadora del Golfo",
        postalCode: "88000",
        location: "Veracruz Veracruz",
        country: "Mx",
        addressList: [
            {
                address: "Avenida de la Independencia #1234",
                postalCode: "88000",
                location: "Veracruz Veracruz",
                country: "Mx"
            },
            {
                address: "Calle Francisco I. Madero #567",
                postalCode: "88100",
                location: "Xalapa Veracruz",
                country: "Mx"
            },
        ]
    },
]
const dataMock = dataMock1.concat(dataMock1).concat(dataMock1).concat(dataMock1).concat(dataMock1).concat(dataMock1).concat(dataMock1)
export default function Page() {
    const isDetailsOpen = useClientTableStore.use.isDetailsOpen()
    const toggleDetails = useClientTableStore.use.toggleDetails()
    const selectedClient = useClientTableStore.use.selectedClient()
    const selectClient = useClientTableStore.use.selectClient()
    const selectedKey = useClientTableStore.use.selectedTabKey() as string
    const setSelectedKey = useClientTableStore.use.setSelectedTabKey()

    return (
        <div className='flex'>
            <div className="flex flex-col w-full">
                <div className="flex px-5">
                    <TabsFilters fullWidth selectedKey={selectedKey} onSelectionChange={setSelectedKey} >
                        <TabFilter key={1} text="Todos" value="1080" activeColor="amber" />
                        <TabFilter key={2} text="Activos" value="100" activeColor="green" />
                        <TabFilter key={3} text="Eliminados" value="80" activeColor="red" />
                    </TabsFilters>
                    <div className='ml-auto'>
                        <Button isIconOnly variant="light" radius='full' size='sm'><FaFilter size={18} /></Button>
                    </div>
                </div>
                <Table aria-label="Tabla de clientes" >
                    <TableHeader>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Código Postal</TableColumn>
                        <TableColumn>Ubicación</TableColumn>
                        <TableColumn>País</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {dataMock.map((row, index) =>
                            <TableRow key={`${row.id} - ${index}`}>
                                <TableCell className='flex gap-3'>
                                    {row.type === "person" ? <IoPerson /> : <BsBuildingsFill />}{row.name}
                                </TableCell>
                                <TableCell>{row.postalCode} </TableCell>
                                <TableCell>{row.location} </TableCell>
                                <TableCell>{row.country} </TableCell>
                                <TableCell>
                                    <Button isIconOnly radius='full' size='sm' variant='light'
                                        onPress={() => {
                                            selectClient(row)
                                            toggleDetails(true)
                                        }}
                                    >
                                        <FaEye size={18} className='text-blue-500' />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )}
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
                    <p className='font-semibold pt-2 px-2'>ID: {selectedClient.id}</p>
                    <p className='font-medium text-sm px-3'>Direcciones: {selectedClient.addressList.length}</p>
                    <div className="flex flex-col w-full p-1 gap-2 scrollbar-hide overflow-y-scroll sticky">
                        {selectedClient?.addressList?.map((item, index) =>
                            <AddressCard
                                key={`${item.address} - ${index}`}
                                address={item.address}
                                location={item.location}
                                country={item.country}
                                postalCode={item.postalCode}
                            />
                        )}
                    </div>
                </Card>}
        </div>

    )
}