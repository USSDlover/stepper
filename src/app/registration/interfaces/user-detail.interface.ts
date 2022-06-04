import {IStatus} from './status.interface';

export interface IUserDetail {
  amount: number;
  date: Date;
  status: IStatus;
  sourceOfFound: string;
}
