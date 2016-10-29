import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserSearchService {
  private APP_ID = '';
  private APP_SECRET = '';
  private EXISTING_ACCESS_TOKEN = '';
  constructor(private http: Http) {

  }
  getToken(){
    return this.http.get(`https://graph.facebook.com/oauth/access_token?client_id=${this.APP_ID}&
    client_secret=${this.APP_SECRET}&
    grant_type=fb_exchange_token&
    fb_exchange_token=${this.EXISTING_ACCESS_TOKEN}`).map(res => res.json()[1]);
  }
  searchFolks(term: string) {
    return this.http.get( `http://api.spotify.com/v1/search?q=${term}&type=track`)
    .map(res => res.json().tracks.items);
  }
}
