import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthentificationService } from '../../Services/authentification.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent {

  email: string = "";
  password: string = "";

  constructor(private authservice: AuthentificationService) { }


  onSubmit(form: any) {

    if (this.authservice.login(this.email, this.password)) {
      alert("Authentification réussie");
    } else {
      alert("Authentification échouée");
    }
  }
}