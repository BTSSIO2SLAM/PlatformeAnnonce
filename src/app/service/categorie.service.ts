import { Categorie } from './../class/categorie';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private categorieUrl = 'http://localhost:59825/api/Categories'; // URL to web api

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http
      .get<Categorie[]>(this.categorieUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getCategorie(id: number): Observable<Categorie> {
    return this.getCategories().pipe(
      map(Categories => Categories.find(categorie => categorie.Id === id))
    );
  }

  save(categorie: Categorie) {
    if (categorie.Id) {
      return this.put(categorie);
    }
    return this.post(categorie);
  }

  getCategorieList(): Observable<any> {
    return this.http.get('http://localhost:59825/api/Categories');
  }

  // Add new Categorie
  private post(categorie: Categorie) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Categorie>(this.categorieUrl, Categorie)
      .pipe(catchError(this.handleError));
  }

  // Update existing Categorie
  private put(categorie: Categorie) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `${this.categorieUrl}/${categorie.Id}`;
    return this.http.put<Categorie>(url, categorie).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
