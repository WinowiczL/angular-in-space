import {Pilot} from './pilot';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {PilotService} from './pilot.service';

@Injectable({providedIn: 'root'})
export class PilotResolver implements Resolve<Pilot> {

  constructor(private pilotService: PilotService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pilot> | Promise<Pilot> | Pilot {
    if (route.params.id === 'new') {
      return of(new Pilot());
    } else {
      return this.pilotService.getPilot(+route.params.id);
    }
  }

}
