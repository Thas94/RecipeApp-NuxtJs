export default defineEventHandler(async (event) => {

    const recipeId = event.context.params?.recipeId
    const config = useRuntimeConfig()
    const recipes = await $fetch(`${config.recipeApiUrl}/recipes/${recipeId}`)
    return recipes;
});