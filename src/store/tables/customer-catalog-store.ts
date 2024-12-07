import { create } from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { Customer, } from "@/models/shipments/customer.model"
import { LocationItem } from "@/models/shipments/locationService.model"
type State = {
    selectedCustomer: Customer
    selectedTabKey: Key
    //Filter
    filterWord: string
    filterCountry: string
    filterCustomerType: string
    //Pagination
    page: number,
    rowsPerPage: number
    //Pages    
    isCustomerTablePageOpen: boolean
    isAddOrEditCustomerPageOpen: boolean
    isCustomerDetailsPageOpen: boolean
    //Inputs
    selectedLocation: LocationItem
}

type Actions = {
    selectCustomer: (customer: Customer) => void
    setSelectedTabKey: (key: Key) => void
    setFilterWord: (word: string) => void
    setFilterCountry: (country: string) => void
    setFilterCustomerType: (type: string) => void
    setPage: (page: number) => void
    setRowsPerPage: (rowsPerPage: number) => void
    //Pages
    toggleCustomerCatalogTablePage: (isOpen: boolean) => void
    toggleAddOrEditCustomerPage: (isOpen: boolean) => void
    toggleCustomerDetailsPage: (isOpen: boolean) => void
    //Inputs
    setSelectedLocation: (location: LocationItem) => void
}

const CustomerTableStore = create<State & Actions>((set) => ({
    selectedCustomer: {} as Customer,
    selectedTabKey: "Todos",
    filterWord: "",
    filterCountry: "Todos",
    filterCustomerType: "Todos",
    page: 1,
    rowsPerPage: 10,
    isCustomerTablePageOpen: true,
    isAddOrEditCustomerPageOpen: false,
    isCustomerDetailsPageOpen: false,
    selectedLocation: {} as LocationItem,
    selectCustomer: (customer: Customer) => set({ selectedCustomer: customer }),
    setSelectedTabKey: (key: Key) => set({ selectedTabKey: key }),
    setFilterWord: (word: string) => set({ filterWord: word }),
    setFilterCountry: (country: string) => set({ filterCountry: country }),
    setFilterCustomerType: (type: string) => set({ filterCustomerType: type }),
    setPage: (page: number) => set({ page: page }),
    setRowsPerPage: (rowsPerPage: number) => set({ rowsPerPage: rowsPerPage }),
    toggleCustomerCatalogTablePage: (isOpen: boolean) => set({ isCustomerTablePageOpen: isOpen }),
    toggleAddOrEditCustomerPage: (isOpen: boolean) => set({ isAddOrEditCustomerPageOpen: isOpen }),
    toggleCustomerDetailsPage: (isOpen: boolean) => set({ isCustomerDetailsPageOpen: isOpen }),
    setSelectedLocation: (location: LocationItem) => set({ selectedLocation: location }),
}))


export const useCustomerCatalogStore = createSelectors(CustomerTableStore);