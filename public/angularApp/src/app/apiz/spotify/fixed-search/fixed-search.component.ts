import { Component, OnInit } from '@angular/core';
import {SpotifyService} from  '../spotify.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
@Component({
  selector: 'app-spotify-fixed',
  templateUrl: './fixed-search.component.html',
  styleUrls: ['./fixed-search.component.css']
})
export class FixedSearchComponent implements OnInit {
  tracks: Observable<any[]>;
  constructor(public spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getSetTracks().subscribe(tracks=> this.tracks = tracks);
  }
}