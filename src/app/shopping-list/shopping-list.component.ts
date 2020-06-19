import { Ingredient } from '../_model/Ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  Ingredients: Ingredient[] = [
    new Ingredient('Applles', 5),
    new Ingredient('Tomotos', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
