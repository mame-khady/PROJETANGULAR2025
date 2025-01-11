import { Component, input } from '@angular/core';
import { Etudiant, Filiere } from '../ipslModele';
import { Listetudiants } from '../data';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-liste-etudiant',
  imports: [ NgFor,NgIf,NgStyle],
  templateUrl: './liste-etudiant.component.html',
  styleUrl: './liste-etudiant.component.scss'
})
export class ListeEtudiantComponent {

  inputType="text";
  inputValue="c'est un input";
  etudiants: Etudiant[]=Listetudiants;
  selectedEtudiant?: Etudiant;

  styleInformatique={
    "color":"green",
    "font-weight":"bold",
    "background-color":"green"
  }
  styleCivil={
    "color":"white",
    "font-weight":"bold",
    "background-color":"red"
  }

  getEtudiantStyle(filiere: Filiere){ 
    if (filiere.code=='INF'){
      return this.styleInformatique;
      
    }
    return this.styleCivil
    }

    selectEtudiant(e: Etudiant){
      this.selectedEtudiant=e;
    }

    styleRowPair={
      "color":"white",
      "background-color":"green",
      "font-weight":"bold"
    }
    styleRowInpair={
      "color":"white",
      "background-color":"yellow",
      "font-weight":"bold"
    }

    styleRow={
      "color":"black",
      "background-color":"brown",
      "font-weight":"bold"
    }
}


