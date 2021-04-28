/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserApiService } from './user-api.service';

describe('Service: UserApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserApiService]
    });
  });

  it('should ...', inject([UserApiService], (service: UserApiService) => {
    expect(service).toBeTruthy();
  }));
});
