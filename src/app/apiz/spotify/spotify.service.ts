import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService {
  trackSearchUrl: String;
  terms: String;
  private base_url = 'https://api.spotify.com/v1';
  constructor(public http: Http) {
   }
  songSearch (term: String):Observable<any[]>{
    this.terms = term;
    return this.http
               .get(``)
               .map((r: Response) => r.json().data);
  }
  getSetTracks() {
    return this.http.get(`${this.base_url}/search?q=thunderdome&type=track`)
    .map(res => res.json().tracks.items);
  }
  searchTracks(term: string) {
    return this.http.get( `${this.base_url}/search?q=${term}&type=track`)
    .debounceTime(300)
    .map(res => res.json().tracks.items);
  }

}
