import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/logic/services/movies.service';
import { Actor } from 'src/app/logic/model/actor';
import { ImageService } from 'src/app/logic/services/image.service';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css'],
  providers: [MoviesService]

})
export class ActorCardComponent implements OnInit {

  constructor(
    private _moviesService: MoviesService,
    private _imageService: ImageService

  ) { }

  @Input() actor: any = {} as any;


  ngOnInit(): void {
    console.log(this.actor);
    this.actor.backdrop_path = this._imageService.getImage(this.actor.profile_path);
  }

}
