import {Component, Input} from '@angular/core';
import {Pilot} from '../pilot';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.css']
})
export class PilotComponent{

  @Input()
  pilot: Pilot;

}
