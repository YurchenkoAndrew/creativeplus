import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {Services} from '../models/services';
import {ServicesDao} from '../interfaces/services-dao';


export const SERVICES_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ServicesService extends CommonService<Services> implements ServicesDao {

  constructor(@Inject(SERVICES_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
