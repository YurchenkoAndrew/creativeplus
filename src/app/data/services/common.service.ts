import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export class CommonService<T> {

  private readonly url: string;

  constructor(url: string, private httpClient: HttpClient) {
    this.url = url;
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.url);
  }

  get(id: number): Observable<T> {
    return this.httpClient.get<T>(this.url + '/' + id);
  }

  add(obj: T): Observable<T> {
    return this.httpClient.post<T>(this.url, obj);
  }
}
