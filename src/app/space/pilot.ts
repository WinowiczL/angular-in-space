import {PilotAttrs} from './model/pilot-attrs';

export class Pilot {

  static defaultUrl = '/assets/random.jpg';

  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  fullName: string;

  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultUrl;
    this.fullName = this.getFullName();
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
