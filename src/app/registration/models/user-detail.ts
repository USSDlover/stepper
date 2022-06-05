import {IStatus, IUserDetail} from '../interfaces';

export class UserDetail implements Partial<IUserDetail> {
  amount: number | undefined;
  date: Date | undefined;
  status: IStatus | undefined;
  sourceOfFund: string | undefined;

  constructor() {}

  static create(data: IUserDetail): IUserDetail {
    const userDetail = new UserDetail();
    return Object.assign(userDetail, data);
  }

  static fromJson(data: IUserDetail): IUserDetail {
    return UserDetail.create({
      date: data.date,
      status: data.status,
      amount: data.amount,
      sourceOfFund: data.sourceOfFund
    })
  }
}
