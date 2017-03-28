import { Component, OnInit } from '@angular/core';
import { SpotifyService } from  '../spotify.service';
import { Message } from  'primeng/primeng';
@Component({
  selector: 'app-spotify-fixed',
  templateUrl: './fixed-search.component.html',
  styleUrls: ['./fixed-search.component.css']
})
export class FixedSearchComponent implements OnInit {
  tracks;
  msgs: Message[] = []; 
  constructor(public spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getSetTracks().subscribe((tracks)=> {
      this.tracks = tracks
    }, (err)=>{
      this.msgs.push({severity:'error', summary:'Failed to retrieve tracks!', detail:err})  
    });
  }
}