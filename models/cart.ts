import { type Recipe } from "./recipeResponse";

export interface Cart {
    userId: number;
    recipes: Recipe[];
}