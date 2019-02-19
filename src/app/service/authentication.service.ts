import { Injectable } from '@angular/core';
import { Utilisateur } from '../class/utilisateur';
import { BehaviorSubject, Observable } from 'rxjs';
import { UtilisateurService } from './utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<Utilisateur>;
  public currentUser: Observable<Utilisateur>;
  listeUtilisateurs: Array<Utilisateur>;
  isLogged: boolean;

  constructor( private utilisateurService: UtilisateurService) { }

  public get currentUserValue(): Utilisateur {
    return this.currentUserSubject.value;
  }

  login(pseudo: string, password: string){
    if ((pseudo == 'admin')&&(password=='1234')) {
      this.isLogged = true;
      return true;
    } else {
      this.isLogged = false;
      return false;
    }
  }

  isLoggedIn(){
  }

  logout(){
  }


}
