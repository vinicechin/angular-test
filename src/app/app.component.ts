import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SwapiState } from './store/swapi.state'
import * as SwapiActions from './store/swapi.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  swapi$: Observable<any>;
  films: any[];

  constructor(private store: Store<SwapiState>) {}

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');
    this.swapi$.subscribe((data) => {
      console.log(data);
      this.films = data.film_list;
    });

    this.store.dispatch(new SwapiActions.GetFilmsAction())
  }
}
