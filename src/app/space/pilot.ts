import {PilotAttrs} from './model/pilot-attrs';

export class Pilot {

  static defaultUrl = '/assets/random.jpg';

  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;

  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultUrl;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1];
  }
}
