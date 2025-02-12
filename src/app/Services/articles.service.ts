import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private articles = [
    {
      "id": 1,
      "nom": "Smartphone",
      "description": "Un smartphone dernier cri",
      "prix": "699",
      "imageUrl": [
        "../assets/image.jpg"
      ],
      "aPropos": "Caractéristiques avancées",
      "stock": 50,
      "nb_avis": 120,
      "categorie": {
        "id": 1,
        "nom": "Électronique"
      }
    },
    {
      "id": 2,
      "nom": "T-shirt",
      "description": "T-shirt en coton",
      "prix": "20",
      "imageUrl": [
        "../assets/image.jpg"
      ],
      "aPropos": "Disponible en plusieurs tailles",
      "stock": 200,
      "nb_avis": 45,
      "categorie": {
        "id": 2,
        "nom": "Vêtements"
      }
    },
    {
      "id": 3,
      "nom": "Canapé",
      "description": "Canapé confortable",
      "prix": "500",
      "imageUrl": [
        "../assets/image.jpg"
      ],
      "aPropos": "Tissu premium",
      "stock": 10,
      "nb_avis": 30,
      "categorie": {
        "id": 3,
        "nom": "Maison"
      }
    }
  ];

  constructor() { }

  getArticles() {
    return this.articles;
  }
}
