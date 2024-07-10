import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Abschnitt } from '../bewertung.models/bewertung.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BewertungHeaderComponent } from '../bewertung-header/bewertung-header.component';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export class DocumentationComponent {
  abschnitte: Abschnitt[] = [
    {
    nummer: 1, 
    name: "Ist die Dokumentation formal vollständig?",
    faktor: 0.5,
    bewertungsKriterien: [
      {name: "Seitenangaben", punkte: 0, notiz: "etwas"},
      {name: "Quellenangaben", punkte: 0, notiz: "etwas"},
      {name: "Inhaltsverzeichnis/Gliederung", punkte: 0, notiz: "etwas"},
      {name: "Zeitplan", punkte: 0, notiz: "etwas"},
      {name: "Anlagenverzeichnis",punkte: 0, notiz: "etwas"},
      ],
      notiz: "Input Dozent"
    },
  ];
  gesamtErgebnis: number = 0;
  
  getAbschnittPunkte(abschnitt: Abschnitt):number {    
    const summe = abschnitt.bewertungsKriterien.reduce((sum, kriterium) => sum + kriterium.punkte, 0);
    const durchschnitt = summe / abschnitt.bewertungsKriterien.length;
    return Math.ceil(durchschnitt);
  }
  getAbschnittErgebnis(abschnitt: Abschnitt): number {
    const abschnittPunkte = this.getAbschnittPunkte(abschnitt);
    return abschnittPunkte * abschnitt.faktor;
  }
  updateGesamtErgebnis(){
    this.gesamtErgebnis = this.abschnitte.reduce((total,abschnitt) => {
      return total + this.getAbschnittErgebnis(abschnitt);
    }, 0);
  }
}
