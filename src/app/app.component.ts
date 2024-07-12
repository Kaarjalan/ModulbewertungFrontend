import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TeilnehmerComponent } from './teilnehmer/teilnehmer.component';
import { ModulesComponent } from './modules/modules.component';
import { BewertungHeaderComponent } from './bewertung-header/bewertung-header.component';
import { OptischComponent } from './documentation/2-optisch/optisch.component';
import { BewertungsService } from './service';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation/documentation.component';
import { VollstaendigComponent } from './documentation/1-vollstaendig/vollstaendig.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    UserComponent, 
    TeilnehmerComponent, 
    ModulesComponent,
    DocumentationComponent,  
    BewertungHeaderComponent,
    VollstaendigComponent,
    OptischComponent,
    CommonModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'modulbewertung';
  gesamtErgebnis$: number = 0;

  constructor(private bewertungsService: BewertungsService){}

  ngOnInit() {
    this.updateGesamtErgebnis();
  }

  updateGesamtErgebnis(){
    this.gesamtErgebnis$ = this.bewertungsService.getGesamtErgebnis();
  }

  onAbschnittChanged(){
    this.updateGesamtErgebnis();
  }
}