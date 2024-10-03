import { create } from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { ShipmentItem } from "@/mapper/shipmentsMapper"

type State = {
    isDetailsOpen: boolean
    selectedShipmentOrder: ShipmentItem
    selectedShipmentOrderForMenu: ShipmentItem
    //Filters
    selectedTabKey: Key
    filterShipper: string
    filterEcommercePlatform: string
    filterWord: string
    //Pagination
    page: number
    rowsPerPage: number
    start: number
    //Modals
    isViewPDFModalOpen: boolean
}

type Actions = {
    toggleDetails: (isOpen: boolean) => void
    selectShipmentOrder: (shipmentOrder: ShipmentItem) => void
    selectShipmentOrderForMenu: (shipmentOrder: ShipmentItem) => void
    //Filters
    setSelectedTabKey: (key: Key) => void
    setFilterShipper: (shipper: string) => void
    setFilterEcommercePlatform: (platform: string) => void
    setFilterWord: (word: string) => void
    //Pagination
    setPage: (page: number) => void
    setRowsPerPage: (rowsPerPage: number) => void
    setStart: (start: number) => void
    //Modals
    toggleViewPDFModal: (isOpen: boolean) => void
}

const ShipmentTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedShipmentOrder: {} as ShipmentItem,
    selectedShipmentOrderForMenu: {} as ShipmentItem,
    selectedTabKey: "P,A",
    filterShipper: "0",
    filterEcommercePlatform: "X",
    filterWord: "",
    page: 1,
    rowsPerPage: 10,
    start: 0,
    isViewPDFModalOpen: false,
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectShipmentOrder: (shipmentOrder: ShipmentItem) => set({ selectedShipmentOrder: shipmentOrder }),
    selectShipmentOrderForMenu: (shipmentOrder: ShipmentItem) => set({ selectedShipmentOrderForMenu: shipmentOrder }),
    setSelectedTabKey: (key: Key) => set({ selectedTabKey: key }),
    setFilterShipper: (shipper: string) => set({ filterShipper: shipper }),
    setFilterEcommercePlatform: (platform: string) => set({ filterEcommercePlatform: platform }),
    setFilterWord: (word: string) => set({ filterWord: word }),
    setPage: (page: number) => set({ page: page }),
    setRowsPerPage: (rowsPerPage: number) => set({ rowsPerPage: rowsPerPage }),
    setStart: (start: number) => set({ start: start }),
    toggleViewPDFModal: (isOpen: boolean) => set({ isViewPDFModalOpen: isOpen }),

}))


export const useShipmentTableStore = createSelectors(ShipmentTableStore);