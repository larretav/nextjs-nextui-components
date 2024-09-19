import {create} from "zustand"
import createSelectors from "../selectors"
import { Key } from "react"
import { Client } from "@/types/client.type"
type State ={
    isDetailsOpen: boolean
    selectedClient: Client
    selectedTabKey:Key 
}

type Actions = {
    toggleDetails: (isOpen:boolean) => void
    selectClient: (client: Client) => void
    setSelectedTabKey: (key:Key) => void
}

const ClientTableStore = create<State & Actions>((set) => ({
    isDetailsOpen: false,
    selectedClient: {} as Client,
    selectedTabKey:"",
    toggleDetails: (isOpen: boolean) => set({ isDetailsOpen: isOpen }),
    selectClient: (client: Client) => set({ selectedClient: client }),
    setSelectedTabKey: (key:Key) => set({ selectedTabKey: key }),
  }))


  export const useClientTableStore = createSelectors(ClientTableStore);