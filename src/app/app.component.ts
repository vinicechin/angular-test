import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SwapiState } from './store/swapi.state';
import * as SwapiActions from './store/swapi.actions';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'app';
  swapi$: Observable<any>;

  constructor(private store: Store<SwapiState>,
              private dataService: DataService) {}

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');
    this.swapi$.subscribe((data) => {
      // console.log(data);
      // this.films = data.films.items; // needs to add "fimls: any[]" to variables to use this
      // this.dataService.setFilms(data.films.items); // needs to import dataservice if using this
    });

    this.store.dispatch(new SwapiActions.GetFilmsAction())
  }
}
