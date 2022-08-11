import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/logic/services/movies.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [MoviesService]
})

export class NavBarComponent implements OnInit {

  constructor(
    private _moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this._moviesService.getAllContacts().subscribe((movies => {
      console.log(movies);
    }));

  }
}
