import {Component, Input, OnInit} from '@angular/core';
import {SpaceShip} from '../space-ship';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})
export class SpaceShipComponent implements OnInit {

  @Input() spaceShip: SpaceShip;

  isShieldActive = true;

  constructor() { }

  ngOnInit() {
  }

}
