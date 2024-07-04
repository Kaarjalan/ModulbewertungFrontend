import { Component } from '@angular/core';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent {

  hideModules = true;

  toggleModules(){
    this.hideModules = !this.hideModules;
  }

}
