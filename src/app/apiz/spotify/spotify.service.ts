import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {
  trackSearchUrl;
  terms;
  constructor(public http: Http) {
   }
  songSearch (term) {
    this.terms = term;
    return this.http.get(``).map((r: Response) => r.json().data);
  }
  getSetTracks() {
    return this.http.get( 'http://api.spotify.com/v1/search?q=thunderdome&type=track')
    .map(res => res.json().tracks.items);
  }
  searchTracks(term: string) {
    return this.http.get( `http://api.spotify.com/v1/search?q=${term}&type=track`)
    .debounceTime(300)
    .map(res => res.json().tracks.items);
  }

}
