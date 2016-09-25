import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  subtitle = 'Where I hope to be showing off some api neatness';
  constructor() { }

  ngOnInit() {
  }

}
