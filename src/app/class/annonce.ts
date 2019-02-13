import { Ville } from './ville';
import { Categorie } from './categorie';
import { Utilisateur } from './utilisateur';

export class Annonce {
    id:number;
    titre:string;
    details:string;
    prix:number;
    //vendeur:Utilisateur;
    //categorie:Categorie;
    //ville:Ville;
    pathPhoto:string;

    constructor(id: number, titre: string, details: string, prix: number, pathPhoto: string) {
      this.id = id;
      this.titre = titre;
      this.details = details;
      this.prix = prix;
      this.pathPhoto = pathPhoto;
     }

}
