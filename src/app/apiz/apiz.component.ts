import { Component, OnInit } from '@angular/core';
import {SpotifyService} from  './spotify.service';
@Component({
  selector: 'app-apiz',
  templateUrl: './apiz.component.html',
  styleUrls: ['./apiz.component.css']
})
export class ApizComponent implements OnInit {
  search: String; 
  constructor(public spotifyService: SpotifyService) { }

  ngOnInit() {
    this.search = 'Some search term';
  }
  spotifySongSearch(search:String){
    this.spotifyService.songSearch(search);
  }

}
