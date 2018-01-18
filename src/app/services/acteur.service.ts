import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Acteur } from '../model/acteur';

@Injectable()
export class ActeurService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private acteurUrl = 'http://localhost:8080/Acteur/' ;

    constructor(private http: Http) {}

    getActeurs(): Promise<Acteur[]> {
        const url = this.acteurUrl + 'liste';
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Acteur[])
                        .catch(this.handleError);
    }

    getActeur(id: number): Promise<Acteur> {
        const url = this.acteurUrl + id;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json().data as Acteur)
                        .catch(this.handleError);
    }

    createActeur(acteur: Acteur): Promise<Acteur> {
        const url = this.acteurUrl + 'ajout';
        return this.http.post(url, JSON.stringify(acteur), { headers: this.headers })
                        .toPromise()
                        .then(res => res.json() as Acteur)
                        .catch(this.handleError);
    }

    updateActeur(acteur: Acteur): Promise<Acteur> {
        const url = this.acteurUrl + acteur.id;
        return this.http.put(url, JSON.stringify(acteur), { headers: this.headers })
                        .toPromise()
                        .then(() => acteur)
                        .catch(this.handleError);
      }

      deleteActeur(id: number): Promise<void> {
        const url = this.acteurUrl + id;
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
