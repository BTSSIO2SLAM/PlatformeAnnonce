import { Commentaire } from './../class/commentaire';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private commentaireUrl = 'http://localhost:59825/api/Commentaires'; // URL to web api

  constructor(private http: HttpClient) {}

  getCommentaires() {
    return this.http
      .get<Commentaire[]>(this.commentaireUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getCommentaire(id: number): Observable<Commentaire> {
    return this.getCommentaires().pipe(
      map(Commentaires => Commentaires.find(commentaire => commentaire.Id === id))
    );
  }

  save(commentaire: Commentaire) {
    if (commentaire.Id) {
      return this.put(commentaire);
    }
    return this.post(commentaire);
  }

  getCommentaireList(): Observable<any> {
    return this.http.get('http://localhost:59825/api/Commentaires');
  }

  // Add new Commentaire
  private post(commentaire: Commentaire) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Commentaire>(this.commentaireUrl, Commentaire)
      .pipe(catchError(this.handleError));
  }

  // Update existing Commentaire
  private put(commentaire: Commentaire) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const url = `${this.commentaireUrl}/${commentaire.Id}`;
    return this.http.put<Commentaire>(url, commentaire).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
