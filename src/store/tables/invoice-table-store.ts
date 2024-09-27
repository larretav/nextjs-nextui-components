import {create} from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { Invoice } from "@/types/invoice.type"
import { getLocalTimeZone, today } from "@internationalized/date"
type State ={
    isDetailsOpen: boolean
    selectedInvoice: Invoice
    selectedTabKey:Key 
    filterDate:string
    filterWord:string
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectInvoice: (invoice: Invoice) => void
    setSelectedTabKey: (key:Key) => void
    setFilterDate: (date:string) => void
    setFilterWord: (word:string) => void
}
const pastMonth = today(getLocalTimeZone()).subtract({ months: 1 }).toString()
const InvoiceTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedInvoice: {} as Invoice,
    selectedTabKey:"",
    filterDate:pastMonth,
    filterWord:"",
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectInvoice: (invoice: Invoice) => set({ selectedInvoice: invoice }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
    setFilterDate: (date:string) => set({ filterDate: date }),
    setFilterWord: (word:string) => set({ filterWord: word }),
  }))


  export const useInvoiceTableStore = createSelectors(InvoiceTableStore);