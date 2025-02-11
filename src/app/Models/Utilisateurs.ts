export class Utilisateurs {
    
   private id :number;
   private nom :string;
   private email :string;
   private mot_De_Passe :string;
   private localisation :string;
   private lieu :string;

    constructor(id:number, nom:string, email:string, mot_De_Passe:string, localisation:string, lieu:string){
         this.id = id;
         this.nom = nom;
         this.email = email;
         this.mot_De_Passe = mot_De_Passe;
         this.localisation = localisation;
         this.lieu = lieu;
    }

    getId():number{
        return this.id;
    }
    getNom():string{
        return this.nom;
    }
    getEmail():string{
        return this.email;
    }
    getMot_De_Passe():string{
        return this.mot_De_Passe;
    }
    getLocalisation():string{
        return this.localisation;
    }
    getLieu():string{
        return this.lieu;
    }
    setId(id:number){
        this.id = id;
    }
    setNom(nom:string){
        this.nom = nom;
    }
    setEmail(email:string){
        this.email = email;
    }
    setMot_De_Passe(mot_De_Passe:string){
        this.mot_De_Passe = mot_De_Passe;
    }
    setLocalisation(localisation:string){
        this.localisation = localisation;
    }
    setLieu(lieu:string){
        this.lieu = lieu;
    }
}