import { ShoppingListService } from './shoppinglist.service';
import { Ingredient } from './../_model/Ingredient.model';
import { Recipe } from './../_model/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Burger','Burger Description',
        'https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg',
        [new Ingredient('Meat',1), new Ingredient('French Fries',20)]),
        new Recipe('Biryani','Biryani Description',
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/9/0/FNK_the-best-biryani_H.JPG.rend.hgtvcom.826.620.suffix/1568143107638.jpeg',
        [new Ingredient('Chicken',1), new Ingredient('Rice',2)]
        ),
      ];

      
      constructor(private slService: ShoppingListService) {
                    
      }

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);
      }
}