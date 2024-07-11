import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Abschnitt, BewertungsKriterium } from '../../bewertung.models/bewertung.model';
import { BewertungsService } from '../../service';


@Component({
  selector: 'app-optisch',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './optisch.component.html',
  styleUrl: './optisch.component.css'
})
export class OptischComponent{
  bewertungsAbschnitte: Abschnitt[] = [
    {
    nummer: 2, 
    name: "Wie ist der optische Eindruck?",
    faktor: 0.5,
    bewertungsKriterium: [
      {name: "Seitenlayout, Design, Gestaltung", punkte: 0, notiz: ""},
      {name: "Übersichtlichkeit", punkte: 0, notiz: ""},
      ],
      notiz: ""
    },
  ];

  constructor(private bewertungsService: BewertungsService){}
  
  getAbschnittPunkte(abschnitt: Abschnitt):number {    
    return this.bewertungsService.getAbschnittPunkte (abschnitt);
  }
  getAbschnittErgebnis(abschnitt: Abschnitt): number {
    return this.bewertungsService.getAbschnittErgebnis(abschnitt);
  }
  updateNotiz(){}
  updatePunkte(event: any, kriterium: BewertungsKriterium){
    this.bewertungsService.updatePunkte(kriterium, event);
    this.bewertungsService.updateGesamtErgebnis(this.bewertungsAbschnitte);
  }
}
