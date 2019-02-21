import { Component } from '@angular/core';
import { Utilisateur } from './class/utilisateur';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PlatformeAnnonce';
  user: any = localStorage.getItem('currentUser');

constructor( private authenticationService: AuthenticationService ) { }

logout() {
  this.authenticationService.logout();
}


}
