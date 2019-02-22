
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AnnonceService } from './annonce.service';
import {HttpClientModule, HttpClient,} from '@angular/common/http';
import { Annonce } from '../class/annonce'


/* 
 *Regroupe l'ensemble des tests associés 
 *Test sur le service AnnonceService
*/

describe('AnnonceService', () => {
  let service: AnnonceService;
  let httpMock: HttpTestingController;
  


  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [AnnonceService],
      });

      // inject le service service
      service = TestBed.get(AnnonceService);
      httpMock = TestBed.get(HttpTestingController);
    });

    it('should get the data successful', () => {
      service.getAnnonceAPITest().subscribe(data => {
        expect(data[0].Titre).toBeNull;
      })
    });


    it('should the correct Method GET', () => {

      const fakeListAnnonce: Array<Annonce> = [];
      
      service.getAnnonceAPITest().subscribe((data: Annonce) => {
             // expect(data[0].Titre).toBe("klklj");
          });
          
      //Test de la methode, qui doit etre du GET (Moque ou imitte la response)
      const req = httpMock.expectOne(
          `${service.annonceUrl}`,
          'post to api'
      );
      expect(req.request.method).toBe('GET');  
      httpMock.verify();

      service.getAnnonceAPITest().subscribe((annonces) => {

        expect(annonces.length).toBe(0);
        
      // expect(products).toEqual(someProducts);
        
        });
  });

});


