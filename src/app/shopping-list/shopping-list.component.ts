import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Salt", 0.15),
    new Ingredient("Bob", 1),
    new Ingredient("Domati", 0.5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
