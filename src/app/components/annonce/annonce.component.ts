import { Annonce } from 'src/app/class/annonce';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})

export class AnnonceComponent implements OnInit {

  //monAnnonce: Annonce;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {


  }

  /*geAnnonce(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.annonceService.getAnnonceById(id)
      .subscribe(annonce => this.monAnnonce = annonce);
  }*/




}
