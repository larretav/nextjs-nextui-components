import { create } from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { ShipmentItem } from "@/models/shipments/shipments.model"
import { ShipmentsDocumenterMapper } from "@/models/shipments/shipmentsDocumenter.model"
import { Selection } from "@heroui/table"
type State = {
    isDetailsOpen: boolean
    selectedShipmentOrder: ShipmentItem
    documenters: ShipmentsDocumenterMapper
    selectedTableKey: Selection
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
    isPaquetexpressMapModalOpen: boolean
    isDeliveryDetailsModalOpen: boolean
    isTrackingModalOpen: boolean
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
    togglePaquetexpressMapModal: (isOpen: boolean) => void
    toggleDeliveryDetailsModal: (isOpen: boolean) => void
    toggleTrackingModal: (isOpen: boolean) => void
}

const ShipmentListStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    documenters: {} as ShipmentsDocumenterMapper,
    setDocumenters: (documenters: ShipmentsDocumenterMapper) => set({ documenters: documenters }),
    selectedShipmentOrder: {} as ShipmentItem,
    selectShipmentOrder: (shipmentOrder: ShipmentItem) => set({ selectedShipmentOrder: shipmentOrder }),
    selectedTableKey: new Set([]),
    setSelectedTableKey: (key: Selection) => set({ selectedTableKey: key }),
    //Filters
    selectedTabKey: "P,A",
    setSelectedTabKey: (key: Key) => set({ selectedTabKey: key }),
    filterShipper: "0",
    setFilterShipper: (shipper: string) => set({ filterShipper: shipper }),
    filterEcommercePlatform: "X",
    setFilterEcommercePlatform: (platform: string) => set({ filterEcommercePlatform: platform }),
    filterDocumenter: "X",
    setFilterDocumenter: (documenter: string) => set({ filterDocumenter: documenter }),
    filterWord: "",
    setFilterWord: (word: string) => set({ filterWord: word }),
    //Pagination
    page: 1,
    setPage: (page: number) => set({ page: page }),
    rowsPerPage: 10,
    setRowsPerPage: (rowsPerPage: number) => set({ rowsPerPage: rowsPerPage }),
    start: 0,
    setStart: (start: number) => set({ start: start }),
    //Modals
    isDetailsPDFModalOpen: false,
    toggleDetailsPDFModal: (isOpen: boolean) => set({ isDetailsPDFModalOpen: isOpen }),
    isLabelPDFModalOpen: false,
    toggleLabelPDFModal: (isOpen: boolean) => set({ isLabelPDFModalOpen: isOpen }),
    isPaquetexpressMapModalOpen: false,
    togglePaquetexpressMapModal: (isOpen: boolean) => set({ isPaquetexpressMapModalOpen: isOpen }),
    isDeliveryDetailsModalOpen: false,
    toggleDeliveryDetailsModal: (isOpen: boolean) => set({ isDeliveryDetailsModalOpen: isOpen }),
    isTrackingModalOpen: false,
    toggleTrackingModal: (isOpen: boolean) => set({ isTrackingModalOpen: isOpen }),      
}))

export const useShipmentListStore = createSelectors(ShipmentListStore);