import { Injectable } from '@angular/core';
import { DataService } from './Data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private utilisateurs = [
    { email: "eric@gmail.com", password: "1234" },
    { email: "toto@gmail.com", pawword: "1234" }
  ];

  constructor() {
  }


  // Fonction de login
  login(email: string, password: string): boolean {
    return this.utilisateurs.some(utilisateur => {
      return utilisateur.email === email && utilisateur.password === password;
    });
  }

}
