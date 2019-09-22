import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ITrack } from '../track';

@Component({
  selector: 'app-update-track',
  templateUrl: './update-track.component.html',
  styleUrls: ['./update-track.component.css']
})
export class UpdateTrackComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UpdateTrackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITrack) {}

  
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  
}
