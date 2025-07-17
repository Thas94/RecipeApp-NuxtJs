export default defineEventHandler(async (event) => {
    const userid = event.context.params?.userid
    const config = useRuntimeConfig()

    const orders = await $fetch(`${config.apiUrl}/Order/GetOrdersByUserId?userId=${userid}`, {
        method: 'GET'
    })
    return orders
});