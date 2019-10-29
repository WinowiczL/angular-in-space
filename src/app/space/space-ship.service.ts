import {EventEmitter, Injectable, Output} from '@angular/core';
import {OrderFormValue} from './model/order-form-value';
import {BehaviorSubject, interval, Observable, of, Subject} from 'rxjs';
import {SpaceShip} from './space-ship';
import {SpaceShipType} from './model/space-ship.type';
import {map, take, tap} from 'rxjs/operators';
import {FighterShip} from './fighter-ship';
import {BomberShip} from './bomber-ship';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {

  productionTime = 2000;
  hangarShips = new BehaviorSubject<SpaceShip[]>([]);

  @Output()
  ships = new EventEmitter();

  constructor() {
  }

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const shipClass = formValues.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return interval(this.productionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
      tap((spaceShips) => this.hangarShips.next([...this.hangarShips.getValue(), spaceShips]))
    );
  }

  removeShip(shipIndex: number) {
    const ships = [...this.hangarShips.getValue()];
    ships.splice(shipIndex, 1);
    this.hangarShips.next(ships);
  }
}
