import create from 'zustand'

export const useStore = create((set) => ({
  displayModal: false,
  walletConnected: false,
  walletBalance: 0.0,
  setDisplayModalTrue: () => set({ displayModal: true }),
  setDisplayModalFalse: () => set({ displayModal: false }),
  setWalletBalance: (bal) => {set((state) =>({ walletBalance : bal}))},
  setWalletConnected: (status) => {  set((state) =>({ walletConnected : status})) }
}))