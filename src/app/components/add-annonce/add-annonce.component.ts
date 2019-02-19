import { Annonce } from './../../class/annonce';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

  @Input() annonce: Annonce;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private annonceService: AnnonceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
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

}






