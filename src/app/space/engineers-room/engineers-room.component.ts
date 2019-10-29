import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpaceShipType} from '../model/space-ship.type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderFormValue} from '../model/order-form-value';
import {SpaceShip} from '../space-ship';
import {SpaceShipService} from '../space-ship.service';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  spaceShipTypes: ShipType[] = [
    {label: 'Stateczek 2000', value: SpaceShipType.Fighter},
    {label: 'Niszczyciel 2000', value: SpaceShipType.Bomber}
  ];

  orderForm: FormGroup;
  isProducing = false;

  @Output()
  shipProduced = new EventEmitter<SpaceShip>();

  constructor(private spaceShipService: SpaceShipService) {
  }

  ngOnInit() {
    this.orderForm = new FormGroup({
      shipType: new FormControl(null, Validators.required),
      shipCount: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(5)])
    });
  }

  getFormValues(value: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(value).subscribe({
      next: ship => this.shipProduced.emit(ship),
      complete: () => this.isProducing = false
    });
  }

}


