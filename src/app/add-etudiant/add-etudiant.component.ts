import { Component } from '@angular/core';
import { Etudiant, EtudiantDTO, Filiere } from '../ipslModele';
import { listeDep, Listetudiants } from '../data';
import { NgFor } from '@angular/common';
import { FormsModule} from "@angular/forms"


@Component({
  selector: 'app-add-etudiant',
  imports: [NgFor,FormsModule],
  templateUrl: './add-etudiant.component.html',
  styleUrl: './add-etudiant.component.scss'
})
export class AddEtudiantComponent {
  listeFilieres: Filiere[]=[];
  etudiant:EtudiantDTO= {
    code:'',
    nom:'',
    prenom:'',
    adresse:'',
    email:'',
    telephone:'',
    codeClasse:'',
    codeFiliere:'',
    codeDep:'GIT'
  };

  listeDep= listeDep;

  listeFiliere(){
    this.listeFilieres=[]
    console.log("function filiere")
    if(!this.etudiant.codeDep){
      return ;
    }
    
    var filiereMap: Map<String, Filiere>=new Map();
    const etudiants= Listetudiants;
    for(let i=0;i<etudiants.length;i++){
      var filiere:Filiere=etudiants[i].classe.filiere;
      if(filiere.depart.code==this.etudiant.codeDep )
        {
          if(!filiereMap.has(filiere.code)){
            filiereMap.set(filiere.code,filiere);
            this.listeFilieres.push(filiere);
      }
    }
      } 
      }
    }

