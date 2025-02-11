import { Articles } from "./Articles";

export class Categorie {
    private id: number;
    private nom: string;
    private ls_articles: Articles[];

    constructor(id: number, nom: string, ls_articles: Articles[]) {
        this.id = id;
        this.nom = nom;
        this.ls_articles = ls_articles;
    }

    getId(): number {
        return this.id;
    }

    getNom(): string {
        return this.nom;
    }

    setId(id: number) {
        this.id = id;
    }

    setNom(nom: string) {
        this.nom = nom;
    }

    getArticles(): Articles[] {
        return this.ls_articles;
    }

    setArticles(ls_articles: Articles[]) {
        this.ls_articles = ls_articles;
    }

}