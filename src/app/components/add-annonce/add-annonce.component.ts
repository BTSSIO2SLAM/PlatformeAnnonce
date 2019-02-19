import { AnnonceService } from './../../service/annonce.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/class/annonce';
import { Photos } from 'src/app/class/photos';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  monAnnonce: Annonce;
  addForm: FormGroup;
  dataSource: MatTableDataSource<Annonce>;
  displayedColumns: string[] = ['id', 'titre', 'details', 'prix'];

  //Définie l'objet file
  selectedFile: File = null;

  constructor(private formBuilder: FormBuilder, private router: Router, private annonceService: AnnonceService, public dialog: MatDialog, private http: HttpClient) { }

  listeAnnonce: Array<Annonce> = this.annonceService.getAnnonce();
  listePhotoAnnonce: Array<Photos> = this.annonceService.getPhotoAnnonce();

  /* fonction qui gére le clic sur un article et récupére son id */
  show_article(id) {
    console.log(id);
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];

}

onClick(event){
  const fd = new  FormData();
  fd.append('image', this.selectedFile, this.selectedFile.name)
  //this.http.post('http://Addresse');

  
}


  ngOnInit() {
    

    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.annonceService.getAnnonce();
    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      titre: ['', Validators.required],
      details: ['', Validators.required],
      prix: ['', Validators.required],
      pathPhoto: ['', Validators.required]
    });
  }

  onSubmit() {

    this.monAnnonce = this.addForm.value;
    this.annonceService.createAnnonce(this.addForm.value);
    this.dataSource.data = this.annonceService.getAnnonce();
  
  }

}






