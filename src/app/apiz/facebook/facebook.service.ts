import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { fbAppId, fbAppSecret } from '../../shared/private/fbAppInfo';
import '../../shared/interfaces/facebook';
@Injectable()
export class FacebookService {
  private appId: string = fbAppId;
  private appSecret: string = fbAppSecret;
  private accessToken;  
  private base_url: string = 'https://graph.facebook.com'; 
  constructor(private http: Http) {}
  getToken(){
    let url =`${this.base_url}/oauth/access_token?client_id=${this.appId}&client_secret=${this.appSecret}&grant_type=client_credentials`;
    return this.http.get(url).map(res => res);
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
