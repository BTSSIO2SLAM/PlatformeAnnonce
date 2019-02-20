import { Notation } from './notation';
import { Annonce } from './annonce';
import { Utilisateur } from './utilisateur';

export class Commentaire {
  Id: number;
  Contenu: string;
  notation: Notation;
  utilisateur: Utilisateur;
  annonce: Annonce;
}
