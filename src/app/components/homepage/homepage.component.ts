import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { AnnonceService } from 'src/app/service/annonce.service';
import { Annonce } from 'src/app/class/annonce'
import { Photos } from 'src/app/class/photos'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private annonceService: AnnonceService) {
  }

  ngOnInit() {

    this.annonceService.getAnnonceList().subscribe(val => {

      this.listeAnnonce = val;
   
      });


  }

  listeAnnonce: Array<Annonce> = this.annonceService.getAnnonce();
  listePhotoAnnonce: Array<Photos> = this.annonceService.getPhotoAnnonce();

  /* fonction qui gére le clic sur un article et récupére son id */
  show_article(id) {

   alert("Article :"+id)
  }



}
