import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ActeurComponent } from './acteur/acteur.component';
import { FilmComponent } from './film/film.component';
import { RealisateurComponent } from './realisateur/realisateur.component';
import { CategorieComponent } from './categorie/categorie.component';

const routes: Routes = [
  {'path': '', 'redirectTo': '/home', 'pathMatch': 'full'},
  {'path': 'home', 'component': HomeComponent},
  {'path': 'acteur', 'component': ActeurComponent},
  {'path': 'film', 'component': FilmComponent},
  {'path': 'realisateur', 'component': RealisateurComponent},
  {'path': 'categorie', 'component': CategorieComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ActeurComponent,
    FilmComponent,
    RealisateurComponent,
    CategorieComponent,

  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
