import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent{

  neuerUser = 'Sen-Meister';
  neuerUserRolle = 'Admin';
  hideRole = true;

  toggle(){
    this.hideRole = !this.hideRole;
  }

}
