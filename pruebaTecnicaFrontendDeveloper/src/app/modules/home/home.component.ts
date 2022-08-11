import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/logic/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {

  }

}
