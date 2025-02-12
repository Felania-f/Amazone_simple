import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../Services/articles.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste-article',
  standalone: true,
  imports: [NgFor],
  templateUrl: './liste-article.component.html',
  styleUrl: './liste-article.component.css'
})
export class ListeArticleComponent implements OnInit {

  articles: { id: number; nom: string; description: string; prix: string; imageUrl: string[]; aPropos: string; stock: number; nb_avis: number; categorie: { id: number; nom: string; }; }[] = [];

  constructor(private articleservice: ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.articleservice.getArticles();
  }
}
