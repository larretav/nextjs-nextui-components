import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import createSelectors from '../selectors'

interface State {
  isSideMenuOpen: boolean,
}

type Actions = {
  openSideMenu: () => void,
  closeSideMenu: () => void,
  toggleSidebar: () => void,
}

const uiStore = create<State & Actions>()(immer((set) => ({
  isSideMenuOpen: false,

  openSideMenu: () => set((state) => { state.isSideMenuOpen = true }),
  closeSideMenu: () => set((state) => { state.isSideMenuOpen = false }),

  toggleSidebar: ()=> set((state) => { state.isSideMenuOpen = !state.isSideMenuOpen }),

})))

export const useUIStore = createSelectors(uiStore);