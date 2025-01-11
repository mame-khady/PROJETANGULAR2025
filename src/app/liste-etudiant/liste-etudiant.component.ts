import { Component } from '@angular/core';
import { Etudiant } from '../ipslModele';
import { Listetudiants } from '../data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste-etudiant',
  imports: [ NgFor],
  templateUrl: './liste-etudiant.component.html',
  styleUrl: './liste-etudiant.component.scss'
})
export class ListeEtudiantComponent {
  etudiants: Etudiant[]=Listetudiants;

}
