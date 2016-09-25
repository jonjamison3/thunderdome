import { Component, OnInit } from '@angular/core';
import {SpotifyService} from  './spotify.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
@Component({
  selector: 'app-apiz',
  templateUrl: './apiz.component.html',
  styleUrls: ['./apiz.component.css']
})
export class ApizComponent implements OnInit {
  // /private searchTerm = new Subject<string>();
  songs: any;
  constructor(public spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.songs = this.spotifyService.getSongs(); 
    // this.songs = this.searchTerm  // wait for 300ms pause in events
    //   .distinctUntilChanged()   // ignore if next search term is same as previous
    //   .switchMap(searchTerm => searchTerm   // switch to new observable each time
    //   // return the http search observable
    //     ? this.spotifyService.songSearch(searchTerm)
    //     // or the observable of empty songs if no search term
    //     : Observable.of<any[]>([]));
  }
  // songSearch(searchTerm: Subject<string>): void {
  //   //this.searchTerm.next(term);
  //   this.songs = searchTerm
  //     .debounceTime(300)        // wait for 300ms pause in events
  //     .distinctUntilChanged()   // ignore if next search term is same as previous
  //     .switchMap(searchTerm => searchTerm   // switch to new observable each time
  //     // return the http search observable
  //       ? this.spotifyService.songSearch(searchTerm)
  //       // or the observable of empty songs if no search term
  //       : Observable.of<any[]>([]));
  // }
  
}
