import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as swapiActions from './swapi.actions';

@Injectable()
export class SwapiEffects {
  constructor(private http: HttpClient,
              private action$: Actions) {}

  @Effect()
  getFilms$ = this.action$.ofType(swapiActions.GET_FILMS)
    .pipe(
      switchMap(() => {
        return this.http.get('https://swapi.co/api/films').pipe(
          map((data) => {
            console.log(data)
            // new swapiActions.GetFilmsSuccessAction(data)
          }),
          catchError(error =>
            of(new swapiActions.GetFilmsErrorAction(error))
          )
        )
      })
    );
}
