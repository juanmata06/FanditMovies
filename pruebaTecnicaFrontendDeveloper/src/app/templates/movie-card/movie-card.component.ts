import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/logic/services/movies.service';
import { ImageService } from 'src/app/logic/services/image.service';
import { Movie } from 'src/app/logic/model/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  providers: [MoviesService]

})
export class MovieCardComponent implements OnInit {

  constructor(
    private _moviesService: MoviesService,
    private _imageService: ImageService
  ) { }

  @Input() id: number = {} as number;
  movie: Movie = new Movie();
  
  ngOnInit(): void {
    this._moviesService.getMovieDetails(this.id).subscribe(
      (movie => { 
        this.movie = movie; 
        this.movie.backdrop_path = this._imageService.getImage(movie.backdrop_path);
      }));
  }

  seeMovieDetails(id: number){
    document.location.href = 'movie/' + id;
  }
}
