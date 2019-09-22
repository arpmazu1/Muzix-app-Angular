import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrack } from './track';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private _url: string="http://localhost:8080/api/v1/track";

  constructor(private http:HttpClient) { }
  getTrack(): Observable<ITrack[]> {
    return this.http.get<ITrack[]>(this._url);
  }

  getAllTracks(value): Observable<ITrack[]>{
    return this.http.get<ITrack[]>("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+value+"&api_key=27036d1beeac4bd17a15753129f97d61&format=json")
    .pipe(
      map(data => {
        console.log(data);
        let arr: ITrack[] = [];
        for(var track of data['results']['trackmatches']['track']){
          arr.push(new ITrack(0,track['name'],track['artist']));
        }
        return arr;
  } ));
    
  }

  saveTrack(track: ITrack): Observable<ITrack[]>{
    return this.http.post<ITrack[]>(this._url,track);
  }

  deleteTrack(id): Observable<ITrack[]>{
    return this.http.delete<ITrack[]>("http://localhost:8080/api/v1/track/"+id);
}

  updateTrack(track: ITrack): Observable<ITrack[]>{
    return this.http.post<ITrack[]>("http://localhost:8080/api/v1/id",track);
}



}
