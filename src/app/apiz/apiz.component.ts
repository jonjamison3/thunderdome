import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
@Component({
  selector: 'app-apiz',
  templateUrl: './apiz.component.html',
  styleUrls: ['./apiz.component.css']
})
export class ApizComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'spotify', icon: 'fa-spotify'  },
      { label: 'facebook', icon: 'fa-facebook'  }
    ]
  }
}
