import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {
  terms: String; 
  constructor() { }
  songSearch (term: String){
    this.terms = term; 
    console.log(term);
  }
}
