import { Action } from '@ngrx/store';

export interface SwapiState {
  film_list: any[];
  loading: boolean;
  error: any;
}

export const initialState: SwapiState = {
  film_list: [],
  loading: false,
  error: null
};
