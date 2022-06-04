import {IStatus, IUserDetail} from '../interfaces';

export class UserDetail implements Partial<IUserDetail> {
  amount: number | undefined;
  date: Date | undefined;
  status: IStatus | undefined;
  sourceOfFound: string | undefined;

  constructor() {}

  static create(data: IUserDetail): IUserDetail {
    const userDetail = new UserDetail();
    return Object.assign(userDetail, data);
  }
}
