import {Observable} from 'rxjs';

export interface CommonDao<T> {
  getAll(): Observable<T>;
  getId(id: number): Observable<T>;
}
