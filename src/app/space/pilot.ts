export class Pilot {

  static defaultUrl = '/assets/random.jpg';

  firstName: string;
  lastName: string;
  imageUrl: string;

  constructor(fullName: string, imageUrl = Pilot.defaultUrl) {
    this.fullName = fullName;
    this.imageUrl = imageUrl;
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
