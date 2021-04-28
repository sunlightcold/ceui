import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

const USER_ROLES = ['super_user', 'user'];

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  getUserPoles(): Observable<any[]> {
    return of(true).pipe(
      tap(() => {
        console.log('Request user roles from server ...');
      }),
      delay(2000),
      map(() => USER_ROLES),
      tap(userRoles => {
        console.log(`Recived user roles: ${JSON.stringify(userRoles)}`);
      }),
    );
  }
}
