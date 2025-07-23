import { defineStore } from 'pinia'

export const useSessionStore = defineStore('sessionStore', () => {
    const sessionExpireDate = ref(new Date())
    const showSessionDialog = ref(false)
    const isUserActive = ref(false)

    onMounted(() => {
        const sessionDateStored = localStorage.getItem("sessiondate")
        sessionExpireDate.value = sessionDateStored ? new Date(sessionDateStored) : new Date()

        watch(sessionExpireDate, (val) => {
            localStorage.setItem("sessiondate", val.toString())
        })
    })

    const UpdateSession = () => {
        sessionExpireDate.value = new Date()
        showSessionDialog.value = false
        isUserActive.value = true
    }

    return {
        sessionExpireDate,
        showSessionDialog,
        UpdateSession,
        isUserActive
    }
})
