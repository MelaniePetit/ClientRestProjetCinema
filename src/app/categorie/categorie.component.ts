import { Component, OnInit } from '@angular/core';

import { Categorie } from '../model/categorie';
import { Film } from '../model/film';
import { CategorieService } from '../services/categorie.service';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
  providers: [CategorieService]
})
export class CategorieComponent implements OnInit {
  title = 'Liste des catégories';
  categories: Categorie[] ;

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.categorieService.getCategories().then(cat => {
      this.categories = cat;
      for (let cat of this.categories){
        this.categorieService.getFilms(cat.code).then(films => {
          if (films.length !== 0) {
            cat.films = films;
          }else {
            cat.films = [];
          }
        });
      }
    });
  }

}
