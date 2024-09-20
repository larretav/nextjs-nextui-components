import {create} from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { Invoice } from "@/types/invoice.type"
type State ={
    isDetailsOpen: boolean
    selectedInvoice: Invoice
    selectedTabKey:Key 
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectInvoice: (invoice: Invoice) => void
    setSelectedTabKey: (key:Key) => void
}

const InvoiceTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedInvoice: {} as Invoice,
    selectedTabKey:"",
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectInvoice: (invoice: Invoice) => set({ selectedInvoice: invoice }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
  }))


  export const useInvoiceTableStore = createSelectors(InvoiceTableStore);