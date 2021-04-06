import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {ContactService} from '../../data/services/contact.service';
import {Contact} from '../../data/models/contact';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isNoHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => !result.matches),
      shareReplay()
    );
  contact!: Contact;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: ContactService,
  ) {
  }

  ngOnInit(): void {
    this.initContacts();
  }

  initContacts(): void {
    this.service.get(1).subscribe(response => this.contact = response);
  }
}
