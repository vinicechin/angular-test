import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

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
  isCollapsed = true;
  title = 'app';
  swapi$: Observable<any>;
  loading: boolean = true;
  error: any = null;

  constructor(private store: Store<SwapiState>,
              private dataService: DataService,
              private router: Router) {}

  ngOnInit() {
    this.swapi$ = this.store.select('swapi');
    this.swapi$.subscribe((data) => {
      this.loading = this.dataService.setData(data);

      if (data.error) {
        this.error = data.error;
        data.error = null;
        console.log(this.error);
      }
    });

    this.store.dispatch(new SwapiActions.GetFilmsAction())
    this.store.dispatch(new SwapiActions.GetCharsAction())
  }
}
