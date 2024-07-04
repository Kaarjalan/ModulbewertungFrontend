import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { StudentsComponent } from './students/students.component';
import { ModulesComponent } from './modules/modules.component';
import { DocumentationComponent } from './documentation/documentation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    UserComponent, 
    StudentsComponent, 
    ModulesComponent, 
    DocumentationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modulbewertung';
}