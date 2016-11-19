import { Component, OnInit, Input } from '@angular/core';
import { FacebookService } from '../facebook.service';
import { Person } from '../../../shared/classes/person';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [FacebookService]
})
export class UserSearchComponent implements OnInit {
  @Input()
  accessToken: string; 
  people = [];
  searchTerm: string = 'Mel Gibson';
  constructor(public facebookService: FacebookService) { }
  ngOnInit() {
    this.search(this.searchTerm);
  }
  search(name: string){
    return this.facebookService.searchFolks(name, this.accessToken).subscribe(res => this.people = res);
  }
  searchChangeHandler(): void{
    this.search(this.searchTerm);
  }


}
