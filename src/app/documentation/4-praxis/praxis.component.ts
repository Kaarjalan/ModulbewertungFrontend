import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Abschnitt, BewertungsKriterium } from '../../bewertung.models/bewertung.model';
import { BewertungsService } from '../../service';


@Component({
  selector: 'app-praxis',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './praxis.component.html',
  styleUrl: './praxis.component.css'
})
export class PraxisComponent implements OnInit {
  @Output() abschnittChanged = new EventEmitter<void>();

  bewertungsAbschnitte: Abschnitt[] = [
    {
    nummer: 4, 
    name: "Praxisbezogene und zielorientierte Arbeitsbläufe?",
    faktor: 2,
    bewertungsKriterium: [
      {name: "Projektanstoß", punkte: 0, notiz: ""},
      {name: "Planung und Durchführung", punkte: 0, notiz: ""},
      {name: "Abschluss / Projektergebnis", punkte: 0, notiz: ""},
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
