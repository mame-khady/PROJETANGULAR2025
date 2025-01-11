import { Component, input } from '@angular/core';
import { Etudiant } from '../ipslModele';
import { Listetudiants } from '../data';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-liste-etudiant',
  imports: [ NgFor,NgIf],
  templateUrl: './liste-etudiant.component.html',
  styleUrl: './liste-etudiant.component.scss'
})
export class ListeEtudiantComponent {
  inputType="text";
  inputValue="c'est un input";
  etudiants: Etudiant[]=Listetudiants;

}
