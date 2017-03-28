import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {
  trackSearchUrl: String;
  terms: String;
  private base_url = 'https://api.spotify.com/v1';
  constructor(public http: Http) {
   }
  getSetTracks() {
    return this.http.get(`${this.base_url}/search?q=thunderdome&type=track`)
    .map(res => res.json().tracks.items);
  }
  searchTracks(term: string) {
    return this.http.get( `${this.base_url}/search?q=${term}&type=track`).debounceTime(300).map(res => {
       return res.json().tracks.items;
    });
  }

}
