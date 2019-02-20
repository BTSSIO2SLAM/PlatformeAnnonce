import { Notation } from './../class/notation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotationService {

  private notationUrl = 'http://localhost:59825/api/Notations'; // URL to web api

  constructor(private http: HttpClient) {}

  getNotations() {
    return this.http
      .get<Notation[]>(this.notationUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getNotation(id: number): Observable<Notation> {
    return this.getNotations().pipe(
      map(Notations => Notations.find(notation => notation.Id === id))
    );
  }

  save(notation: Notation) {
    if (notation.Id) {
      return this.put(notation);
    }
    return this.post(notation);
  }

  getNotationList(): Observable<any> {
    return this.http.get('http://localhost:59825/api/Notations');
  }

  // Add new Notation
  private post(notation: Notation) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Notation>(this.notationUrl, Notation)
      .pipe(catchError(this.handleError));
  }

  // Update existing Notation
  private put(notation: Notation) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `${this.notationUrl}/${notation.Id}`;
    return this.http.put<Notation>(url, notation).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
