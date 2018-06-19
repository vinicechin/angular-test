import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SwapiState } from '../../store/swapi.state';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  swapi$: Observable<SwapiState>;
  id: number;
  currentFilm: any;
  filmCharacters: any[];

  constructor(private route: ActivatedRoute,
              private store: Store<SwapiState>,
              private dataService: DataService) { }

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');

    this.swapi$.subscribe((data) => {
      if (!this.currentFilm || this.filmCharacters.length <= 0) {
        this.setCurrentFilm();
      }
    });

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.setCurrentFilm();
        }
      )
  }

  setCurrentFilm() {
    this.currentFilm = this.dataService.getFilms()[this.id - 1];
    if (this.currentFilm) {
      console.log(this.currentFilm)
      this.filmCharacters = [];
      this.dataService.getCharactersFromUrls(this.currentFilm.characters, this.filmCharacters)
    }
  }

}
