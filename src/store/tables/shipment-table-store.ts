import {create} from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { ShipmentItem } from "@/mapper/shipmentsMapper"

type State ={
    isDetailsOpen: boolean
    selectedShipmentOrder: ShipmentItem
    //Filters
    selectedTabKey:Key    
    filterShipper:string
    filterEcommercePlatform:string
    filterWord:string
    //Pagination
    page: number
    rowsPerPage: number
    start: number
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectShipmentOrder: (shipmentOrder: ShipmentItem) => void
    //Filters
    setSelectedTabKey: (key:Key) => void    
    setFilterShipper: (shipper:string) => void
    setFilterEcommercePlatform: (platform:string) => void
    setFilterWord: (word:string) => void
    //Pagination
    setPage: (page: number) => void
    setRowsPerPage: (rowsPerPage: number) => void
    setStart: (start: number) => void
}

const ShipmentTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedShipmentOrder: {} as ShipmentItem, 
    selectedTabKey:"P,A",    
    filterShipper:"0",
    filterEcommercePlatform:"X" ,
    filterWord:"",
    page: 1,
    rowsPerPage: 10,   
    start: 0,
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectShipmentOrder: (shipmentOrder: ShipmentItem) => set({ selectedShipmentOrder: shipmentOrder }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),    
    setFilterShipper: (shipper:string) => set({ filterShipper: shipper }),
    setFilterEcommercePlatform: (platform:string) => set({ filterEcommercePlatform: platform }),
    setFilterWord: (word:string) => set({ filterWord: word }),
    setPage: (page: number) => set({ page: page }),
    setRowsPerPage: (rowsPerPage: number) => set({ rowsPerPage: rowsPerPage }),
    setStart: (start: number) => set({ start: start }),
  }))


  export const useShipmentTableStore = createSelectors(ShipmentTableStore);