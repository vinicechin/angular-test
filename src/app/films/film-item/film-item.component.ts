import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SwapiState } from '../../store/swapi.state';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  swapi$: Observable<any>;
  films: any[];
  id: number;
  currentFilm: any;

  constructor(private route: ActivatedRoute,
              private store: Store<SwapiState>) { }

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');

    this.swapi$.subscribe((data) => {
      this.films = data.films.items;
      if (!this.currentFilm) {
        this.setCurrentFilm();
      }
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          if (this.films) {
            this.setCurrentFilm();
          }
        }
      )
  }

  setCurrentFilm() {
    this.currentFilm = this.films[this.id - 1];
  }

}
