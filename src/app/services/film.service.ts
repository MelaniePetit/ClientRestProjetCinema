import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Film } from '../model/film';

@Injectable()
export class FilmService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private FilmUrl = 'http://localhost:8080/Film/' ;

    constructor(private http: Http) {}

    getFilms(): Promise<Film[]> {
        const url = this.FilmUrl + 'liste';
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Film[])
                        .catch(this.handleError);
    }

    getFilm(id: number): Promise<Film> {
        const url = this.FilmUrl + id;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Film)
                        .catch(this.handleError);
    }

    // Films d'un réalisateur
    getFilmByReal(id: number): Promise<Film> {
        const url = this.FilmUrl + 'liste/' + id;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json().data as Film)
                        .catch(this.handleError);
    }

    // Films d'une catégorie
    getFilmByCat(cat: String): Promise<Film> {
        const url = this.FilmUrl + cat;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json().data as Film)
                        .catch(this.handleError);
    }

    createFilm(film: Film): Promise<Film> {
        const url = this.FilmUrl + 'ajout';
        return this.http.post(url, JSON.stringify(film), { headers: this.headers })
                        .toPromise()
                        .then(res => res.json() as Film)
                        .catch(this.handleError);
    }

    updateFilm(film: Film): Promise<Film> {
        const url = this.FilmUrl + film.id;
        console.log(film);
        return this.http.put(url, JSON.stringify(film), { headers: this.headers })
                        .toPromise()
                        .then(() => film)
                        .catch(this.handleError);
      }

      deleteFilm(id: number): Promise<void> {
        const url = this.FilmUrl + id;
        return this.http.delete(url, { headers: this.headers })
                        .toPromise()
                        .then(() => null)
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
