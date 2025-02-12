import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: any[] = [];

  constructor() { }

  ajouterAuPanier(article: any) {
    this.panier.push(article);
    console.log('Article ajouté au panier:', article);
  }

  getPanier() {
    return this.panier;
  }
}
