import { create } from "zustand";

type State = {
    showNavbar: boolean,
    theme: string,
    modalFilterSearch: boolean,
    filterSearch: {
        item: boolean,
        operation: boolean,
        document: boolean,
        admin: boolean
    }
}

type Actions = {
    setShowNavbar: (value: boolean) => void,
    setTheme: (value: string) => void,
    setModalFilterSearch: (value: boolean) => void
    setFilterSearch: (value: {
        item: boolean,
        operation: boolean,
        document: boolean,
        admin: boolean
    }) => void
}

export const useInventory = create<State & Actions>((set) => ({
    showNavbar: false,
    theme: '',
    modalFilterSearch: false,
    filterSearch: {
        item: true,
        operation: true,
        document: true,
        admin: true
    },
    setShowNavbar: (value) => set({ showNavbar: value }),
    setTheme: (value) => set({ theme: value }),
    setModalFilterSearch: (value) => set({ modalFilterSearch: value }),
    setFilterSearch: (value) => set({ filterSearch: value }),
}))