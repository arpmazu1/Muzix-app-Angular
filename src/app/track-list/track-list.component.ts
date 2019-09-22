import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ITrack } from '../track';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  public tracks:ITrack[];
  public alltracks: ITrack[];
  public tracks1:ITrack[];
  constructor(private _trackService: TrackService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this._trackService.getTrack()
    // .subscribe(data => this.tracks = data);
    
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let value=params.get("value");
  
    this._trackService.getAllTracks(value)
    .subscribe(data => {this.tracks = data; console.log(this.tracks);});
  });
  this._trackService.getTrack().subscribe(data => {this.alltracks = data; console.log(this.alltracks);});
  }

  onClick(track:ITrack){
    // alert(1);
    // alert(this.tracks);
    // alert(this.tracks[this.tracks.length] );
    // alert(this.tracks[this.tracks.length-1].id );
    // alert(this.tracks[this.tracks.length-1].id+1 );
    this._trackService.saveTrack(new ITrack(this.alltracks[this.alltracks.length-1].id+1 ,track.name,track.comment))
    .subscribe(data => {this.tracks1 = data; console.log(this.tracks1);});
  }
  }

