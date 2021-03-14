/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DestroyService } from '../destroy.service';

describe('Service: Destroy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DestroyService]
    });
  });

  it('should ...', inject([DestroyService], (service: DestroyService) => {
    expect(service).toBeTruthy();
  }));
});
