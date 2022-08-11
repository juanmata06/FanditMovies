import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})

export class NavBarComponent implements OnInit {

  constructor(
  ) { }

  search = "";
  
  ngOnInit(): void {
  }

  goHome(){
    document.location.href = '';
  }

  goMoviesList(){
    document.location.href = 'movies';
  }

  sendIt(){
    console.log(this.search);
  }
}
