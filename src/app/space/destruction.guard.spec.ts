import { TestBed, async, inject } from '@angular/core/testing';

import { DestructionGuard } from './destruction.guard';

describe('DestructionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DestructionGuard]
    });
  });

  it('should ...', inject([DestructionGuard], (guard: DestructionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
