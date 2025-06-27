export default defineEventHandler(async (event) => {

    const {recipeApiUrl} = useRuntimeConfig()
    const recipes = await $fetch(`${recipeApiUrl}/recipes`)
    return recipes;
});