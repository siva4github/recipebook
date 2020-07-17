import { Recipe } from './../../_model/recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe : Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
