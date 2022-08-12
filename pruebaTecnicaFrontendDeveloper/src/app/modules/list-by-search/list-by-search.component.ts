import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/logic/services/movies.service';
import { Movie } from 'src/app/logic/model/movie';

@Component({
  selector: 'app-list-by-search',
  templateUrl: './list-by-search.component.html',
  styleUrls: ['./list-by-search.component.css'],
  providers: [MoviesService]

})
export class ListBySearchComponent implements OnInit {

  constructor(
    private _activRoute: ActivatedRoute,
    private _moviesService: MoviesService
  ) { }

  search = "";
  seconds = 0;
  loading = true;
  now_playing: any = {} as any;
  totalPages = -1;
  actualPage = -1;
  actualPageMovies: Array<Movie> = [];
  foundMovies: Array<Movie> = [];


  ngOnInit(): void {
    this._activRoute.paramMap.subscribe((params) => {
      this.search = params.get("search") + "";
      console.log(this.search);
      this.getTotalPages();
    });

    let timer = setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
      if (this.seconds == 5 && this.foundMovies.length == 0)
        document.location.href = '**';

      if (this.foundMovies.length != 0)
        clearInterval(timer);
    }, 1000);


  }

  getTotalPages() {
    this._moviesService.getTotalPages().subscribe((total => {
      this.now_playing = total;
      this.totalPages = this.now_playing.total_pages;
      console.log(this.totalPages);
      this.findBySearch(this.search, this.totalPages);
    }));
  }

  findBySearch(search: string, totalPages: number) {
    for (let i = 0; i <= totalPages; i++) {
      //We get a page
      this._moviesService.getNowPlayingMovies(i + 1).subscribe((async movies => {
        this.actualPageMovies = movies.results;
        //console.log(this.actualPageMovies);

        //Search the name in that same page
        for (let movie of this.actualPageMovies) {
          if (movie.title.includes(search)) {
            this.foundMovies.push(movie);
            this.showMovies();
          }
        }
      }));
    }
  }

  showMovies() {
    this.loading = false;
  }

}
