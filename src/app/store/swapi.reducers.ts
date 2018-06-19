import { ActionReducer, Action } from '@ngrx/store';
import * as fromSwapi from './swapi.actions';
import { initialState } from './swapi.state';

export function SwapiReducer( state = initialState, action: fromSwapi.SwapiActions ) {
  switch (action.type) {
    case fromSwapi.GET_FILMS: {
      const films = state.films;
      films.loading = true;
      return {
        ...state,
        films: films
      };
    };

    case fromSwapi.GET_FILMS_SUCCESS: {
      return {
        ...state,
        films: {items: action.payload.films, loading: false},
        error: null
      };
    };

    case fromSwapi.GET_FILMS_ERROR: {
      return {
        ...state,
        films: {items: [], loading: false},
        error: action.payload.error
      };
    };

    default:
      return state;
  }
}
