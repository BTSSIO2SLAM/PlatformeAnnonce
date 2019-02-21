import { Categorie } from './categorie';
import { Utilisateur } from './utilisateur';

export class Annonce {
    Id: number;
    Titre: string;
    Details: string;
    Prix: number;
    UrlPhoto: string;
    CategorieID: number;
    Categorie: Categorie;
    UtilisateurID: number;
    Utilisateur: Utilisateur;

    public setUrlPhoto(UrlPhoto: string): void {
        this.UrlPhoto = UrlPhoto;
    }
}
