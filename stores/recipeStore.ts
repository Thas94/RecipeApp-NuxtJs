import { defineStore } from "pinia";
import {type Recipe, type RecipeResponse} from "../models/recipeResponse";

export const useRecipeStore = defineStore('recipeStore', () => {

    const recipe = ref({}) as Ref<Recipe>
    const recipeList = ref([{}]) as Ref<RecipeResponse[]>;

    const getRecipes = async () => {
        const results = await $fetch('/api/recipes/allReceipes')
        recipeList.value = <RecipeResponse[]>results
    }

    const getRecipeById = async (id: number) => {
        const result = await $fetch(`/api/recipes/${id}`)
        recipe.value = <Recipe>result
    }

    return {
        recipeList,
        recipe,
        getRecipes,
        getRecipeById
    }
})