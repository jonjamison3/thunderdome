import { Component, OnInit } from '@angular/core';
import { UserSearchComponent } from './user-search/user-search.component';
import { FacebookService } from './facebook.service';
import { graphToken } from '../../shared/private/fbAppInfo';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
  accessToken: string = graphToken; 
  msgs: Message[] = [];
  constructor(private facebookService: FacebookService) { }

  ngOnInit() {
    if(typeof this.accessToken != 'undefined'){
      this.init();
    }
  }
  init(){
    this.facebookService.getToken().subscribe((res)=> {
      this.accessToken = res._body;
    }, (err)=>{
      this.msgs.push({severity:'error', summary:'Failed to get your access token!', detail:'Please add the appropriate file or login with Facebook through this site!'})
    }); 
  }
}
