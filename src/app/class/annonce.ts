import { Categorie } from './categorie';

export class Annonce {
    Id: number;
    Titre: string;
    Details: string;
    Prix: number;
    UrlPhoto: string;
    CategorieID: number;
    Categorie: Categorie;
    UtilisateurID: number;

    public setUrlPhoto(UrlPhoto: string): void {
        this.UrlPhoto = UrlPhoto;
    }
}
