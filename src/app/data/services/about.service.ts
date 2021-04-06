import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {About} from '../models/about';
import {AboutDao} from '../interfaces/about-dao';

export const ABOUT_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class AboutService extends CommonService<About> implements AboutDao {

  constructor(@Inject(ABOUT_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
