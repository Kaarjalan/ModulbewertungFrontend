import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { StudentsComponent } from './students/students.component';
import { ModulesComponent } from './modules/modules.component';
import { BewertungHeaderComponent } from './bewertung-header/bewertung-header.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { OptischComponent } from './documentation/2-optisch/optisch.component';
import { Observable } from 'rxjs';
import { BewertungsService } from './service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    UserComponent, 
    StudentsComponent, 
    ModulesComponent,
    DocumentationComponent,  
    BewertungHeaderComponent,
    OptischComponent,
    CommonModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'modulbewertung';
  gesamtErgebnis$: Observable<number> = this.bewertungsService.gesamtErgebnis$;

  constructor(private bewertungsService: BewertungsService){
  this.gesamtErgebnis$ = this.bewertungsService.gesamtErgebnis$;
}

  ngOnInit() {
  }
}