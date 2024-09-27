"use client"
import React from 'react'
import { useCustomerTableStore } from '@/store/tables/customer-table-store'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Selection } from "@nextui-org/table"
import { Button } from '@nextui-org/button'
import { FaEllipsisVertical } from 'react-icons/fa6'
import type { Customer } from "@/types/customer.type"
import { IoPerson } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import TabFilter from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { PageTitle } from '@/components'
import { TiUserAdd } from "react-icons/ti";
import CustomerDetails from './_components/CustomerDetails'
import PopoverFilter from './_components/PopoverFilter'
import { filterCustomer } from './functions/filterCustomer'
const dataMock: Customer[] = [
    {
        id: "173826",
        type: "company",
        name: "Armonía Seguros Y Finanzas",
        postalCode: "81110",
        location: "Zapopan Jalisco",
        country: "Mx",
        status: "active",
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
        status: "inactive",
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
        country: "Cl",
        status: "active",
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
        status: "active",
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
        country: "Cl",
        status: "active",
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
        status: "inactive",
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
        status: "active",
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
    {
        id: "173871",
        type: "person",
        name: "Ana Isabel López Hernández",
        postalCode: "91010",
        location: "Puebla Puebla",
        country: "Cl",
        status: "inactive",
        addressList: [
            {
                address: "Calle 3 Sur #1456",
                postalCode: "91010",
                location: "Puebla Puebla",
                country: "Mx"
            },
            {
                address: "Avenida Héroes del 47 #2345",
                postalCode: "91100",
                location: "Cholula Puebla",
                country: "Mx"
            },
        ]
    },
    {
        id: "173872",
        type: "company",
        name: "Servicios de Carga y Logística del Centro",
        postalCode: "92000",
        location: "Querétaro Querétaro",
        country: "Mx",
        status: "active",
        addressList: [
            {
                address: "Avenida 5 de Febrero #678",
                postalCode: "92000",
                location: "Querétaro Querétaro",
                country: "Mx"
            },
            {
                address: "Calle Ignacio Zaragoza #890",
                postalCode: "92100",
                location: "San Juan del Río Querétaro",
                country: "Mx"
            },
        ]
    },
    {
        id: "173873",
        type: "person",
        name: "Carlos Alberto Gómez Gómez",
        postalCode: "93010",
        location: "Aguascalientes Aguascalientes",
        country: "Mx",
        status: "active",
        addressList: [
            {
                address: "Calle Morelos #1234",
                postalCode: "93010",
                location: "Aguascalientes Aguascalientes",
                country: "Mx"
            },
            {
                address: "Avenida Adolfo López Mateos #4567",
                postalCode: "93100",
                location: "Rincón de Romos Aguascalientes",
                country: "Mx"
            },
        ]
    },
    {
        id: "173874",
        type: "company",
        name: "Distribuidores de Materiales de Construcción del Norte",
        postalCode: "94000",
        location: "Saltillo Coahuila",
        country: "Cl",
        status: "active",
        addressList: [
            {
                address: "Avenida Venustiano Carranza #9012",
                postalCode: "94000",
                location: "Saltillo Coahuila",
                country: "Mx"
            },
            {
                address: "Calle Allende #3456",
                postalCode: "94100",
                location: "Piedras Negras Coahuila",
                country: "Mx"
            },
        ]
    },
    {
        id: "173875",
        type: "person",
        name: "Martha Elena Morales Morales",
        postalCode: "95010",
        location: "Durango Durango",
        country: "Mx",
        status: "active",
        addressList: [
            {
                address: "Calle 20 de Noviembre #7890",
                postalCode: "95010",
                location: "Durango Durango",
                country: "Mx"
            },
            {
                address: "Avenida Guadalupe Victoria #1234",
                postalCode: "95100",
                location: "Santiago Papasquiaro Durango",
                country: "Mx"
            },
        ]
    },
    {
        id: "173876",
        type: "company",
        name: "Servicios de Consultoría y Asesoría del Sur",
        postalCode: "96000",
        location: "Oaxaca Oaxaca",
        country: "Mx",
        status: "inactive",
        addressList: [
            {
                address: "Avenida Juárez #4567",
                postalCode: "96000",
                location: "Oaxaca Oaxaca",
                country: "Mx"
            },
            {
                address: "Calle Ignacio Zaragoza #8901",
                postalCode: "96100",
                location: "Tehuantepec Oaxaca",
                country: "Mx"
            },
        ]
    },

]
export default function Page() {
    const isDetailsOpen = useCustomerTableStore.use.isDetailsOpen()
    const toggleDetails = useCustomerTableStore.use.toggleDetails()
    const selectCustomer = useCustomerTableStore.use.selectCustomer()
    const selectedTabKey = useCustomerTableStore.use.selectedTabKey() as string
    const setSelectedTabKey = useCustomerTableStore.use.setSelectedTabKey()

    const { filterByType, filterByStatus } = filterCustomer(dataMock)

    //Tab item count
    const activeCustomers = filterByType.filter((item) => item.status === "active").length
    const inActiveCustomers = filterByType.filter((item) => item.status === "inactive").length

    const handleSelectionChange = (ev: Selection) => {
        const orderId = Array.from(ev)[0]
        const customer = filterByStatus.find((item) => item.id.toString() === orderId)
        if (customer) {
            selectCustomer(customer)
            toggleDetails(true)
        } else {
            toggleDetails(false)
        }
    }

    const columns = [{
        key: "name",
        label: "Nombre"
    },
    {
        key: "postal code",
        label: "Código Postal"
    },
    {
        key: "location",
        label: "Ubicación"
    },
    {
        key: "country",
        label: "País"
    },
    {
        key: "actions",
        label: "Acciones"
    },
    ]
    const rows = filterByStatus.map((item) => {
        return {
            key: item.id,
            name: <div className='flex gap-3'>{item.type === "person" ? <IoPerson /> : <BsBuildingsFill />}{item.name}</div>,
            "postal code": item.postalCode,
            location: item.location,
            country: item.country,
            actions: <Button isIconOnly radius='full' size='sm' variant='light' >
                <FaEllipsisVertical size={16} className='text-slate-500' />
            </Button>
        }
    })

    return (
        <div className='bg-zinc-100 dark:bg-zinc-950'>
            <div className="flex p-2 px-4 rounded-lg">
                <PageTitle text='Clientes' />
                <Button startContent={<TiUserAdd className='text-white' />} size='sm' color='secondary' className='mt-1 ml-auto text-white'>Nuevo</Button>
            </div>
            <div className='flex p-3'>
                <div className="flex flex-col w-full bg-neutral-50 rounded-xl dark:bg-zinc-900">
                    <div className="flex px-5">
                        <TabsFilters fullWidth selectedKey={selectedTabKey} onSelectionChange={setSelectedTabKey} >
                            <TabFilter key={"Todos"} text="Todos" value={filterByType.length} activeColor="amber" />
                            <TabFilter key={"active"} text="Activos" value={activeCustomers} activeColor="green" />
                            <TabFilter key={"inactive"} text="Inactivos" value={inActiveCustomers} activeColor="red" />
                        </TabsFilters>
                        <div className='flex items-center ml-auto'>
                            <PopoverFilter />
                        </div>
                    </div>
                    <Table aria-label="Tabla de clientes" selectionMode='single' selectionBehavior='toggle' removeWrapper
                        onSelectionChange={handleSelectionChange}
                    >
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={rows}>
                            {
                                filterByType.length === 0 ?
                                    <TableRow>
                                        <TableCell colSpan={2}>No hay resultados que coincidan con la búsqueda</TableCell>
                                        <TableCell> </TableCell>
                                        <TableCell> </TableCell>
                                        <TableCell> </TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow >
                                    : (item) => (
                                        <TableRow key={item.key} className='cursor-pointer' >
                                            {(columnKey) =>
                                                <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                        </TableRow>
                                    )
                            }
                        </TableBody>
                    </Table>
                </div>
                <div>
                    {isDetailsOpen && <CustomerDetails />}
                </div>
            </div>
        </div>

    )
}

