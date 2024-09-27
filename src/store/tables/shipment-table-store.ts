import {create} from "zustand"
import createSelectors from "../selectors"
import type { ShipmentOrder } from "@/types/shipment-order.type"
import type {Shippers} from "@/types/shippers.type"
import type {EcommercePlatforms} from "@/types/ecommerce-platform.type"
import {today, getLocalTimeZone} from '@internationalized/date';
import { Key } from "react"

type State ={
    isDetailsOpen: boolean
    selectedShipmentOrder: ShipmentOrder
    //Filters
    selectedTabKey:Key
    filterDate:string
    filterShipper:Shippers
    filterEcommercePlatform:EcommercePlatforms
    filterWord:string
    //Pagination
    page: number
    rowsPerPage: number
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectShipmentOrder: (shipmentOrder: ShipmentOrder) => void
    //Filters
    setSelectedTabKey: (key:Key) => void
    setFilterDate: (date:string) => void
    setFilterShipper: (shipper:Shippers) => void
    setFilterEcommercePlatform: (platform:EcommercePlatforms) => void
    setFilterWord: (word:string) => void
    //Pagination
    setPage: (page: number) => void
    setRowsPerPage: (rowsPerPage: number) => void
}

const pastMonth = today(getLocalTimeZone()).subtract({ months: 1 }).toString()

const ShipmentTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedShipmentOrder: {} as ShipmentOrder, 
    selectedTabKey:"Todos",
    filterDate:pastMonth,
    filterShipper:"Todos" as Shippers,
    filterEcommercePlatform:"Todos" as EcommercePlatforms,
    filterWord:"",
    page: 1,
    rowsPerPage: 5,   
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectShipmentOrder: (shipmentOrder: ShipmentOrder) => set({ selectedShipmentOrder: shipmentOrder }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
    setFilterDate: (date:string) => set({ filterDate: date }),
    setFilterShipper: (shipper:Shippers) => set({ filterShipper: shipper }),
    setFilterEcommercePlatform: (platform:EcommercePlatforms) => set({ filterEcommercePlatform: platform }),
    setFilterWord: (word:string) => set({ filterWord: word }),
    setPage: (page: number) => set({ page: page }),
    setRowsPerPage: (rowsPerPage: number) => set({ rowsPerPage: rowsPerPage }),
  }))


  export const useShipmentTableStore = createSelectors(ShipmentTableStore);