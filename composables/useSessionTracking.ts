export const useSessionTracking = () => {

    const {UpdateSession} = useSessionStore()

    onMounted(() => {
        window.addEventListener('mousemove', UpdateSession)
        window.addEventListener('keydown', UpdateSession)
    })

    onUnmounted(() => {
        window.addEventListener('mousemove', UpdateSession)
        window.addEventListener('keydown', UpdateSession)
    })
}