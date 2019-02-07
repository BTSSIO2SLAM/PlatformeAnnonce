import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { AnnonceService } from 'src/app/service/annonce.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private annonceService : AnnonceService) {
    

  }

  ngOnInit() {
  }

  show_article(){

   console.log(this.annonceService.getAnnonce());
  }

}
