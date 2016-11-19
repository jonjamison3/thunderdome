import { Component, OnInit } from '@angular/core';
import { UserSearchService } from './user-search.service';
import { Person } from '../../../shared/classes/person';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {
  people: Person[] = [];
  searchTerm: string = 'Mel Gibson';
  constructor(public userSearchService: UserSearchService) { }
  ngOnInit() {
  }
  getStarter(): Person {
    return this.userSearchService.searchFolks(this.searchTerm).subscribe(res => res);
  }

}
