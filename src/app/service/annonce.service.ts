import { Annonce } from './../class/annonce';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { Photo } from '../class/photo';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

   annonceUrl = 'http://localhost:59825/api/Annonces'; // URL to web api

  constructor(private http: HttpClient) {}

  getAnnonces() {
    return this.http
      .get<Annonce[]>(this.annonceUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getAnnonceAPITest(): Observable<any> {
    //return this.listeTemp;
    return this.http.get('http://localhost:59825/api/Annonces');
  }

  getAnnonce(id: number): Observable<Annonce> {
    return this.getAnnonces().pipe(
      map(annonces => annonces.find(annonce => annonce.Id === id))
    );
  }

  save(annonce: Annonce) {

    if (annonce.Id) {
      return this.put(annonce);
    }
    return this.post(annonce);
  }

  getAnnonceList(): Observable<any> {
    return this.http.get('http://localhost:59825/api/Annonces');
  }

  // Add new Annonce
  private post(annonce: Annonce) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Annonce>(this.annonceUrl, annonce)
      .pipe(catchError(this.handleError));
  }

  // Update existing Hero
  private put(annonce: Annonce) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `${this.annonceUrl}/${annonce.Id}`;
    return this.http.put<Annonce>(url, annonce).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }

}
