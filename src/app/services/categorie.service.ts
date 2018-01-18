import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Categorie } from '../model/categorie';
import { Film } from '../model/film';

@Injectable()
export class CategorieService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private categorieUrl = 'http://localhost:8080/Categorie/' ;

    constructor(private http: Http) {}

    getCategories(): Promise<Categorie[]> {
        const url = this.categorieUrl + 'liste';
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Categorie[])
                        .catch(this.handleError);
    }

    getFilms(code: String): Promise<Film[]> {
        const url = this.categorieUrl + 'getFilms?code=' + code;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Film[])
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
