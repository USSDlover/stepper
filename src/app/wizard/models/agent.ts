import {IAgent} from '../interfaces';

export class Agent implements Partial<IAgent> {
  firstName: string | undefined;
  id: number | undefined;
  lastName: string | undefined;
  yearsOfExperience: number | undefined;

  constructor() {}

  fullName(): string {
    return this.firstName?.toLocaleUpperCase() + ' ' + this.lastName?.toLocaleUpperCase();
  }

  static create(data: IAgent): IAgent {
    const agent = new Agent();
    return Object.assign(agent, data);
  }

  static dummy(): IAgent {
    return Agent.create({
      firstName: 'Dum-' + (Math.random() * 100000),
      lastName: 'my-' + (Math.random() * 100000),
      yearsOfExperience: Math.random() * 100,
      id: Math.random() * 1000000,
    });
  }
}
