import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Error404Component } from './error404/error404.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeEnseignantComponent } from './liste-enseignant/liste-enseignant.component';
import { DetailEtudiantComponent } from './detail-etudiant/detail-etudiant.component';

export const routes: Routes = [
    {path: '', redirectTo: "/Accueil",pathMatch:'full'},
    {path: 'Accueil', component: AccueilComponent},
    {path:'etudiants',component:ListeEtudiantComponent},
    {path:'enseignants',component:ListeEnseignantComponent},
    {path:'detailEtudiant',component: DetailEtudiantComponent},
    {path:'**',component:Error404Component}
];
