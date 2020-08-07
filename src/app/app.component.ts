import { Component } from '@angular/core';
import { ShoppingListService } from './_services/shoppinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'recipe-book';
  navigation = 'recipe';

constructor(private shoppinglistService: ShoppingListService) { 
}

  onNavigation(inputNavigation: string)
  {
    this.navigation = inputNavigation;
  }
}
