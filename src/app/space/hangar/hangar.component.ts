import {Component, ViewChild} from '@angular/core';
import {SpaceShip} from '../space-ship';
import {Pilot} from '../pilot';
import {PilotRoomComponent} from '../pilot-room/pilot-room.component';
import {SpaceShipService} from '../space-ship.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent {

  selectedPilot: Pilot;
  spaceShips = new BehaviorSubject<SpaceShip[]>([]);
  @ViewChild(PilotRoomComponent, {static: false}) pilotRoom: PilotRoomComponent;

  constructor(private  spaceShipService: SpaceShipService) {
    this.spaceShips = spaceShipService.hangarShips;
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.addPilot(spaceShip.pilot);
    spaceShip.pilot = null;
  }
}
