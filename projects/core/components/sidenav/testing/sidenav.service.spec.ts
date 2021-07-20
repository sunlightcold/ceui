/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CeuiSidenavService } from '../sidenav.service';

describe('Service: Sidenav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CeuiSidenavService]
    });
  });

  it('should ...', inject([CeuiSidenavService], (service: CeuiSidenavService) => {
    expect(service).toBeTruthy();
  }));
});
