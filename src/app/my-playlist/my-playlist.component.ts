import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.css']
})
export class MyPlaylistComponent implements OnInit {

  
  public tracks=[];
  constructor(private _trackService: TrackService,private router: Router) { }

  ngOnInit() {
    
  }
  onClick(){
    this.router.navigate(['/myPlaylist']);
  }
}
