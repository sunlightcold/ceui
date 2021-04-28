import { Injectable } from '@angular/core';
import { HttpRequestCache } from '@ceui/cdk/decorators';
import { Observable, Subject } from 'rxjs';
import { CacheService } from './cache.service';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    public readonly cache: CacheService,
    public readonly userApi: UserApiService,
  ) {}

  public readonly refreshSubject = new Subject();

  @HttpRequestCache<UserService>(function() {
    return {
      storage: this.cache,
      refreshSubject: this.refreshSubject,
    };
  })
  getUserPoles(): Observable<any[]> {
    return this.userApi.getUserPoles();
  }

  refreshData(): void {
    console.log('Refresh user roles');
    this.refreshSubject.next();
  }
}
