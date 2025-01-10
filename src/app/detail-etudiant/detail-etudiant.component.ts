import { Component, OnInit } from '@angular/core';
import { Carte, Etudiant } from '../ipslModele';
import { carte, etudiant1 } from '../data';
import { JsonPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-etudiant',
  standalone: true,
  imports: [JsonPipe,
    DatePipe
  ],
  templateUrl: './detail-etudiant.component.html',
  styleUrl: './detail-etudiant.component.scss'
})
export class DetailEtudiantComponent implements OnInit{
  carte?: Carte;
  etudiant?: Etudiant;
  ngOnInit(): void {
      this.carte=carte;
      this.etudiant=etudiant1
  }

  getanneeScolaire(): String{
    if(this.carte?.anneeDebut)
      {
      return `${this.carte?.anneeDebut} - ${this.carte?.anneeDebut + 1}`;
    }
    return "Annee nom Determiner"
  }


}
