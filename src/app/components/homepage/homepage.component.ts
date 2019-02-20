import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/service/annonce.service';
import { Annonce } from 'src/app/class/annonce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  annonces: Annonce[];
  selectedAnnonce: Annonce;
  error: any;
  showNgFor = false;

  constructor(private router: Router, private annonceService: AnnonceService) {}

  getAnnonces(): void {
    this.annonceService
      .getAnnonces()
      .subscribe(
        annonces => (this.annonces = annonces),
        error => (this.error = error)
      );
  }

  ngOnInit() {
    this.getAnnonces();
    console.log(this.annonces);
  }

  onSelect(annonce: Annonce): void {
    this.selectedAnnonce = annonce;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedAnnonce.Id]);
  }

  /* fonction qui gére le clic sur un article et récupére son id */
  getIdArticle(id) {
   alert('Article :' + id);
  }

}
