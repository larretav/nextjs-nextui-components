import { create } from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { ShipmentItem } from "@/mapper/shipmentsMapper"
import { ShipmentsDocumenterMapper } from "@/mapper/shipmentsDocumenterMapper"

type State = {
    isDetailsOpen: boolean
    selectedShipmentOrder: ShipmentItem
    selectedShipmentOrderForMenu: ShipmentItem
    documenters: ShipmentsDocumenterMapper
    //Filters
    selectedTabKey: Key
    filterShipper: string
    filterEcommercePlatform: string
    filterDocumenter: string
    filterWord: string
    //Pagination
    page: number
    rowsPerPage: number
    start: number
    //Modals
    isDetailsPDFModalOpen: boolean
    isLabelPDFModalOpen: boolean
}

type Actions = {
    toggleDetails: (isOpen: boolean) => void
    setDocumenters: (documenters: ShipmentsDocumenterMapper) => void
    selectShipmentOrder: (shipmentOrder: ShipmentItem) => void
    selectShipmentOrderForMenu: (shipmentOrder: ShipmentItem) => void
    //Filters
    setSelectedTabKey: (key: Key) => void
    setFilterShipper: (shipper: string) => void
    setFilterEcommercePlatform: (platform: string) => void
    setFilterWord: (word: string) => void
    setFilterDocumenter: (documenter: string) => void
    //Pagination
    setPage: (page: number) => void
    setRowsPerPage: (rowsPerPage: number) => void
    setStart: (start: number) => void
    //Modals
    toggleDetailsPDFModal: (isOpen: boolean) => void
    toggleLabelPDFModal: (isOpen: boolean) => void
}

const ShipmentTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    documenters: {} as ShipmentsDocumenterMapper,
    selectedShipmentOrder: {} as ShipmentItem,
    selectedShipmentOrderForMenu: {} as ShipmentItem,
    selectedTabKey: "P,A",
    filterShipper: "0",
    filterEcommercePlatform: "X",
    filterDocumenter: "X",
    filterWord: "",
    page: 1,
    rowsPerPage: 10,
    start: 0,
    isDetailsPDFModalOpen: false,
    isLabelPDFModalOpen: false,
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectShipmentOrder: (shipmentOrder: ShipmentItem) => set({ selectedShipmentOrder: shipmentOrder }),
    selectShipmentOrderForMenu: (shipmentOrder: ShipmentItem) => set({ selectedShipmentOrderForMenu: shipmentOrder }),
    setDocumenters: (documenters: ShipmentsDocumenterMapper) => set({ documenters: documenters }),
    setSelectedTabKey: (key: Key) => set({ selectedTabKey: key }),
    setFilterShipper: (shipper: string) => set({ filterShipper: shipper }),
    setFilterEcommercePlatform: (platform: string) => set({ filterEcommercePlatform: platform }),
    setFilterDocumenter: (documenter: string) => set({ filterDocumenter: documenter }),
    setFilterWord: (word: string) => set({ filterWord: word }),
    setPage: (page: number) => set({ page: page }),
    setRowsPerPage: (rowsPerPage: number) => set({ rowsPerPage: rowsPerPage }),
    setStart: (start: number) => set({ start: start }),
    toggleDetailsPDFModal: (isOpen: boolean) => set({ isDetailsPDFModalOpen: isOpen }),
    toggleLabelPDFModal: (isOpen: boolean) => set({ isLabelPDFModalOpen: isOpen }),

}))


export const useShipmentTableStore = createSelectors(ShipmentTableStore);