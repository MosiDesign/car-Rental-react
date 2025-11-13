import { create } from 'zustand'

type trueOrFalse  = {
  openLogin: boolean
  setOpenLogin: (v:boolean) => void
}

export const trueOfFalse = create<trueOrFalse>((set) => ({
  openLogin: false,
  setOpenLogin: (v) => set(() => ({ openLogin : v })),
}))