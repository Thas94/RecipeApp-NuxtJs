import { defineStore } from "pinia";

export const useSideMenuStore = defineStore('sideMenuStore', () => {
    const isMenuOpen = ref(false)

    const ToggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }
    return {
        ToggleMenu,
        isMenuOpen
    }
})