import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private items: any[];
  private activeItem: any;
  ngOnInit(){
    this.items = [
      {label: 'Home', icon: 'fa-home', routerLink: ['home'], name: 'Home'},
      {label: 'About', icon: 'fa-book', routerLink: ['about'], name: 'About'},
      {label: 'Apiz', icon: 'fa-twitter', routerLink: ['apiz'], name: 'Apiz'}
    ];
    this.activeItem = this.items[0];
  }

}
