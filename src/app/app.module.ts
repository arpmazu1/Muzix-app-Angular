import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http'
import { TrackService } from './track.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';
import { BodyComponent } from './body/body.component';
import { TrackListComponent } from './track-list/track-list.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { MyPlaylistCardsComponent } from './my-playlist-cards/my-playlist-cards.component';
import { UpdateTrackComponent } from './update-track/update-track.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    BodyComponent,
    TrackListComponent,
    MyPlaylistComponent,
    MyPlaylistCardsComponent,
    UpdateTrackComponent,

  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule
    
  ],
  entryComponents: [UpdateTrackComponent],
  exports: [MaterialModule],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
