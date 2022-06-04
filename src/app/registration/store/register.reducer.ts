import {createReducer, on} from '@ngrx/store';
import {addDetail, addImage, selectAgent} from './register.actions';
import {Agent, Registration, UserDetail} from '../models';

export const initialState = new Registration();

export const registerReducer = createReducer(
  initialState,
  on(addImage, (state, data) => {
    return {...state, uploadedImage: data.uploadedImage};
  }),
  on(addDetail, (state, data) => {
    return {...state, userDetail: UserDetail.create(data)};
  }),
  on(selectAgent, (state, data) => {
    return {...state, agent: Agent.create(data)};
  })
);
