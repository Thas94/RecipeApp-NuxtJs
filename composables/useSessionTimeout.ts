import { useSessionStore } from '@/stores/sessionStore'
import { useRouter } from 'vue-router'

export const useSessionTimeout = () => {
    const { sessionExpireDate, showSessionDialog, isUserActive } = storeToRefs(useSessionStore())
    const { data, status, getSession, signOut, signIn, refresh } = useAuth()

    onMounted(async () => {
        setInterval(() => {
            const nowDate = new Date()
            //@ts-expect-error
            const sessionDate = new Date(data.value?.user.sessionExpiryDate)
            if (nowDate > sessionDate) {
                if (isUserActive.value) {
                    //sign in user again
                }
            }
            else if (!isUserActive.value) {
                const diffMinutes: number = Math.abs(sessionDate.getTime() - nowDate.getTime()) / (1000 * 60);
                if(diffMinutes >= 1){ //idle for 1 minute
                    showSessionDialog.value = true
                    setInterval(() => { signOut() }, 10 * 6000) //sign out after 1 minute
                }
            }
            isUserActive.value = false

        }, 10 * 1000) // check every 10 sec
    })

    //onUnmounted(() => )
}
