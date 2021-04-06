import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './common.service';
import {Mail} from '../models/mail';
import {MailDao} from '../interfaces/mail-dao';

export const MAIL_URL_TOKEN = new InjectionToken<string>('url');

@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class MailService extends CommonService<Mail> implements MailDao {

  constructor(@Inject(MAIL_URL_TOKEN) private url: string, private httpClient: HttpClient) {
    super(url, httpClient);
  }
}
