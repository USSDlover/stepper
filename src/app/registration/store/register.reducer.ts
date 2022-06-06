import {createReducer, on} from '@ngrx/store';
import {addDetail, addImage, selectAgent} from './register.actions';
import {Agent, Registration, UploadedImage, UserDetail} from '../models';

export const initialState = new Registration();

export const registerReducer = createReducer(
  initialState,
  on(addImage, (state, { uploadedImage, type }) => {
    return {...state, image: UploadedImage.create(uploadedImage)};
  }),
  on(addDetail, (state, { userDetail, type }) => {
    return {...state, userDetail: UserDetail.create(userDetail)};
  }),
  on(selectAgent, (state, { agent, type }) => {
    return {...state, agent: Agent.create(agent)};
  })
);
