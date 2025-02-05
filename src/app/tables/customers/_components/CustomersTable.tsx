"use client"
import React, { useCallback } from 'react'
import { useCustomerCatalogStore } from '@/store/tables/customer-catalog-store'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Selection } from "@heroui/table"
import { Button } from "@heroui/button"
import { FaEllipsisVertical, FaFilePdf } from 'react-icons/fa6'
import { IoPerson } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import TabFilter from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { PageTitle } from '@/components'
import { TiUserAdd } from "react-icons/ti";

import CustomerPopoverFilter from './CustomerPopoverFilter'
import { filterCustomer } from '../functions/filterCustomer'
import { Customer, CustomersMapper } from '@/models/shipments/customer.model'
import TablePagination from '@/components/pagination/TablePagination'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown"
import { FaEdit } from "react-icons/fa";
import { useSwitchPage } from '../functions/useSwitchPage'


type Props = {
    activeUsers: any
    inactiveUsers: any
}
export default function CustomersTable({ activeUsers, inactiveUsers }: Props) {
    const mappedActiveUsersResponse = CustomersMapper.fromJson(activeUsers)
    const mappedInactiveUsersResponse = CustomersMapper.fromJson(inactiveUsers)

    const allCustomers = new CustomersMapper(
        mappedActiveUsersResponse.key,
        mappedActiveUsersResponse.isError,
        mappedActiveUsersResponse.message,
        mappedActiveUsersResponse.totalRecords + mappedInactiveUsersResponse.totalRecords,
        mappedActiveUsersResponse.data.reverse().concat(mappedInactiveUsersResponse.data.reverse())
    )

    //Switch pages hook
    const {switchToAddOrEditCustomerPage} = useSwitchPage()
    //Store hooks
    const selectCustomer = useCustomerCatalogStore.use.selectCustomer()
 
    //Pagination
    const page = useCustomerCatalogStore.use.page()
    const rowsPerPage = useCustomerCatalogStore.use.rowsPerPage()
    const setPage = useCustomerCatalogStore.use.setPage()
    const setRowsPerPage = useCustomerCatalogStore.use.setRowsPerPage()
    //Filtering

    const selectedTabKey = useCustomerCatalogStore.use.selectedTabKey() as string
    const setSelectedTabKey = useCustomerCatalogStore.use.setSelectedTabKey()

    const { filterByType, filterByStatus } = filterCustomer(allCustomers.data)

    //Tab item count
    const activeCustomers = filterByType.filter((item) => item.active.toLowerCase() === "si").length
    const inActiveCustomers = filterByType.filter((item) => item.active.toLowerCase() === "cb").length


    const columns = [
        {
            key: "icon",
            label: ""
        },
        {
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

    const rows = filterByStatus.map((customer, index) => {
        return {
            key: customer.id,
            icon: <>{customer.type === "Fisica" ? <IoPerson /> : <BsBuildingsFill />}</>,
            name: <div className='max-w-96'>{customer.getFullName}</div>,
            "postal code": customer.postalCode,
            location: customer.city,
            country: customer.country,
            actions: <Dropdown >
                <DropdownTrigger >
                    <Button isIconOnly radius='full' size='sm' variant='light'                    >
                        <FaEllipsisVertical size={16} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Actions">
                    <DropdownItem key={`${customer.id}-${index} detalles`} startContent={customer.type === "Fisica" ? <IoPerson size={16}/> : <BsBuildingsFill size={16}/>}
                    >Detalles del cliente
                    </DropdownItem>
                    <DropdownItem key={`${customer.id}-${index} editar`} startContent={<FaEdit size={16} className='text-sky-500'/>}
                    >Editar cliente
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        }
    })

    //Pagination logic from nextui docs
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = rows.slice(start, end);


    const onTabChange = useCallback((key: React.Key) => {
        setSelectedTabKey(key)
        setPage(1)
    }, [setSelectedTabKey, setPage])
    return (
        <div className='bg-zinc-100 dark:bg-zinc-950'>
            <div className="flex p-2 px-4 rounded-lg">
                <PageTitle text='Clientes' />
                <Button startContent={<TiUserAdd className='text-white' />} 
                onClick={()=>{
                    selectCustomer({} as Customer)
                    switchToAddOrEditCustomerPage()
                }}
                size='sm' color='secondary' className='mt-1 ml-auto text-white'>Nuevo</Button>
            </div>
            <div className='flex p-3'>
                <div className="flex flex-col w-full bg-neutral-50 rounded-xl dark:bg-zinc-900">
                    <div className="flex px-5">
                        <TabsFilters fullWidth selectedKey={selectedTabKey} onSelectionChange={onTabChange} >
                            <TabFilter key={"si"} text="Activos" value={activeCustomers} activeColor="green" />
                            <TabFilter key={"cb"} text="Inactivos" value={inActiveCustomers} activeColor="red" />
                            <TabFilter key={"Todos"} text="Todos" value={filterByType.length} activeColor="amber" />
                        </TabsFilters>
                        <div className='flex items-center ml-auto'>
                            <CustomerPopoverFilter />
                        </div>
                    </div>
                    <Table aria-label="Tabla de clientes" removeWrapper 
                        bottomContent={
                            totalPages > 0 &&
                            <TablePagination
                                page={page}
                                rowsPerPage={rowsPerPage}
                                setRowsPerPage={setRowsPerPage}
                                setPage={setPage}
                                recordsFiltered={filterByStatus.length}
                                recordsTotal={allCustomers.totalRecords}
                            />
                        }
                    >
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={paginatedItems} emptyContent="No hay resultados que coincidan con la búsqueda">
                            {
                                (item) => (
                                    <TableRow key={item.key} className='cursor-pointer' >
                                        {(columnKey) =>
                                            <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>

    )
}

