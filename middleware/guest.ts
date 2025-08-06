export default defineNuxtRouteMiddleware((to) => {
  const { status, data } = useAuth()
  if (status.value == 'authenticated' && data.value?.user.roleName !== 'Admin') {
    return navigateTo('/')
  }
})