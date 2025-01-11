"use client"
import React from 'react'
import CustomersTable from './CustomersTable'
import { useCustomerCatalogStore } from '@/store/tables/customer-catalog-store'
import AddOrEditCustomerPage from './AddOrEditCustomerPage'
import CustomerDetailsPage from './CustomerDetailsPage'

type Props = {
    activeUsers: any
    inactiveUsers: any
}

export default function CustomerCatalogDesktop({ activeUsers, inactiveUsers }: Props) {
    const isCustomerTablePageOpen = useCustomerCatalogStore.use.isCustomerTablePageOpen()
    const isAddOrEditCustomerPageOpen = useCustomerCatalogStore.use.isAddOrEditCustomerPageOpen()
    const isCustomerDetailsPageOpen = useCustomerCatalogStore.use.isCustomerDetailsPageOpen()
    return (
        <>
            {isCustomerTablePageOpen && <CustomersTable activeUsers={activeUsers} inactiveUsers={inactiveUsers} />}
            {isAddOrEditCustomerPageOpen && <AddOrEditCustomerPage />}
            {isCustomerDetailsPageOpen && <CustomerDetailsPage />}
        </>
    )
}