import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Abschnitt, BewertungsKriterium } from '../../bewertung.models/bewertung.model';
import { BewertungsService } from '../../service';

@Component({
  selector: 'app-vollstaendig',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vollstaendig.component.html',
  styleUrl: './vollstaendig.component.css'
})
export class VollstaendigComponent {
  bewertungsAbschnitte: Abschnitt[] = [
    {
    nummer: 1, 
    name: "Ist die Dokumentation formal vollständig?",
    faktor: 0.5,
    bewertungsKriterium: [
      {name: "Seitenangaben", punkte: 0, notiz: ""},
      {name: "Quellenangaben", punkte: 0, notiz: ""},
      {name: "Inhaltsverzeichnis/Gliederung", punkte: 0, notiz: ""},
      {name: "Zeitplan", punkte: 0, notiz: ""},
      {name: "Anlagenverzeichnis",punkte: 0, notiz: ""},
      ],
      notiz: ""
    },
  ];

  constructor(private bewertungsService: BewertungsService){}

  ngOnInit(){
    this.bewertungsService.updateGesamtErgebnis(this.bewertungsAbschnitte);
  }
  
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
