import { Articles } from "./Articles";
import { Utilisateurs } from "./Utilisateurs";

export class Panier {

  private article_Id: number;
  private quantité: number;
  private prix: number;
  private prix_Total: number;
  private ls_articles: Articles[];
  private utilisateur: Utilisateurs[];


  constructor(article_Id: number, quantité: number, prix: number, prix_Total: number, ls_articles: Articles[], utilisateur: Utilisateurs[]) {
    this.article_Id = article_Id;
    this.quantité = quantité;
    this.prix = prix;
    this.prix_Total = prix_Total;
    this.ls_articles = ls_articles;
    this.utilisateur = utilisateur;
  }

  getArticle_Id(): number {
    return this.article_Id;
  }
  getQuantité(): number {
    return this.quantité;
  }
  getPrix(): number {
    return this.prix;
  }
  getPrix_Total(): number {
    return this.prix_Total;
  }
  getLs_Articles(): Articles[] {
    return this.ls_articles;
  }
  setArticle_Id(article_Id: number) {
    this.article_Id = article_Id;
  }
  setQuantité(quantité: number) {
    this.quantité = quantité;
  }
  setPrix(prix: number) {
    this.prix = prix;
  }
  setPrix_Total(prix_Total: number) {
    this.prix_Total = prix_Total;
  }
  setLs_Articles(ls_articles: Articles[]) {
    this.ls_articles = ls_articles;
  }
  getUtilisateur(): Utilisateurs[] {
    return this.utilisateur;
  }

}