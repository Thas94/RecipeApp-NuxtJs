export default defineNuxtRouteMiddleware((to) => {
    const { status, data } = useAuth()
    debugger
    if (status.value !== 'authenticated') {
        return navigateTo('/auth/login')
    }

    if(data.value?.user.roleName !== 'RegularUser'){
        return navigateTo('/forbidden')
    }
})