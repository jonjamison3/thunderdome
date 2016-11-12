import { Component, OnInit } from '@angular/core';

import {UserSearchService} from './user-search.service';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {
  people: any[] = [];
  constructor(public userSearchService: UserSearchService) { }
  ngOnInit() {
  }

}
