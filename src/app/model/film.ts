import { Realisateur } from './realisateur';
import { Personnage } from './personnage';
import { Categorie } from './categorie';

export class Film {
    public id: number;
    public titre: string;
    public duree: string;
    public dateSortie: string;
    public budget: string;
    public montantRecette: string;
    public realisateur: Realisateur;
    public categorie: Categorie;
    public personnages: Personnage[];

    constructor() {
        this.realisateur = new Realisateur();
        this.categorie = new Categorie();
    }
}
