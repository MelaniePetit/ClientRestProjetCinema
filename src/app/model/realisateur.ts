import { Film } from './film';

export class Realisateur {

    public id: number;
    public nom: string;
    public prenom: string;
    public films: Array<Film>;

    constructor() {
        this.films = [];
    }
}
