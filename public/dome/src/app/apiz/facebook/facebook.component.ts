import { Component, OnInit } from '@angular/core';
import { UserSearchComponent } from './user-search/user-search.component';
import { FacebookService } from './facebook.service';
//import { FbApp } from './../../shared/private/fbAppInfo';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {
  accessToken: string;
  msgs: Message[] = [];
  constructor(private facebookService: FacebookService) { }

  ngOnInit() {
    //this.accessToken = FbApp.accessToken; 
    if(typeof this.accessToken == 'undefined'||null){
      this.init();
    }
  }
  init(){
    // this.facebookService.getToken().subscribe((res)=> {
    //   this.accessToken = res;
    // }, (err)=>{
    //   this.msgs.push({severity:'error', summary:'Failed to get your access token!', detail:err})
    // });
  }
}
