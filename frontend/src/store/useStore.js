import create from 'zustand'

export const useStore = create((set) => ({
  data: [],
  setData: (d) => set({ data: d }),
  filter: '',
  setFilter: (f) => set({ filter: f }),
  name: null,
  setName: (n) => set({ name: n }),
}))

export default useStore
