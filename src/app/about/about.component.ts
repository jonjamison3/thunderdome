import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  subtitle = 'where I\'ll be practicing use of apis to the theme of a terrible movie!';
  constructor() { }

  ngOnInit() {
  }

}
