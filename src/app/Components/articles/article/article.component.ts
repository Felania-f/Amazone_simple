import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../../../Services/articles.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  id: number = -1;
  article: { id: number; nom: string; description: string; prix: string; imageUrl: string[]; aPropos: string; stock: number; nb_avis: number; categorie: { id: number; nom: string; } } | undefined;

  constructor(private route: ActivatedRoute,private articleservice:ArticlesService,private router:Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) || 0;
    this.article = this.articleservice.getArticleById(this.id);
    if (this.id == 0 || this.article == undefined) {
      this.router.navigate(['/articles']);
    }
  }
  

}
