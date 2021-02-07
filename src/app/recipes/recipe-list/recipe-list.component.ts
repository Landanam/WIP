import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Bob','Supa ot bobcheta', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2Fb4d2deae55b7f0690d41a2952219065d%2Ftumblr_mmmdkq0KHw1r8wc2ho1_640.jpg&f=1&nofb=1'),
    new Recipe("Musaka","Madzha ot kartofi i kaima","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftiplr.com%2Fwp-content%2Fuploads%2F2019%2F07%2Ffile0-1528381958921.jpg&f=1&nofb=1"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
