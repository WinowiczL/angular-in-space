import {Component, OnInit, ViewChild} from '@angular/core';
import {SpaceShip} from '../space-ship';
import {FighterShip} from '../fighter-ship';
import {BomberShip} from '../bomber-ship';
import {Pilot} from '../pilot';
import {PilotRoomComponent} from '../pilot-room/pilot-room.component';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot;

  @ViewChild(PilotRoomComponent, {static: false}) pilotRoom: PilotRoomComponent;

  constructor() { }

  ngOnInit() {
    this.spaceShips = [new FighterShip(), new BomberShip(), new FighterShip(), new BomberShip(), new FighterShip()];
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
