import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pilot} from '../pilot';
import {PilotService} from '../pilot.service';

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

  constructor(private pilotService: PilotService) {
  }

  ngOnInit() {
    this.pilotService.getPilots().subscribe(pilots => this.pilots = pilots);
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
