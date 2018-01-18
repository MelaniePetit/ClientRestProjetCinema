import { Component, OnInit } from '@angular/core';

import { Realisateur } from '../model/realisateur';
import { Film } from '../model/film';
import { RealisateurService } from '../services/realisateur.service';

@Component({
  selector: 'app-realisateur',
  templateUrl: './realisateur.component.html',
  styleUrls: ['./realisateur.component.css'],
  providers: [RealisateurService]
})
export class RealisateurComponent implements OnInit {
  title = 'Liste des réalisateurs';
  realisateurs: Realisateur[] ;

  constructor(private realisateurService: RealisateurService) {
   }

  ngOnInit() {
    this.realisateurService.getRealisateurs().then(real => {this.realisateurs = real;
      for (let real of this.realisateurs){
        this.realisateurService.getFilms(real.id).then(films => {
          if (films.length !== 0) {
            real.films = films;
          }else {
            real.films = [];
          }
        });
      }
    });
  }

}
