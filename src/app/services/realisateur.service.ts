import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Realisateur } from '../model/realisateur';
import { Film } from '../model/film';

@Injectable()
export class RealisateurService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private realisateurUrl = 'http://localhost:8080/Realisateur/' ;

    constructor(private http: Http) {}

    getRealisateurs(): Promise<Realisateur[]> {
        const url = this.realisateurUrl + 'liste';
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Realisateur[])
                        .catch(this.handleError);
    }

    getRealisateur(id: Realisateur): Promise<Realisateur> {
        const url = this.realisateurUrl + id;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Realisateur)
                        .catch(this.handleError);
    }

    getFilms(id: number): Promise<Film[]> {
        const url = this.realisateurUrl + 'films/' + id;
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
