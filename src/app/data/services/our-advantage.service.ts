import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {OurAdvantage} from '../models/our-advantage';
import {OurAdvantageDao} from '../interfaces/our-advantage-dao';

export const OUR_ADVANTAGE_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class OurAdvantageService extends CommonService<OurAdvantage> implements OurAdvantageDao {

  constructor(@Inject(OUR_ADVANTAGE_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
