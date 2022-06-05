import {IAgent} from '../interfaces';

export class Agent implements Partial<IAgent> {
  firstName: string | undefined;
  id: number | undefined;
  lastName: string | undefined;
  yearsOfExperience: number | undefined;

  constructor() {}

  fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  static create(data: IAgent): IAgent {
    const agent = new Agent();
    return Object.assign(agent, data);
  }

  static dummy(): IAgent {
    return Agent.create({
      firstName: 'Dum-' + (Math.floor(Math.random() * 100)),
      lastName: 'my-' + (Math.floor(Math.random() * 100)),
      yearsOfExperience: Math.floor(Math.random() * 10),
      id: Math.floor(Math.random() * 1000000),
    });
  }

  static fromJson(data: IAgent): IAgent {
    return Agent.create({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      yearsOfExperience: data.yearsOfExperience
    })
  }
}
