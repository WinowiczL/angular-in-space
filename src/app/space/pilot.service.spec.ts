import {PilotService} from './pilot.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
class HttpClientMock extends HttpClient {
  constructor() {
    super(null);
  }
}

describe('PilotService', () => {
  let http: HttpClient;
  let pilotService: PilotService;

  beforeEach(() => {
    http = new HttpClientMock();
    pilotService = new PilotService(http);
  });

  describe('getPilot', () => {
    let pilotAttrs;
    beforeEach(() => {
      pilotAttrs = {id: 1, firstName: 'firstName', lastName: 'lastName', imageUrl: 'url'};
      spyOn(http, 'get').and.returnValue(of(pilotAttrs));
    });
    it('should make request for pilot', () => {
      pilotService.getPilot(1);
      expect(http.get).toHaveBeenCalledWith(`${environment.apiUrl}/pilots/1`);
    });
    it('should return observable', () => {
      pilotService.getPilot(1);
      http.get(`${environment.apiUrl}/pilots/1`).subscribe(result => expect(result).toEqual(pilotAttrs));
    });
  });

  describe('savePilot', () => {
    describe('pilot exist', () => {
      let pilotAttrs;
      beforeEach(() => {
        pilotAttrs = {id: 1, firstName: 'firstName', lastName: 'lastName', imageUrl: 'url'};
        spyOn(http, 'put').and.returnValue(of(pilotAttrs));
      });
      it('should make put request', () => {
        pilotService.savePilot(pilotAttrs);
        expect(http.put).toHaveBeenCalledWith(`${environment.apiUrl}/pilots/1`, pilotAttrs);
      });
    });
    describe('pilot not exist', () => {
      let pilotAttrs;
      beforeEach(() => {
        pilotAttrs = {id: null, firstName: 'firstName', lastName: 'lastName', imageUrl: 'url'};
        spyOn(http, 'post').and.returnValue(of(pilotAttrs));
      });
      it('should make put request', () => {
        pilotService.savePilot(pilotAttrs);
        expect(http.post).toHaveBeenCalledWith(`${environment.apiUrl}/pilots`, pilotAttrs);
      });
    });
  });
});
