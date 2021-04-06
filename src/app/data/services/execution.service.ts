import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {Execution} from '../models/execution';
import {ExecutionDao} from '../interfaces/execution-dao';


export const EXECUTION_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ExecutionService extends CommonService<Execution> implements ExecutionDao {

  constructor(@Inject(EXECUTION_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
