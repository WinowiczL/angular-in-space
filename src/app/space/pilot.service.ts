import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pilot} from './pilot';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {PilotAttrs} from './model/pilot-attrs';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) {
  }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(`${environment.apiUrl}/pilots`);
  }

  getPilot(id): Observable<Pilot> {
    return this.http.get<PilotAttrs>(`${environment.apiUrl}/pilots/${id}`)
      .pipe(map(pilotAttrs => new Pilot(pilotAttrs)));
  }

  savePilot(pilotAttrs: PilotAttrs) {
    if (pilotAttrs.id) {
      return this.http.put<PilotAttrs>(`${environment.apiUrl}/pilots/${pilotAttrs.id}`, pilotAttrs)
        .pipe(map(pilot => new Pilot(pilot)));
    } else {
      return this.http.post<PilotAttrs>(`${environment.apiUrl}/pilots`, pilotAttrs)
        .pipe(map(pilot => new Pilot(pilot)));
    }
  }
}
