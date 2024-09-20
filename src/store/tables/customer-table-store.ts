import {create} from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { Customer } from "@/types/customer.type"
type State ={
    isDetailsOpen: boolean
    selectedCustomer: Customer
    selectedTabKey:Key 
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectCustomer: (customer: Customer) => void
    setSelectedTabKey: (key:Key) => void
}

const CustomerTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedCustomer: {} as Customer,
    selectedTabKey:"",
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectCustomer: (customer: Customer) => set({ selectedCustomer: customer }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
  }))


  export const useCustomerTableStore = createSelectors(CustomerTableStore);