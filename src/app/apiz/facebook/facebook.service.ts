import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FbApp } from 'app/shared/private/fbAppInfo';
import 'app/rxjs-operators';
@Injectable()
export class FacebookService {
  private appId: number = FbApp.id;
  private appSecret: string = FbApp.secret;
  private accessToken: string;  
  private base_url: string = 'https://graph.facebook.com'; 
  constructor(private http: Http) {}
  getToken(){
    let url =`${this.base_url}/oauth/access_token?client_id=${this.appId}&client_secret=${this.appSecret}&grant_type=client_credentials`;
    return this.http.get(url).map((res) => {
      this.accessToken = res.json().body; 
      return res.json().body;
    }, (err) => {
      return 'Facebook token failed to be found, then failed to be updated. Ensure your config file exists in /src/app/shared/private/fbAppInfo .'
    });
  }
  searchFolks(name: string, token: string){
      let url = this.getUrl(`/search?q=${name}&type=user&fields=id,name,picture&limit=25`, token);
      return this.http.get(url).map(res => res.json().data);
  }
  getUrl(query:string, token: string){
    if(typeof token != null){
      return `${this.base_url}${query}&access_token=${token}`;
    }
  }
}
