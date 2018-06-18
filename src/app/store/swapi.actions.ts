import { Action } from '@ngrx/store';

export const GET_FILMS = 'GET_FILMS';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_ERROR = 'GET_FILMS_ERROR';

export class GetFilmsAction implements Action {
  readonly type = GET_FILMS;
}

export class GetFilmsSuccessAction implements Action {
  readonly type = GET_FILMS_SUCCESS;

  constructor(public payload: {films: any[]}) {}
}

export class GetFilmsErrorAction implements Action {
  readonly type = GET_FILMS_ERROR;

  constructor(public payload: {error: any}) {}
}

export type SwapiActions = GetFilmsAction 
                         | GetFilmsSuccessAction 
                         | GetFilmsErrorAction;
