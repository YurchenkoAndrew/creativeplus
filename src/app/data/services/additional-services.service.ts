import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {AdditionalServices} from '../models/additional-services';
import {AdditionalServicesDao} from '../interfaces/additional-services-dao';


export const ADDITIONAL_SERVICES_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class AdditionalServicesService extends CommonService<AdditionalServices> implements AdditionalServicesDao {

  constructor(@Inject(ADDITIONAL_SERVICES_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
