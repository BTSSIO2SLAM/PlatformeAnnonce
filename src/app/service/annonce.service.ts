import { Annonce } from './../class/annonce';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
      { "id": 1, "titre": "Switch", "details": 'Fatigué de rager ! Je vend ma switch :)', "prix": 200, "vendeur": 1, "categorie": 'Console', "ville": 'Saint denis', "pathPhoto":'./assets/article_img/switch.jpg'},
      { "id": 2, "titre": "Moto", "details": 'Vend moto qui date de 20 ans ! Idéal pour faire la route du litto et éviter les rochers', "prix": 200, "vendeur": 1, "categorie": 'Console', "ville": 'Saint denis', "pathPhoto":'./assets/article_img/moto.JPG' },

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
