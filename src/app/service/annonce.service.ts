import { Annonce } from './../class/annonce';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  // constructor(private http: HttpClient) { }
  // baseUrl: string = 'http://localhost:8080/user-portal/users';

  // getAnnonces() {
  //   return this.http.get<Annonce[]>(this.baseUrl);
  // }

  // getAnnonceById(id: number) {
  //   return this.http.get<Annonce>(this.baseUrl + '/' + id);
  // }

  // createAnnonce(annonce: Annonce) {
  //   return this.http.post(this.baseUrl, annonce);
  // }

  // updateAnnonce(annonce: Annonce) {
  //   return this.http.put(this.baseUrl + '/' + annonce.id, annonce);
  // }

  // deleteAnnonce(id: number) {
  //   return this.http.delete(this.baseUrl + '/' + id);
  // }
}
