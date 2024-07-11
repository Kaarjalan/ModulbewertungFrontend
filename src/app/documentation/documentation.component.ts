import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Abschnitt, BewertungsKriterium } from '../bewertung.models/bewertung.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BewertungsService } from '../service';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css',
})
export class DocumentationComponent implements OnInit{
  bewertungsAbschnitte: Abschnitt[] = [];

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
