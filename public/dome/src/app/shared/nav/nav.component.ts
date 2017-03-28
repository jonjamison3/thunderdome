import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  title: String;
  private items: MenuItem[];
  private activeItem: MenuItem;
  ngOnInit(){

    this.items = [
      {label: 'Home', icon: 'fa-home', routerLink: ['home']},
      {label: 'Apiz', icon: 'fa-twitter', routerLink: ['apiz']},
      {label: 'About', icon: 'fa-book', routerLink: ['about']}
    ];
    this.activeItem = this.items[0];
  }

}
