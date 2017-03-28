import { Component, OnInit } from '@angular/core';
import { SpotifyService } from  '../spotify.service';
@Component({
  selector: 'app-spotify-dynamic',
  templateUrl: './dynamic-search.component.html',
  styleUrls: ['./dynamic-search.component.css']
})
export class DynamicSearchComponent implements OnInit {
  term: string;
  tracks: any;
  constructor(public spotifyService: SpotifyService) {
    this.term = 'Thunderdome';
  }

  ngOnInit() {}
  searchDynamic(term: string){
    this.spotifyService.searchTracks(term).subscribe(tracks => this.tracks = tracks);
  }
}
