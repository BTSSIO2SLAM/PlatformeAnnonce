import { AnnonceService } from './../../service/annonce.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private annonceService: AnnonceService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      titre: ['', Validators.required],
      libelle: ['', Validators.required],
      photo: ['', Validators.required]
    });
  }

    ajouter():void{
      this.annonceService.createAnnonce(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['homepage']);
      });
  }

}
