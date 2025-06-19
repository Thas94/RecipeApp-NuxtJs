export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const movies = await $fetch(`${config.movieApiUrl}/recipes?limit=12`)
    return movies;
});