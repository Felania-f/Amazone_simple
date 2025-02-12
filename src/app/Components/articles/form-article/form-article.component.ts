import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../Services/categories.service';
import { NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-article',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './form-article.component.html',
  styleUrl: './form-article.component.css'
})
export class FormArticleComponent implements OnInit {


  article = {
    nom: "",
    description: "",
    prix: "",
    imageUrl: [
      "../assets/image.jpg"
    ],
    aPropos: "",
    stock: 0,
    nb_avis: 0,
    categorie: { id: -1, nom: "" }
  }

  categories: { id: number; nom: string; }[] | undefined;

  constructor(private categorieservice: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.categorieservice.getCategories();
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
