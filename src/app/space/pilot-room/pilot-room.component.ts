import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pilot} from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot;

  @Output()
  selected: EventEmitter<Pilot> = new EventEmitter<Pilot>();

  constructor() { }

  ngOnInit() {
    this.pilots = [
      new Pilot('Adam Malysz', '/assets/captain1.png'),
      new Pilot('Bolek Di', '/assets/captain2.png'),
      new Pilot('John Rambo', '/assets/captain3.png')
    ];
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  addPilot(pilot: Pilot) {
    this.pilots.push(pilot);
  }

}
