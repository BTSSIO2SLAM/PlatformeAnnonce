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

    this.listePhoto = [];

    this.listeDesAnnonces = [];

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
