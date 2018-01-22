import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Film } from '../model/film';
import { Personnage } from '../model/personnage';
import { FilmService } from '../services/film.service';
import { PersonnageService } from '../services/personnage.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css'],
  providers: [FilmService, PersonnageService]
})

export class DetailFilmComponent implements OnInit {
  title = 'Details du film';
  film: Film ;


  constructor(private filmService: FilmService, private route: ActivatedRoute, private personnageService: PersonnageService) {
    this.getFilm();
  }

  ngOnInit() {
  }

  getFilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.getFilm(id).then(film => {
      this.film = film;
      this.personnageService.getPersonnage(this.film.id).then(personnages => this.film.personnages = personnages);
      console.log(this.film);
    });
  }

}
