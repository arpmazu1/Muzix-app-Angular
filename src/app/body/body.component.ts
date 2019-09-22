import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { ITrack } from '../track';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public tracks=[];
  constructor(private _trackService: TrackService) { }

  ngOnInit() {
    // this._trackService.saveTrack(new ITrack(102,"Who do you love","5 Seconds of Summer"))
    // .subscribe(data => {this.tracks = data; console.log(this.tracks);});

    // this._trackService.deleteTrack(101)
    // .subscribe(data => {this.tracks = data; console.log(this.tracks);});

    // this._trackService.updateTrack(new ITrack(2,"Señorita","Shawn Mendes & Camelia Cabello"))
    // .subscribe(data => {this.tracks = data; console.log(this.tracks);});
  }

  }


