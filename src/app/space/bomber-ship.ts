import {SpaceShip} from './space-ship';
import {Pilot} from './pilot';

export class BomberShip extends SpaceShip {

  constructor(pilot?: Pilot) {
    super('Niszczyciel 2000', '/assets/ship2.png', pilot);
  }
}
