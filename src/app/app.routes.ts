import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
    {path: '', redirectTo: "/Accueil",pathMatch:'full'},
     {path: 'Accueil', component: AccueilComponent},
     {path:'**',component:Error404Component}
];
