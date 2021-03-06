import { CategorieService } from './../../service/categorie.service';
import { Annonce } from './../../class/annonce';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnnonceService } from 'src/app/service/annonce.service';
import { Categorie } from 'src/app/class/categorie';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { Url } from 'url';
import { LocaleDataIndex } from '@angular/common/src/i18n/locale_data';
import { Utilisateur } from 'src/app/class/utilisateur';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

  @Input() annonce: Annonce;
  @Output() close = new EventEmitter();

  categories: Categorie[];
  error: any;
  navigated = false; // true if navigated here
  fileSelected: any;
  filePath: string;
  progressPourcent: string;
  status: number;
  user: Utilisateur;

  constructor(
    private annonceService: AnnonceService,
    private categorieService: CategorieService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  getCategories(): void {
    this.categorieService
      .getCategories()
      .subscribe(
        categories => (this.categories = categories),
        error => (this.error = error)
      );
  }

  ngOnInit(): void {
    this.getCategories();
    this.route.params.forEach((params: Params) => {
      if (params['Id'] !== undefined) {
        const id = +params['Id'];
        this.navigated = true;
        this.annonceService.getAnnonce(id).subscribe(annonce => (this.annonce = annonce));
      } else {
        this.navigated = false;
        this.annonce = new Annonce();
      }
    });


  }

  save(): void {

    this.annonceService.save(this.annonce).subscribe(annonce => {
      this.annonce = annonce; // saved hero, w/ id if new
      this.goBack(annonce);
    }, error => (this.error = error)); // TODO: Display error message
  }

  goBack(savedAnnonce: Annonce = null): void {
    this.close.emit(savedAnnonce);
    if (this.navigated) {
      window.history.back();
    }
  }

  /* Upload file */

  onFileSelected(event) {
    this.fileSelected = event.target.files[0];

  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.fileSelected, this.fileSelected.name);

    this.http.post('http://localhost:59825/api/upload', fd, {
      reportProgress: true,
      observe: 'events'

    }).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
       this.progressPourcent =  (Math.round(event.loaded / event.total * 100) + '%') ;

       console.log(this.progressPourcent);


      } else if (event.type === HttpEventType.Response) {
        this.filePath = event.body.toString();
        this.annonce.setUrlPhoto(this.filePath);
        this.user = JSON.parse(localStorage.getItem('currentUser'))['user'];
        this.annonce.UtilisateurID = this.user.Id;
        this.status = event.status;

       // console.log(event);


        this.save();
      }
    });








  }

}
