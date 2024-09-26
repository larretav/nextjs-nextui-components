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
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectCustomer: (customer: Customer) => void
    setSelectedTabKey: (key:Key) => void
    setFilterWord: (word:string) => void
    setFilterCountry: (country:string) => void
    setFilterCustomerType: (type:string) => void
}

const CustomerTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedCustomer: {} as Customer,
    selectedTabKey:"Todos",
    filterWord:"",
    filterCountry:"Todos",
    filterCustomerType:"Todos",
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectCustomer: (customer: Customer) => set({ selectedCustomer: customer }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
    setFilterWord: (word:string) => set({ filterWord: word }),
    setFilterCountry: (country:string) => set({ filterCountry: country }),
    setFilterCustomerType: (type:string) => set({ filterCustomerType: type }),
  }))


  export const useCustomerTableStore = createSelectors(CustomerTableStore);