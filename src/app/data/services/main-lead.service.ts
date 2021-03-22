import {Inject, Injectable, InjectionToken} from '@angular/core';
import {CommonService} from './common.service';
import {MainLead} from '../models/main-lead';
import {MainLeadDao} from '../interfaces/main-lead-dao';
import {HttpClient} from '@angular/common/http';

export const MAIN_LEAD_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class MainLeadService extends CommonService<MainLead> implements MainLeadDao {

  constructor(@Inject(MAIN_LEAD_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
