import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private readonly cache = new Map<string, Observable<any>>();

  setItem(key: string, item: Observable<any>): void {
    this.cache.set(key, item);
  }

  getItem(key: string): Observable<any> | undefined {
    return this.cache.get(key);
  }
}
