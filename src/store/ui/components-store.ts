import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import createSelectors from '../selectors'
import { current } from 'immer'

interface State {
  isOSSidebarOpen: boolean,
}

type Actions = {

  toggleOSSidebar: () => void,
}
const componentsStore = create<State & Actions>()(immer((set) => ({
  isOSSidebarOpen: false,

  toggleOSSidebar: () => set((state) => {
    state.isOSSidebarOpen = !state.isOSSidebarOpen
  }),

})))

export const useComponentsStore = createSelectors(componentsStore);