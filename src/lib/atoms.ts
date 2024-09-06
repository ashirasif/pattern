import { atom } from 'jotai'

// cart
export const revalidateCartAtom = atom(false)

// filters
export const categoryAtom = atom<string | undefined>()
export const minPriceAtom = atom<number | undefined>()
export const maxPriceAtom = atom<number | undefined>()
export const ascendingAtom = atom<boolean>(true)
export const queryAtom = atom<string>('')

// pagination
export const pageAtom = atom(1)
export const productsPerPageAtom = atom(5)
export const totalAtom = atom(0)
export const totalPagesAtom = atom(0)

