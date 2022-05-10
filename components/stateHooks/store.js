import create from 'zustand'

export const useStore = create((set) => ({
  displayModal: false,
  setDisplayModalTrue: () => set({ displayModal: true }),
  setDisplayModalFalse: () => set({ displayModal: false }),
}))