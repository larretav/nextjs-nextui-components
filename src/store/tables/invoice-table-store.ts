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
    page:number
    rowsPerPage:number
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectInvoice: (invoice: Invoice) => void
    setSelectedTabKey: (key:Key) => void
    setFilterDate: (date:string) => void
    setFilterWord: (word:string) => void
    setPage: (page: number) => void
    setRowsPerPage: (rowsPerPage: number) => void
}
const pastMonth = today(getLocalTimeZone()).subtract({ months: 1 }).toString()
const InvoiceTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedInvoice: {} as Invoice,
    selectedTabKey:"",
    filterDate:pastMonth,
    filterWord:"",
    page: 1,
    rowsPerPage: 5,
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectInvoice: (invoice: Invoice) => set({ selectedInvoice: invoice }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
    setFilterDate: (date:string) => set({ filterDate: date }),
    setFilterWord: (word:string) => set({ filterWord: word }),
    setPage: (page: number) => set({ page: page }),
    setRowsPerPage: (rowsPerPage: number) => set({ rowsPerPage: rowsPerPage }),
  }))


  export const useInvoiceTableStore = createSelectors(InvoiceTableStore);