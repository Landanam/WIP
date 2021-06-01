import { Component, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  // @ViewChild('nameInput', {static: false }) recipeName: ElementRef;
  // @ViewChild('amountInput', {static: false }) amount: ElementRef;
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscribtion: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscribtion = this.shoppingService.startedEditing
    .subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
    });
  }

  addIngredient(form: NgForm) {
    // const ingredient = new Ingredient(this.recipeName.nativeElement.value, this.amount.nativeElement.value);

    //this.shoppingService.addIngredient({name: form['username'], amount: form['amount']});

    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, ingredient);
      this.editMode = false;
    } else {
      this.shoppingService.addIngredient(ingredient);
    }
    this.slForm.reset();
  }

  onDelete(): void {
    this.onClear();
    this.shoppingService.deleteIngredient(this.editedItemIndex);
  }

  onClear(): void {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
