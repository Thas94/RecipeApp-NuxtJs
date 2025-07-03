import { defineStore } from "pinia";
import {type Recipe, type RecipeResponse} from "../models/recipeResponse";
import { useCustomToast } from "#imports";

export const useCartStore = defineStore('cartStore', () => {

    const recipesInCart = ref([]) as Ref<Recipe[]>
    const { showSuccess, showError, showInfo, showWarn, show, clear } = useCustomToast()

    const addToCart = (recipe: Recipe) => {
        
        if(!recipesInCart.value.some(x => x.id === recipe.id))
        {
            recipesInCart.value.push(recipe)
            showSuccess(`${recipe.name} added in cart.`)
        }
        else
            showError(`${recipe.name} already added in cart.`)
    }

    return {
        recipesInCart,
        addToCart
    }
})