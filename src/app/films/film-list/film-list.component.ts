import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SwapiState } from '../../store/swapi.state';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  swapi$: Observable<any>;
  films: any[];

  constructor(private store: Store<SwapiState>) { }

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');
    this.swapi$.subscribe((data) => {
      console.log(data);
      this.films = data.films.items;
    });
  }

}
