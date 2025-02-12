import { Routes } from '@angular/router';
import { AuthentificationComponent } from './Components/authentification/authentification.component';
import { ListeArticleComponent } from './Components/articles/liste-article/liste-article.component';
import { ArticleComponent } from './Components/articles/article/article.component';
import { FormArticleComponent } from './Components/articles/form-article/form-article.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: AuthentificationComponent },
    { path: 'articles', component: ListeArticleComponent },
    { path: 'articles/:id', component: ArticleComponent },
    { path: 'add', component: FormArticleComponent }

];
