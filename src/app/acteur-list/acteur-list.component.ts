import { Component, OnInit, ViewChild } from '@angular/core';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { Acteur } from '../model/acteur';
import { DataService } from '../data.service';

@Component({
  selector: 'app-acteur-list',
  templateUrl: './acteur-list.component.html',
  styleUrls: ['./acteur-list.component.css'],
  providers: [DataService]
})

export class ActeurListComponent implements OnInit {
  title = 'Liste des acteurs';
  displayedColumns = ['nom', 'prenom', 'dateNais', 'dateDeces'];  
  acteurs: Acteur[] ;
  tempActeur : Acteur = null;
  newActeur : Acteur;
  selectedActeur : Acteur = null;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getActeurs().then(acteurs => this.acteurs = acteurs);
    this.newActeur = new Acteur();
  }

  deleteActeur(acteur: Acteur): void {
    this.dataService.deleteActeur(acteur.id)
                    .then(() => {this.acteurs = this.acteurs.filter(b => b.id !== acteur.id);
                                  if (this.selectedActeur === acteur){ 
                                    this.selectedActeur = null; 
                                  };
                                })
  }

  createActeur(acteur: Acteur): void {
    this.dataService.createActeur(acteur)
      .then(acteur => {
        this.acteurs.push(acteur);
        this.selectedActeur = null;
      });
  }
  
  editActeur(acteur : Acteur){ 
    this.selectedActeur = acteur;
  }

  updateActeur(acteur : Acteur): void {
    this.selectedActeur = null;
    this.dataService.updateActeur(acteur);
  }

  testId(id : number): boolean{
    if (this.selectedActeur != null){
      if (this.selectedActeur.id == id){
        return true;
      }
    }
    return false;

  }
}
