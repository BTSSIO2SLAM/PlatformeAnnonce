import { Injectable } from '@angular/core';
import { Annonce } from '../class/annonce';
import { Photos } from '../class/photos';
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  listeDesAnnonces: Array<Annonce>;
  listePhoto: Array<Photos>;

  constructor() {

    this.listePhoto = [
      { "id": 1, "libelle": 'switch.jpg', "chemin": '/assets', "annonce": 1 },
      { "id": 2, "libelle": 'moto.JPG', "chemin": '/assets', "annonce": 2 }

    ];

    this.listeDesAnnonces = [
      { "id": 1, "titre": "Switch", "details": 'Fatigué de rager ! Je vend ma switch :)', "prix": 200, "vendeur": 1, "categorie": 'Console', "ville": 'Saint denis' },
      { "id": 2, "titre": "Moto", "details": 'Fatigué de rager ! Je vend ma switch :)', "prix": 200, "vendeur": 1, "categorie": 'Console', "ville": 'Saint denis' },

    ];

  }

  getAnnonce(): Array<Annonce> {
    return this.listeDesAnnonces;
  }

  getPhotoAnnonce(): Array<Photos> {

    return this.listePhoto;
  }

  createAnnonce(annonce: Annonce) {

    this.listeDesAnnonces.push(annonce);
    //return true;
  }


}
