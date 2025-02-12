import { Component, OnInit } from '@angular/core';
import { paniersService } from '../../../Services/paniers.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste-panier',
  standalone: true,
  imports: [NgFor],
  templateUrl: './liste-panier.component.html',
  styleUrl: './liste-panier.component.css'
})
export class ListepanierComponent implements OnInit {

  paniers: { id: number; nom: string; description: string; prix: string; imageUrl: string[]; aPropos: string; stock: number; nb_avis: number; categorie: { id: number; nom: string; }; }[] = [];

  constructor(private panierservice: paniersService) { }

  ngOnInit(): void {
    this.paniers = this.panierservice.getpaniers();
  }

}
