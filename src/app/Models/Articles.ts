import { Categorie } from "./Categorie";

export class Articles {
  private id: number;
  private nom: string;
  private description: string;
  private prix: string;
  private imageUrl: string[];
  private aPropos: string;
  private stock: number;
  private nb_avis: number;
  private categorie: Categorie;

  constructor(id: number, nom: string, description: string, prix: string, imageUrl: string[], aPropos: string, stock: number, nb_avis: number, categorie: Categorie) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.prix = prix;
    this.imageUrl = imageUrl;
    this.aPropos = aPropos;
    this.stock = stock;
    this.nb_avis = nb_avis;
    this.categorie = categorie;
  }

  getId(): number {
    return this.id;
  }
  getNom(): string {
    return this.nom;
  }
  getDescription(): string {
    return this.description;
  }
  getPrix(): string {
    return this.prix;
  }
  getImageUrl(): string[] {
    return this.imageUrl;
  }
  getAPropos(): string {
    return this.aPropos;
  }
  getStock(): number {
    return this.stock;
  }
  getNb_Avis(): number {
    return this.nb_avis;
  }
  setId(id: number) {
    this.id = id;
  }
  setNom(nom: string) {
    this.nom = nom;
  }
  setDescription(description: string) {
    this.description = description;
  }
  setPrix(prix: string) {
    this.prix = prix;
  }
  setImageUrl(imageUrl: string[]) {
    this.imageUrl = imageUrl;
  }
  setAPropos(aPropos: string) {
    this.aPropos = aPropos;
  }
  setStock(stock: number) {
    this.stock = stock;
  }
  setNb_Avis(nb_avis: number) {
    this.nb_avis = nb_avis;
  }

  getCategorie(): Categorie {
    return this.categorie;
  }

  setCategorie(categorie: Categorie) {
    this.categorie = categorie;
  }
}