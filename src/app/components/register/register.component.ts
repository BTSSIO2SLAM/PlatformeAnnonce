
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Utilisateur } from 'src/app/class/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  unUtilisateur: Utilisateur;

  constructor(private router: Router, private utilisateurService: UtilisateurService) {  }

  ngOnInit() {
    this.unUtilisateur = new Utilisateur;
  }

  profileForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    mail: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    ville: new FormControl(''),
  });


  /* Permet de récupérer les valeurs du formulaire pour la création d'un compte */
  registerMe() {

    /* Assign l'utilisateur aux valeurs */
    this.unUtilisateur.Nom = this.profileForm.value.nom;
    this.unUtilisateur.Prenom = this.profileForm.value.prenom;
    this.unUtilisateur.Email = this.profileForm.value.mail;
    this.unUtilisateur.Password = this.profileForm.value.password;
    this.unUtilisateur.Telephone = this.profileForm.value.phone;
    this.utilisateurService.createUtilisateur(this.unUtilisateur);
    alert('utilisateur créee !');
    this.router.navigate(['/login']);
  }

}
