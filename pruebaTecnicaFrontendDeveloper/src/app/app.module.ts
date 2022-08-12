import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//General Services:
import { ImageService } from './logic/services/image.service';
// Angular Material:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// App Components:
import { HomeComponent } from './modules/home/home.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { MoviesListComponent } from './modules/movies-list/movies-list.component';
import { MovieCardComponent } from './templates/movie-card/movie-card.component';
import { MatCardModule } from '@angular/material/card';
import { MovieDetailsComponent } from './modules/movie-details/movie-details.component';
import { ErrorPageComponent } from './modules/error-page/error-page.component';
import { ActorCardComponent } from './templates/actor-card/actor-card.component';
import { ListBySearchComponent } from './modules/list-by-search/list-by-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    ErrorPageComponent,
    ActorCardComponent,
    ListBySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
