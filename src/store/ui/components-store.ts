import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import createSelectors from '../selectors'
import { current } from 'immer'

interface State {
  isOSSidebarOpen: boolean,
  isOSSidebarFiltersOpen: boolean,
}

type Actions = {

  toggleOSSidebar: () => void,
  toggleOSSidebarFilters: () => void,
}
const componentsStore = create<State & Actions>()(immer((set) => ({
  isOSSidebarOpen: false,
  isOSSidebarFiltersOpen: false,

  toggleOSSidebar: () => set((state) => {
    state.isOSSidebarOpen = !state.isOSSidebarOpen
  }),

  toggleOSSidebarFilters: () => set((state) => {
    state.isOSSidebarFiltersOpen = !state.isOSSidebarFiltersOpen
  }),

})))

export const useComponentsStore = createSelectors(componentsStore);