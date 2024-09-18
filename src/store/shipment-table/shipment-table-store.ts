import {create} from "zustand"
import createSelectors from "../selectors"
import type { ShipmentOrder } from "@/types/shipment-order"
import { Key } from "react"
type State ={
    isDetailsOpen: boolean
    shipmentOrder: ShipmentOrder
    selectedTabKey:Key | string
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectShipmentOrder: (shipmentOrder: ShipmentOrder) => void
    setSelectedTabKey: (key:Key) => void
}

const ShipmentTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    shipmentOrder: {} as ShipmentOrder, 
    selectedTabKey:"",
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectShipmentOrder: (shipmentOrder: ShipmentOrder) => set({ shipmentOrder }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
  }))


  export const useShipmentTableStore = createSelectors(ShipmentTableStore);