import { defineStore } from "pinia";
import {type Recipe, type RecipeResponse} from "../models/recipeResponse";

export const useCartStore = defineStore('cartStore', () => {

    const recipesInCart = ref([{}]) as Ref<Recipe[]>

    const addToCart = (recipe: Recipe) => {
        recipesInCart.value.push(recipe)
    }

    return {
        recipesInCart,
        addToCart
    }
})