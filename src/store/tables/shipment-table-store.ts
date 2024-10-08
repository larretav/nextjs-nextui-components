import { create } from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { ShipmentItem } from "@/mapper/shipmentsMapper"
import { ShipmentsDocumenterMapper } from "@/mapper/shipmentsDocumenterMapper"
import { Selection } from "@nextui-org/table"
type State = {
    isDetailsOpen: boolean
    selectedShipmentOrder: ShipmentItem    
    documenters: ShipmentsDocumenterMapper
    selectedTableKey:Selection
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
    isPaquetexpressModalOpen: boolean
}

type Actions = {
    toggleDetails: (isOpen: boolean) => void
    setDocumenters: (documenters: ShipmentsDocumenterMapper) => void
    selectShipmentOrder: (shipmentOrder: ShipmentItem) => void
    setSelectedTableKey: (key: Selection) => void    
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
    togglePaquetexpressModal: (isOpen: boolean) => void
}

const ShipmentTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    documenters: {} as ShipmentsDocumenterMapper,
    selectedShipmentOrder: {} as ShipmentItem,
    selectedTableKey: new Set([]),
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
    isPaquetexpressModalOpen: false,
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectShipmentOrder: (shipmentOrder: ShipmentItem) => set({ selectedShipmentOrder: shipmentOrder }),    
    setDocumenters: (documenters: ShipmentsDocumenterMapper) => set({ documenters: documenters }),
    setSelectedTableKey: (key: Selection) => set({ selectedTableKey: key }),    
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
    togglePaquetexpressModal: (isOpen: boolean) => set({ isPaquetexpressModalOpen: isOpen }),
}))


export const useShipmentTableStore = createSelectors(ShipmentTableStore);