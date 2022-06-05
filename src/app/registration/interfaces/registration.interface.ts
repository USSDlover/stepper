import {IUserDetail} from './user-detail.interface';
import {IAgent} from './agent.interface';
import {IUploadedImage} from './uploaded-image.interface';

export interface IRegistration {
  image: IUploadedImage;
  userDetail: IUserDetail;
  agent: IAgent;
}
