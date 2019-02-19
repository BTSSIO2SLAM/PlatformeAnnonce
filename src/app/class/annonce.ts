import { Ville } from './ville';
import { Categorie } from './categorie';
import { Utilisateur } from './utilisateur';

export class Annonce {
    Id: number;
    Titre: string;
    Details: string;
    Prix: number;
    UrlPhoto: string;
    CategorieID: number;
    UtilisateurID: number;
}
