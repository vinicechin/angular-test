import { ActionReducer, Action } from '@ngrx/store';
import * as fromSwapi from './swapi.actions';
import { initialState } from './swapi.state';

export function SwapiReducer( state = initialState, action: fromSwapi.SwapiActions ) {
  switch (action.type) {
    case fromSwapi.GET_FILMS: {
      return {
        ...state,
        loading: true
      };
    };

    case fromSwapi.GET_FILMS_SUCCESS: {
      return {
        ...state,
        film_list: action.payload.films,
        loading: false,
        error: null
      };
    };

    case fromSwapi.GET_FILMS_ERROR: {
      return {
        ...state,
        film_list: [],
        loading: false,
        error: action.payload.error
      };
    };

    default:
      return state;
  }
}
