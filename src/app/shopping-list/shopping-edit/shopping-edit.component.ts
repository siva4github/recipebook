import { Ingredient } from './../../_model/Ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ShoppingListService } from 'src/app/_services/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdditem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value);
    this.shoppinglistService.addIngredient(newIngredient);
  }

}
