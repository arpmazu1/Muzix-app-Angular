import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 public tracks=[];
  constructor(private _trackService: TrackService,private router:Router) { }

  ngOnInit() {
  }
  // getSearched(){
  //   this._trackService.getAllTracks()
  //   .subscribe(data => this.tracks = data);
  // }
  onClick(value){
    // this._trackService.getAllTracks(value)
    // .subscribe(data => {this.tracks = data; console.log(this.tracks)});
    this.router.navigate(['/searchedTrack',value]);
    
  }
}
