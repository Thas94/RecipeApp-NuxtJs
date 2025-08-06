export default defineNuxtRouteMiddleware((to, from) => {
    const {status, data} = useAuth()
    const adminRoutes = ['/admin', '/admin/dashboard']
    if (adminRoutes.includes(to.path) && data.value?.user.roleName !== 'Admin') {
      return navigateTo('error')
    }
  })
  