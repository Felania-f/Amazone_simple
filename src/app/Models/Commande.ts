import { Articles } from "./Articles";
import { Utilisateurs } from "./Utilisateurs";

export class Commande {

    private id_commande: number;
    private utilisateur: Utilisateurs;
    private ls_articles: Articles[];
    private prix_total: number;
    private date_commande: string;

    constructor(id_commande: number, utilisateur: Utilisateurs, ls_articles: Articles[], prix_total: number, date_commande: string) {
        this.id_commande = id_commande;
        this.utilisateur = utilisateur;
        this.ls_articles = ls_articles;
        this.prix_total = prix_total;
        this.date_commande = date_commande;
    }

    getId_Commande(): number {
        return this.id_commande;
    }
    getUtilisateur(): Utilisateurs {
        return this.utilisateur;
    }
    getLs_Articles(): Articles[] {
        return this.ls_articles;
    }
    getPrix_Total(): number {
        return this.prix_total;
    }
    getDate_Commande(): string {
        return this.date_commande;
    }

    setId_Commande(id_commande: number) {
        this.id_commande = id_commande;
    }
    setUtilisateur(utilisateur: Utilisateurs) {
        this.utilisateur = utilisateur;
    }
    setLs_Articles(ls_articles: Articles[]) {
        this.ls_articles = ls_articles;
    }
    setPrix_Total(prix_total: number) {
        this.prix_total = prix_total;
    }
    setDate_Commande(date_commande: string) {
        this.date_commande = date_commande;
    }

}