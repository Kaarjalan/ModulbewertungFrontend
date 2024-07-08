import { Component } from '@angular/core';
import { DVollstaendigComponent } from './d-vollstaendig/d-vollstaendig.component';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [DVollstaendigComponent],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export class DocumentationComponent {
  
}
