import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Abschnitt, BewertungsKriterium } from '../../bewertung.models/bewertung.model';
import { BewertungsService } from '../../service';


@Component({
  selector: 'app-fachlich',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fachlich.component.html',
  styleUrl: './fachlich.component.css'
})
export class FachlichComponent implements OnInit {
  @Output() abschnittChanged = new EventEmitter<void>();

  bewertungsAbschnitte: Abschnitt[] = [
    {
    nummer: 6, 
    name: "Fachliche Qualität?",
    faktor: 4,
    bewertungsKriterium: [
      {name: "fachlich richtig", punkte: 0, notiz: ""},
      {name: "begründet", punkte: 0, notiz: ""},
      {name: "fachliche Tiefe / Komplexität", punkte: 0, notiz: ""},
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
    return this.bewertungsService.getAbschnittPunkte(abschnitt);
  }
  getAbschnittErgebnis(abschnitt: Abschnitt): number {
    return this.bewertungsService.getAbschnittErgebnis(abschnitt);
  }
  updateNotiz(){
    this.abschnittChanged.emit();
  }
  
}
