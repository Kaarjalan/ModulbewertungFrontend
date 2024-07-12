import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Abschnitt, BewertungsKriterium } from '../../bewertung.models/bewertung.model';
import { BewertungsService } from '../../service';


@Component({
  selector: 'app-vorgaben',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './vorgaben.component.html',
  styleUrl: './vorgaben.component.css'
})
export class VorgabenComponent implements OnInit {
  @Output() abschnittChanged = new EventEmitter<void>();

  bewertungsAbschnitte: Abschnitt[] = [
    {
    nummer: 5, 
    name: "Beschreibung der Vorgaben / Einflussfaktoren?",
    faktor: 2,
    bewertungsKriterium: [
      {name: "wirtschaftlich", punkte: 0, notiz: ""},
      {name: "technisch", punkte: 0, notiz: ""},
      {name: "organisatorisch", punkte: 0, notiz: ""},
      {name: "zeitlich", punkte: 0, notiz: ""},
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
