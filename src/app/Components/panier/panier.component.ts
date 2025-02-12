import { Component } from '@angular/core';
import { PanierService } from '../../Services/paniers.service';

@Component({
  selector: 'app-panier',
  standalone: true,
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  panier: any[] = [];

  constructor(private panierService: PanierService) {
    this.panier = this.panierService.getPanier();
  }
}
