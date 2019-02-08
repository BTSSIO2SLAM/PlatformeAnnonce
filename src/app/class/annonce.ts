import { Ville } from './ville';
import { Categorie } from './categorie';
import { Utilisateur } from './utilisateur';

export class Annonce {
    id:number;
    titre:string;
    details:string;
    prix:number;
    vendeur:Utilisateur;
    categorie:Categorie;
    ville:Ville;
    photo:string;
}
