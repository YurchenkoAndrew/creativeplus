import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {Contact} from '../models/contact';
import {ContactDao} from '../interfaces/contact-dao';

export const CONTACT_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ContactService extends CommonService<Contact> implements ContactDao {

  constructor(@Inject(CONTACT_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
