import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BewertungsService } from '../service';
import { VollstaendigComponent } from './1-vollstaendig/vollstaendig.component';
import { OptischComponent } from './2-optisch/optisch.component';
import { SprachlichComponent } from './3-sprachlich/optisch.component';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [CommonModule, FormsModule, VollstaendigComponent, OptischComponent, SprachlichComponent],
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
