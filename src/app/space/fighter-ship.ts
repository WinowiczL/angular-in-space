import {SpaceShip} from './space-ship';
import {Pilot} from './pilot';

export class FighterShip extends SpaceShip {

  constructor(pilot?: Pilot) {
    super('Stateczek 2000', 'assets/ship.png', pilot);
  }
}
