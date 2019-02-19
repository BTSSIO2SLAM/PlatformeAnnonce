import { Annonce } from './../class/annonce';
import { Injectable } from '@angular/core';
import { Photos } from '../class/photos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  listeDesAnnonces: Array<Annonce>;
  listePhoto: Array<Photos>;

  constructor(private http: HttpClient) {

    this.listePhoto = [];
    this.listeDesAnnonces = [];

  }

  getAnnonce(): Array<Annonce> {
    return this.listeDesAnnonces;
  }

  getAnnonceById(id: number) {
    // TODO: send the message _after_ fetching the hero
    return (this.listeDesAnnonces.find(annonce => annonce.id === id));

  }

  getPhotoAnnonce(): Array<Photos> {

    return this.listePhoto;
  }

  createAnnonce(annonce: Annonce) {

    this.listeDesAnnonces.push(annonce);
    //return true;
  }

  getAnnonceList(): Observable<any> {
    //return this.listeTemp;
    return this.http.get('http://10.1.14.24:59825/api/Annonces');
   
  }



}
