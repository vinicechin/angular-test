import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import * as swapiActions from './swapi.actions';

@Injectable()
export class SwapiEffects {
  constructor(private http: HttpClient,
              private action$: Actions) {}

  @Effect()
  getFilms$ = this.action$
    .ofType(swapiActions.GET_FILMS)
    .switchMap(() => {
      return this.http.get('https://swapi.co/api/films')
    })
    .map((data: any) => {
      console.log(data.results)
      return new swapiActions.GetFilmsSuccessAction({films: data.results})
    })
    .catch((error) => {
      return Observable.of(
        // new Act.GetTodoFailed({ error: error })
        new swapiActions.GetFilmsErrorAction({error: error})
      );
    })
}
