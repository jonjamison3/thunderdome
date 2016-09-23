import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items: MenuItem[]; 
  
  private activeItem: MenuItem;
  title = 'Thunderdome!';
  ngOnInit(){
    this.items = [
      {label: 'About', icon: 'fa-book', routerLink: ['about']},
      {label: 'Apiz', icon: 'fa-twitter', routerLink: ['apiz']}
    ];

    this.activeItem = this.items[0];
  }
}
