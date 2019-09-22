import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackListComponent } from './track-list/track-list.component';
import { MyPlaylistCardsComponent } from './my-playlist-cards/my-playlist-cards.component';


const routes: Routes = [
  {path: "searchedTrack/:value" ,component: TrackListComponent},
  {path: "myPlaylist",component:MyPlaylistCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
