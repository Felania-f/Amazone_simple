import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categories = [
    {
      "id": 1,
      "nom": "Électronique"
    },
    {
      "id": 2,
      "nom": "Vêtements"
    },
    {
      "id": 3,
      "nom": "Maison"
    }
  ];

  constructor() { }

  getCategories() {
    return this.categories;
  }

}
