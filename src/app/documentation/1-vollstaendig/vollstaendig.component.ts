import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Abschnitt, BewertungsKriterium } from '../../bewertung.models/bewertung.model';
import { BewertungsService } from '../../../service/service';

@Component({
  selector: 'app-vollstaendig',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vollstaendig.component.html',
  styleUrl: './vollstaendig.component.css'
})
export class VollstaendigComponent implements OnInit{
  @Output() abschnittChanged = new EventEmitter<void>();

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

  ngOnInit() {
    this.bewertungsService.addAbschnitt(this.bewertungsAbschnitte[0]);
  }

  updatePunkte(event: any, kriterium: BewertungsKriterium){
    this.bewertungsService.updatePunkte(kriterium, event);
    this.abschnittChanged.emit();
  }
  
  getAbschnittPunkte(abschnitt: Abschnitt):number {    
    return this.bewertungsService.getAbschnittPunkte (abschnitt);
  }
  getAbschnittErgebnis(abschnitt: Abschnitt): number {
    return this.bewertungsService.getAbschnittErgebnis(abschnitt);
  }
  updateNotiz(){

    this.abschnittChanged.emit();
  }
  
}
