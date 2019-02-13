import { Injectable } from '@angular/core';
import { Utilisateur } from '../class/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  listeUtilisateurs: Array<Utilisateur>;

  constructor() { }

  getUtilisateurs(): Array<Utilisateur> {
    return this.listeUtilisateurs;
  }

  createUtilisateur(utilisateur: Utilisateur) {
    this.listeUtilisateurs.push(utilisateur);
  }

}
