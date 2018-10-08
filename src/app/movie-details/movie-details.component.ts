import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Angular2SwapiService, Film } from 'angular2-swapi';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  film: Observable<Film>;
  id: number;

  constructor(private route: ActivatedRoute, private _swapi: Angular2SwapiService) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.film = this._swapi.getFilm(this.id);
  }

}
