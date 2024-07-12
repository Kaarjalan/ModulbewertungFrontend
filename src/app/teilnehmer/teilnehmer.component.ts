import { Component } from '@angular/core';

@Component({
  selector: 'app-teilnehmer',
  standalone: true,
  imports: [],
  templateUrl: './teilnehmer.component.html',
  styleUrl: './teilnehmer.component.css'
})
export class TeilnehmerComponent {
  hideStudent = true;

  toggleStudent(){
    this.hideStudent = !this.hideStudent;
  }

}