import { AnnonceService } from './../../service/annonce.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Annonce } from 'src/app/class/annonce';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

  addForm: FormGroup;
  dataSource: Array<Annonce>;
  displayedColumns: string[] = ['id', 'titre', 'details', 'prix'];

  constructor(private formBuilder: FormBuilder, private router: Router, private annonceService: AnnonceService) { }

  ngOnInit() {

    this.dataSource = this.annonceService.getAnnonce();

    this.addForm = this.formBuilder.group({
      titre: ['', Validators.required],
      details: ['', Validators.required],
      prix: ['', Validators.required]
    });
  }

    onSubmit() {
        console.log(this.annonceService.createAnnonce(this.addForm.value));
    }

}
