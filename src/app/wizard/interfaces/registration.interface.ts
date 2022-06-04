import {IUserDetail} from './user-detail.interface';
import {IAgent} from './agent.interface';

export interface IRegistration {
  image: string;
  userDetail: IUserDetail;
  agent: IAgent;
}