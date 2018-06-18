import { Action } from '@ngrx/store';

export interface State {
  film_list: any[];
  loading: boolean;
  error: any;
}

export const initialState: State = {
  film_list: [],
  loading: false,
  error: null
};
