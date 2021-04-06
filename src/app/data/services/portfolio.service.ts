import {Inject, Injectable, InjectionToken} from '@angular/core';
import {CommonService} from './common.service';
import {Portfolio} from '../models/portfolio';
import {PortfolioDao} from '../interfaces/portfolio-dao';
import {HttpClient} from '@angular/common/http';

export const PORTFOLIO_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class PortfolioService extends CommonService<Portfolio> implements PortfolioDao {

  constructor(@Inject(PORTFOLIO_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
