import { Ville } from './class/ville';
import { Categorie } from './categorie';
import { Utilisateur } from './utilisateur';

export class Annonce {
    id:number;
    titre:string;
    libelle:string;
    prix:number;
    vendeur:Utilisateur;
    categorie:Categorie;
    ville:Ville;
}
