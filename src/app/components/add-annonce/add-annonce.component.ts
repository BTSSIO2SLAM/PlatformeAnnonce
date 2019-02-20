import { CategorieService } from './../../service/categorie.service';
import { Annonce } from './../../class/annonce';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnnonceService } from 'src/app/service/annonce.service';
import { Categorie } from 'src/app/class/categorie';

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

  constructor(
    private annonceService: AnnonceService,
    private categorieService: CategorieService,
    private route: ActivatedRoute
  ) {}

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
    console.log(this.categories);
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
    console.log(this.annonce);
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

}






