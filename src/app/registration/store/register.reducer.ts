import {createReducer, on} from '@ngrx/store';
import {addDetail, addImage, selectAgent} from './register.actions';
import {Agent, Registration, UploadedImage, UserDetail} from '../models';

export const initialState = new Registration();

export const registerReducer = createReducer(
  initialState,
  on(addImage, (state, data) => {
    return {...state, uploadedImage: UploadedImage.create(data.uploadedImage)};
  }),
  on(addDetail, (state, data) => {
    return {...state, userDetail: UserDetail.fromJson(data)};
  }),
  on(selectAgent, (state, data) => {
    return {...state, agent: Agent.fromJson(data)};
  })
);
