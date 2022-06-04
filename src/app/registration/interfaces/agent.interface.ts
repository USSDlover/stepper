export interface IAgent {
  firstName: string;
  lastName: string;
  yearsOfExperience: number;
  id?: number;
  fullName?: () => string;
}
