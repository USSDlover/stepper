import {createAction, props} from '@ngrx/store';
import {IAgent, IUserDetail} from '../interfaces';

export const addImage = createAction(
  '[Register Page] Add Image',
  props<{ uploadedImage: File }>()
);

export const addDetail = createAction(
  '[Register Page] Add Detail',
  props<{ userDetail: IUserDetail }>()
);

export const selectAgent = createAction(
  '[Register Page] Select Agent',
  props<{ agent: IAgent }>()
);
