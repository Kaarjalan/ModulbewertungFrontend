import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Abschnitt, BewertungsKriterium } from '../../bewertung.models/bewertung.model';
import { BewertungsService } from '../../../service/service';

@Component({
  selector: 'app-optisch',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './optisch.component.html',
  styleUrl: './optisch.component.css'
})
export class OptischComponent implements OnInit {
  @Output() abschnittChanged = new EventEmitter<void>();

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
