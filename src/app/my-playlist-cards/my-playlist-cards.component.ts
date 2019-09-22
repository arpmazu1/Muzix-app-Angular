import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UpdateTrackComponent } from '../update-track/update-track.component';
import { ITrack } from '../track';

@Component({
  selector: 'app-my-playlist-cards',
  templateUrl: './my-playlist-cards.component.html',
  styleUrls: ['./my-playlist-cards.component.css']
})
export class MyPlaylistCardsComponent implements OnInit {

  public tracks=[];
  
  constructor(private _trackService: TrackService,private activatedRoute: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit() {

    
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
     
  
    this._trackService.getTrack()
    .subscribe(data => {this.tracks = data; console.log(this.tracks);});
  });
  }

  onClick(id){
   
    this._trackService.deleteTrack(id)
    .subscribe(data => {this.tracks = data; console.log(this.tracks);});
  }


  openDialog(track):void {
    const dialogRef = this.dialog.open(UpdateTrackComponent, {
      width: '250px',
      data: {id: track.id,name: track.name , comment: track.comment }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
      track.comment = result;
      this._trackService.updateTrack(new ITrack(track.id,track.name,track.comment))
      .subscribe(data => {
        this.tracks.forEach(element => {
          if (element.id === track.id){
            element.comment = result;
          }
        });
        // this.tracks = data; console.log('tracks here: ', this.tracks);
      })
    }
    });
  }

 
}
