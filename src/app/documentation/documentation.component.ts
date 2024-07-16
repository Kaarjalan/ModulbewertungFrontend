import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BewertungsService } from '../../service/service';
import { OptischComponent } from './2-optisch/optisch.component';
import { SprachlichComponent } from './3-sprachlich/sprachlich.component';
import { PraxisComponent } from "./4-praxis/praxis.component";
import { VorgabenComponent } from "./5-vorgaben/vorgaben.component";
import { FachlichComponent } from "./6-fachlich/fachlich.component";
import { VollstaendigComponent } from './1-vollstaendig/vollstaendig.component';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, FormsModule, VollstaendigComponent, OptischComponent, SprachlichComponent, PraxisComponent, VorgabenComponent, FachlichComponent],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css',
})
export class DocumentationComponent implements OnInit{
  gesamtErgebnis: number = 0;

  constructor(private bewertungsService: BewertungsService){}

  ngOnInit(){
    this.updateGesamtErgebnis();
  }

  onAbschnittChanged(){
    this.updateGesamtErgebnis();
  }

  private updateGesamtErgebnis(){
    this.gesamtErgebnis = this.bewertungsService.getGesamtErgebnis();
  }

  speichernDokumentation(){}
}
