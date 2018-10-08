import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2SwapiService, Film } from 'angular2-swapi';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  films: Observable<Film[]>;

  constructor(private _swapi: Angular2SwapiService) { }

  ngOnInit() {
    this.films = this._swapi.getFilms();
  }

}
