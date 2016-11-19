import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public apiChoices: string[] = ['Spotify', 'Snapchat', 'Facebook'];
  constructor(private router: Router) { }
  ngOnInit() {
  }
  apiNavigate(api_name: string): void {
    let choice = api_name.toLowerCase();
    this.router.navigate(['/apiz', choice]);
  }
}
