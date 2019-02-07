import { Notation } from './notation';
import { Annonce } from './annonce';
import { Utilisateur } from './class/utilisateur';

export class Commentaire {
  id:number;
  contenu:string;
  notation:Notation;
  utilisateur:Utilisateur;
  annonce:Annonce;
}
