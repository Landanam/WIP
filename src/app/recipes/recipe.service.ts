import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    recipeSelected = new Subject<Recipe>();

    constructor(private shoppingService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'Bob',
            'Supa ot bobcheta', 
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2Fb4d2deae55b7f0690d41a2952219065d%2Ftumblr_mmmdkq0KHw1r8wc2ho1_640.jpg&f=1&nofb=1',
            [
                new Ingredient('Baxurec', 2),
                new Ingredient('Mushama', 332)
            ]),
        new Recipe(
            "Musaka",
            "Madzha ot kartofi i kaima",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftiplr.com%2Fwp-content%2Fuploads%2F2019%2F07%2Ffile0-1528381958921.jpg&f=1&nofb=1",
            [
                new Ingredient('grozde', 4)
            ]),
    ];

    getRecipes() {
        return this.recipes.slice(); // returns a copy of the array
    }

    getRecipe(index: number): Recipe {
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }
}