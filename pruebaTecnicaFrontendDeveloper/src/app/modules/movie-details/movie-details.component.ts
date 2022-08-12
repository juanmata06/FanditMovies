import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/logic/services/movies.service';
import { ImageService } from 'src/app/logic/services/image.service';
import { Movie } from 'src/app/logic/model/movie';
import { Actor } from 'src/app/logic/model/actor';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  providers: [MoviesService]

})
export class MovieDetailsComponent implements OnInit {

  constructor(
    private _activRoute: ActivatedRoute,
    private _moviesService: MoviesService,
    private _imageService: ImageService
  ) { }

  movieId = "-1";
  movie: Movie = new Movie();
  cast: any = [];
  isMobile = false;


  ngOnInit(): void {
    if(screen.width < 414)
    this.isMobile = true;

    this._activRoute.paramMap.subscribe((params) => {
      this.movieId = params.get("id") + "";
      console.log(this.movieId);
      this.getMovieDetails();
      this.getCast();
    });
  }

  getMovieDetails() {
    this._moviesService.getMovieDetails(parseInt(this.movieId)).subscribe(
      (movie) => {
        this.movie = movie;
        console.log(this.movie);
        this.movie.backdrop_path = this._imageService.getImage(movie.backdrop_path);
      }, (error) => {
        console.log("Error: " + error);
        document.location.href = '**/';
      });
  }

  getCast(){
    this._moviesService.getCastByMovieId(parseInt(this.movieId)).subscribe((actors => {
      this.cast = actors;
      this.cast = this.cast.cast.slice(0,6);
      console.log(this.cast);
    }));
  }
}
