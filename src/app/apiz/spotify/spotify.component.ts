import { Component, OnInit } from '@angular/core';
import {SpotifyService} from  './spotify.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
 // /private searchTerm = new Subject<string>();
  tracks: Observable<any[]>;
  constructor(public spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getSetTracks().subscribe(tracks=> this.tracks = tracks);
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
