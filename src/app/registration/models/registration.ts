import {IRegistration} from '../interfaces';

export class Registration implements Partial<IRegistration> {
  constructor() {}

  static create(data: IRegistration): IRegistration {
    const registration = new Registration();
    return Object.assign(registration, data);
  }
}
