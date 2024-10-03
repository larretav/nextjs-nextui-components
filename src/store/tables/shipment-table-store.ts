import {create} from "zustand"
import createSelectors from "../selectors"
import type { ShipmentOrder } from "@/types/shipment-order.type"
import type {Shippers} from "@/types/shippers.type"
import type {EcommercePlatforms} from "@/types/ecommerce-platform.type"
import {today, getLocalTimeZone} from '@internationalized/date';
import { Key } from "react"
import { ShipmentDataItem } from "@/mapper/shipmentsMapper"

type State ={
    isDetailsOpen: boolean
    selectedShipmentOrder: ShipmentDataItem
    //Filters
    selectedTabKey:Key
    filterDate:string
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
    selectShipmentOrder: (shipmentOrder: ShipmentDataItem) => void
    //Filters
    setSelectedTabKey: (key:Key) => void
    setFilterDate: (date:string) => void
    setFilterShipper: (shipper:string) => void
    setFilterEcommercePlatform: (platform:string) => void
    setFilterWord: (word:string) => void
    //Pagination
    setPage: (page: number) => void
    setRowsPerPage: (rowsPerPage: number) => void
    setStart: (start: number) => void
}

const pastMonth = today(getLocalTimeZone()).subtract({ months: 1 }).toString()

const ShipmentTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedShipmentOrder: {} as ShipmentDataItem, 
    selectedTabKey:"P,A",
    filterDate:pastMonth,
    filterShipper:"0",
    filterEcommercePlatform:"X" ,
    filterWord:"",
    page: 1,
    rowsPerPage: 10,   
    start: 0,
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectShipmentOrder: (shipmentOrder: ShipmentDataItem) => set({ selectedShipmentOrder: shipmentOrder }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
    setFilterDate: (date:string) => set({ filterDate: date }),
    setFilterShipper: (shipper:string) => set({ filterShipper: shipper }),
    setFilterEcommercePlatform: (platform:string) => set({ filterEcommercePlatform: platform }),
    setFilterWord: (word:string) => set({ filterWord: word }),
    setPage: (page: number) => set({ page: page }),
    setRowsPerPage: (rowsPerPage: number) => set({ rowsPerPage: rowsPerPage }),
    setStart: (start: number) => set({ start: start }),
  }))


  export const useShipmentTableStore = createSelectors(ShipmentTableStore);