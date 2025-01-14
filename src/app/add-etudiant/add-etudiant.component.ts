import { Component } from '@angular/core';
import { Etudiant, EtudiantDTO, Filiere } from '../ipslModele';
import { listeDep, Listetudiants } from '../data';
import { NgFor } from '@angular/common';
import { FormsModule } from "@angular/forms"
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-etudiant',
  imports: [NgFor, FormsModule, JsonPipe],
  templateUrl: './add-etudiant.component.html',
  styleUrl: './add-etudiant.component.scss'
})
export class AddEtudiantComponent {
  listeFilieres: Filiere[] = [];
  etudiant: EtudiantDTO = {
    code: '12E',
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    telephone: '',
    codeClasse: '',
    codeFiliere: '',
    codeDep: 'GIT'
  };

  listeDep = listeDep;
  listeEtudiant = Listetudiants;

  constructor(
    private _router: Router
  ) { }

  listeFiliere() {
    this.listeFilieres = []
    console.log("function filiere")
    if (!this.etudiant.codeDep) {
      return;
    }

    var filiereMap: Map<String, Filiere> = new Map();
    const etudiants = Listetudiants;
    for (let i = 0; i < etudiants.length; i++) {
      var filiere: Filiere = etudiants[i].classe.filiere;
      if (filiere.depart.code == this.etudiant.codeDep) {
        if (!filiereMap.has(filiere.code)) {
          filiereMap.set(filiere.code, filiere);
          this.listeFilieres.push(filiere);
        }
      }
    }
  }
  enregistrer() {
    console.log("enregistrement etudiant", this.etudiant);
    for (let i = 0; i < this.listeEtudiant.length; i++) {
      var e=this.listeEtudiant;
      var classe = this.listeEtudiant[i].classe;
      if (classe.code == this.etudiant.codeClasse
        && classe.filiere.code == this.etudiant.codeFiliere
        && classe.filiere.depart.code == this.etudiant.codeDep) {  
        var etu: Etudiant = {
          code: this.etudiant.code,
          nom: this.etudiant.nom,
          prenom: this.etudiant.prenom,
          adresse: this.etudiant.adresse,
          email: this.etudiant.email,
          telephone: this.etudiant.telephone,
          classe: classe
        }
        this.listeEtudiant.push(etu);
        this._router.navigate(['etudiants']);
        return;
      }
    }
    
  }
}

