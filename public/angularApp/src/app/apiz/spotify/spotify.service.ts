import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {
  trackSearchUrl: String; 
  terms: String; 
  response; 
  constructor(public http: Http) {
   }
  // songSearch (term: String):Observable<any[]>{
  //   this.terms = term;
  //   this.response = this.http
  //              .get(``)
  //              .map((r: Response) => this.response = r.json().data);
  //   console.log(this.response);
  //   return this.response;
  // }
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
