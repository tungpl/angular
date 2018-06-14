import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recSelected = new EventEmitter<Recipe>();
  public recipes: Recipe[] = [
    new Recipe("Test recipe", "This is the test description", "https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg"),
    new Recipe("Another Test recipe", "This is the test description", "https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg")
  ];
  constructor() { 
    
  }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe){
    this.recSelected.emit(recipe);
  }

}
