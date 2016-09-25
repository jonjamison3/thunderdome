import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {
  terms: String; 
  response: any; 
  constructor(public http: Http) { }
  // songSearch (term: String):Observable<any[]>{
  //   this.terms = term;
  //   this.response = this.http
  //              .get(``)
  //              .map((r: Response) => r.json().data);
  //   console.log(this.response);
  //   return this.response;
  // }
  getSongs(): Promise.resolve<any>{
    return this.http.get('http://api.spotify.com/v1/search?q=some&type=track').toPromise().then(res=>res.json().tracks as any);
  }

}
