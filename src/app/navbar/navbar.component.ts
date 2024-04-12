import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 userInitial:string = "NG";
 name:string = "Nikhil Gupta";
 isExpanded:boolean = true;
}
