import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Delicious','https://upload.wikimedia.org/wikipedia/commons/2/2c/Babka%2C_M%C3%BAnich%2C_Alemania%2C_2013-04-01%2C_DD_01.JPG')
  ];


}
