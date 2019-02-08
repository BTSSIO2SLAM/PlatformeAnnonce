import { Annonce } from './../class/annonce';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../class/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  listeDesAnnonces: Array<Annonce>;

  constructor() {

    this.listeDesAnnonces = [
      {"id": 1, "titre": "Switch","details":'Fatigué de rager ! Je vend ma switch :)',"prix": 200, "vendeur": { 'id' }, "categorie": 'Console', "ville": 'Saint denis'},
      {"id": 2, "titre": "Switch","details":'Fatigué de rager ! Je vend ma switch :)',"prix": 200, "vendeur": 'Richard', "categorie": 'Console', "ville": 'Saint denis'},
      {"id": 3, "titre": "Switch","details":'Fatigué de rager ! Je vend ma switch :)',"prix": 200, "vendeur": 'Richard', "categorie": 'Console', "ville": 'Saint denis'},
      {"id": 4, "titre": "Switch","details":'Fatigué de rager ! Je vend ma switch :)',"prix": 200, "vendeur": 'Richard', "categorie": 'Console', "ville": 'Saint denis'},
    ];

   }

   getAnnonce(): Array<Annonce>{

    return this.listeDesAnnonces;
   }

   createAnnonce(annonce : Annonce){

      this.listeDesAnnonces.push(annonce);
      //return true;
   }


}
