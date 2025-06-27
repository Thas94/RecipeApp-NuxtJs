import { defineStore } from "pinia";
import {type Recipe, type RecipeResponse} from "../models/recipeResponse";
//import { useToast } from "primevue/usetoast";
import { useCustomToast } from "#imports";


export const useCartStore = defineStore('cartStore', () => {

    //const recipesInCart = ref([]) as Ref<Recipe[]>
    const recipesInCart = ref<Recipe[]>([])
    //const toast = useToast();
    const { showSuccess, showError, showInfo, showWarn, show, clear } = useCustomToast()

    const addToCart = (recipe: Recipe) => {
        
        if(!recipesInCart.value.includes(recipe))
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