import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export class DocumentationComponent {
  userScore: number = 0;
  totalScore: number = 0;

  updateTotalScore(){
    this.totalScore = this.userScore;
  }
}
