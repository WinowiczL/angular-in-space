import { TestBed } from '@angular/core/testing';

import { PilotService } from './pilot.service';

describe('PilotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PilotService = TestBed.get(PilotService);
    expect(service).toBeTruthy();
  });
});
