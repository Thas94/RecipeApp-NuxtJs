export default defineNuxtRouteMiddleware((to) => {
    const {status, signIn} = useAuth()
    const router = useRouter()
    if (status.value !== 'authenticated') {
        //return
        router.push('/auth/login')
      }
})