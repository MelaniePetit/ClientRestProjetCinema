import { Component, OnInit, ViewChild } from '@angular/core';

import { Film } from '../model/film';
import { Realisateur } from '../model/realisateur';
import { Categorie } from '../model/categorie';

import { FilmService } from '../services/film.service';
import { RealisateurService } from '../services/realisateur.service';
import { CategorieService } from '../services/categorie.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  providers: [FilmService, RealisateurService, CategorieService]
})

export class FilmComponent implements OnInit {
  title = 'Liste des films';
  films: Film[] ;
  tempFilm: Film = null;
  newFilm: Film;
  selectedFilm: Film = null;

  realisateurs: Realisateur[];
  categories: Categorie[];

  constructor(private filmService: FilmService, private categorieService: CategorieService,
    private realisateurService: RealisateurService) { }

  ngOnInit() {
    this.filmService.getFilms().then(films => this.films = films);
    this.categorieService.getCategories().then(cat => this.categories = cat);
    this.realisateurService.getRealisateurs().then(real => this.realisateurs = real);
    this.newFilm = new Film();
  }

  deleteFilm(film: Film): void {
    this.filmService.deleteFilm(film.id)
                    .then(() => {this.films = this.films.filter(b => b.id !== film.id);
                                  if (this.selectedFilm === film) {
                                    this.selectedFilm = null;
                                  }
                                });
  }

  createFilm(film: Film): void {
    this.filmService.createFilm(film)
      .then(data => {
        this.films.push(data);
        this.selectedFilm = null;
      });
  }

  editFilm(film: Film) {
    this.selectedFilm = film;
  }

  updateFilm(film: Film): void {
    this.selectedFilm = null;
    this.filmService.updateFilm(film);
  }

  testId(id: number): boolean {
    if (this.selectedFilm != null) {
      if (this.selectedFilm.id === id) {
        return true;
      }
    }
    return false;

  }

}
