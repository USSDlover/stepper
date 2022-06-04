import {createReducer, on} from '@ngrx/store';
import {addDetail, addImage, selectPerson} from './register.actions';

export const initialState = {};

export const registerReducer = createReducer(
  initialState,
  on(addImage, (state) => {
    return state;
  }),
  on(addDetail, (state) => {
    return state;
  }),
  on(selectPerson, (state) => {
    return state;
  })
);
