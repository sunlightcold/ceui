/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CeuiEventPluginService } from '../event-plugin.service';

describe('Service: OutZoneEventPlugin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [CeuiEventPluginService],
    teardown: { destroyAfterEach: false }
});
  });

  it('should ...', inject([CeuiEventPluginService], (service: CeuiEventPluginService) => {
    expect(service).toBeTruthy();
  }));
});
