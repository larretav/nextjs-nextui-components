import {create} from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { Customer } from "@/types/customer.type"
type State ={
    isDetailsOpen: boolean
    selectedCustomer: Customer
    selectedTabKey:Key
    filterWord:string
    filterCountry:string
    filterCustomerType:string
    page:number,
    rowsPerPage:number
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectCustomer: (customer: Customer) => void
    setSelectedTabKey: (key:Key) => void
    setFilterWord: (word:string) => void
    setFilterCountry: (country:string) => void
    setFilterCustomerType: (type:string) => void
    setPage: (page: number) => void
    setRowsPerPage: (rowsPerPage: number) => void
}

const CustomerTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedCustomer: {} as Customer,
    selectedTabKey:"Todos",
    filterWord:"",
    filterCountry:"Todos",
    filterCustomerType:"Todos",
    page: 1,
    rowsPerPage: 5,
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectCustomer: (customer: Customer) => set({ selectedCustomer: customer }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
    setFilterWord: (word:string) => set({ filterWord: word }),
    setFilterCountry: (country:string) => set({ filterCountry: country }),
    setFilterCustomerType: (type:string) => set({ filterCustomerType: type }),
    setPage: (page: number) => set({ page: page }),
    setRowsPerPage: (rowsPerPage: number) => set({ rowsPerPage: rowsPerPage }),
  }))


  export const useCustomerTableStore = createSelectors(CustomerTableStore);