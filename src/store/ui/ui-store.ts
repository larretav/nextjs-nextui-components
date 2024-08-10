import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import createSelectors from '../selectors'

interface State {
  isSideMenuOpen: boolean,
}

type Action = {
  openSideMenu: () => void,
  closeSideMenu: () => void,

}

const uiStore = create<State & Action>()(immer((set) => ({
  isSideMenuOpen: false,

  openSideMenu: () => set((state) => { state.isSideMenuOpen = true }),
  closeSideMenu: () => set((state) => { state.isSideMenuOpen = false }),

})))

export const useUIStore = createSelectors(uiStore);