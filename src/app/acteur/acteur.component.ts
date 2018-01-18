import { Component, OnInit, ViewChild } from '@angular/core';

import { Acteur } from '../model/acteur';
import { ActeurService } from '../services/acteur.service';

@Component({
  selector: 'app-acteur',
  templateUrl: './acteur.component.html',
  styleUrls: ['./acteur.component.css'],
  providers: [ActeurService]
})

export class ActeurComponent implements OnInit {
  title = 'Liste des acteurs';
  displayedColumns = ['nom', 'prenom', 'dateNais', 'dateDeces'];
  acteurs: Acteur[] ;
  tempActeur: Acteur = null;
  newActeur: Acteur;
  selectedActeur: Acteur = null;

  constructor(private acteurService: ActeurService) {
  }

  ngOnInit() {
    this.acteurService.getActeurs().then(acteurs => this.acteurs = acteurs);
    this.newActeur = new Acteur();
  }

  deleteActeur(acteur: Acteur): void {
    this.acteurService.deleteActeur(acteur.id)
                    .then(() => {this.acteurs = this.acteurs.filter(b => b.id !== acteur.id);
                                  if (this.selectedActeur === acteur) {
                                    this.selectedActeur = null;
                                  }
                                });
  }

  createActeur(acteur: Acteur): void {
    this.acteurService.createActeur(acteur)
      .then(data => {
        this.acteurs.push(data);
        this.selectedActeur = null;
      });
  }

  editActeur(acteur: Acteur) {
    this.selectedActeur = acteur;
  }

  updateActeur(acteur: Acteur): void {
    this.selectedActeur = null;
    this.acteurService.updateActeur(acteur);
  }

  testId(id: number): boolean {
    if (this.selectedActeur != null) {
      if (this.selectedActeur.id === id) {
        return true;
      }
    }
    return false;

  }
}
