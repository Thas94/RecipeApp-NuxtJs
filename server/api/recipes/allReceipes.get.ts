export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()
    const recipes = await $fetch(`${config.recipeApiUrl}/recipes`)
    return recipes;
});