/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CeuiToastService } from '../toast.service';

describe('Service: Toast', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [CeuiToastService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should ...', inject([CeuiToastService], (service: CeuiToastService) => {
    expect(service).toBeTruthy();
  }));
});
