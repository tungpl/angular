import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {  
    
    private recipes: Recipe[] = [
        new Recipe("Big Fat Burger", 
        "burger | Virtual Monday The whole universe is interesting",
        "https://virtualmonday.files.wordpress.com/2010/06/burger.jpg",
        [
            new Ingredient('Meat', 1),
            new Ingredient('Fries', 3)
        ]),
        new Recipe("Seafood Salad", 
        "The best salad in the world", 
        "../../assets/salad.jpg",
        [
            new Ingredient('Squid', 1),
            new Ingredient('Vegetable', 2),
            new Ingredient('Chicken', 1)
        ])
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

}