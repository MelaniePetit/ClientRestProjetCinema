import { Film } from './film';
import { Acteur } from './acteur';

export class Personnage {

    public id: number;
    public nom: String;
    public acteur: Acteur;
    public films: Film;
}

