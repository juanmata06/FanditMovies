import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/logic/services/movies.service';
import { Movie } from 'src/app/logic/model/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  providers: [MoviesService]

})
export class MoviesListComponent implements OnInit {

  constructor(
    private _moviesService: MoviesService
  ) { }

  nowPlayingMovies: Array<Movie> = [];
  page = 1;

  ngOnInit(): void {
    this.loadMovies(this.page);
  }

  loadMovies(page: number) {
    this._moviesService.getNowPlayingMovies(page).subscribe((movies => {
      let newMovies: Array<Movie> = movies.results;
      this.nowPlayingMovies = this.nowPlayingMovies.concat(newMovies);
      console.log(this.nowPlayingMovies);
    }));
  }

  loadMore() {
    if (this.page < 65) {
      this.page++;
      this.loadMovies(this.page);
    }
  }
}
