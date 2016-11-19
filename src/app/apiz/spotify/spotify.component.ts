import { Component, OnInit } from '@angular/core';
import { SpotifyService } from  './spotify.service';
import { Observable  }        from 'rxjs/Observable';
@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
  tracks: Observable<any[]>;
  constructor(public spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.spotifyService.getSetTracks().subscribe(tracks => this.tracks = tracks);
  }
  songSearch(searchTerm): void {
    this.spotifyService.searchTracks(searchTerm).map(res => {
      this.tracks = res;
    }, (err) => {
      console.log(err);
    } );
  }
}
