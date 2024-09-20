import {create} from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { Bill } from "@/types/bill.type"
type State ={
    isDetailsOpen: boolean
    selectedBill: Bill
    selectedTabKey:Key 
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectBill: (bill: Bill) => void
    setSelectedTabKey: (key:Key) => void
}

const BillTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedBill: {} as Bill,
    selectedTabKey:"",
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectBill: (bill: Bill) => set({ selectedBill: bill }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
  }))


  export const useBillTableStore = createSelectors(BillTableStore);