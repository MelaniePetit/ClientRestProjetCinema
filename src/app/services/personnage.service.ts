import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Personnage } from '../model/personnage';

@Injectable()
export class PersonnageService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private acteurUrl = 'http://localhost:8080/Personnage/' ;

    constructor(private http: Http) {}

    getPersonnage(id: number): Promise<Personnage[]> {
        const url = this.acteurUrl + 'liste/film/' + id;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Personnage[])
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
