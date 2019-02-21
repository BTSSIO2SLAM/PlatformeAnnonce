import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Utilisateur } from '../class/utilisateur';
import { BehaviorSubject, Observable } from 'rxjs';
import { UtilisateurService } from './utilisateur.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<Utilisateur>;
  public currentUser: Observable<Utilisateur>;
  listeUtilisateurs: Array<Utilisateur>;
  isLogged = false;

  constructor(private http: HttpClient) { }

  public get currentUserValue(): Utilisateur {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:59825/api/authenticate`, { Username: username, Password: password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.isLogged = true;
            }
            return user;
        }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.isLogged = false;
  }

}
