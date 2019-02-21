import { TestBed } from '@angular/core/testing';

import { AnnonceService } from './annonce.service';

describe('AnnonceService: LanguagesServiceHttp ', () => {

  //Déclaration des variables pour le service
  let service;

   //setup
   beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpModule ],
    providers: [ LanguagesServiceHttp ]
  }));
  
  beforeEach(inject([LanguagesServiceHttp], s => {
    service = s;
  }));
  
  //specs
  it('Doit renvoyer une liste d\'annonce', async(() => {
    service.get().subscribe(x => { 
      expect(x).toContain('en');
      expect(x).toContain('es');
      expect(x).toContain('fr');
      expect(x.length).toEqual(3);
    });
  }));
});
