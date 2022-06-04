import {createReducer, on} from '@ngrx/store';
import {addDetail, addImage, selectAgent} from './register.actions';
import {Registration} from '../models';

export const initialState = new Registration();

export const registerReducer = createReducer(
  initialState,
  on(addImage, (state, uploadedImage) => {
    return {...state, uploadedImage};
  }),
  on(addDetail, (state, userDetail) => {
    return {...state, userDetail};
  }),
  on(selectAgent, (state, agent) => {
    return {...state, agent};
  })
);
