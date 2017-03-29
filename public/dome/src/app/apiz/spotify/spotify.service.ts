import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  trackSearchUrl: String;
  terms: String;
  private base_url = 'https://api.spotify.com/v1';
  constructor(public http: Http) {
   }
  getSetTracks() {
    return this.http.get(`${this.base_url}/search?q=thunderdome&type=track`)
    .map(res => res.json());
  }
  searchTracks(term: string) {
    return this.http.get( `${this.base_url}/search?q=${term}&type=track`).map((res) => {
       return res.json();
    });
  }

}
