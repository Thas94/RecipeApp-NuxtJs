export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const body = await readBody(event)
    const result = await fetch(`${config.apiUrl}/Cart/AddToCart`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
      })

    return result
})