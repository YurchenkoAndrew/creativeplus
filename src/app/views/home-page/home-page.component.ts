import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Contact} from '../../data/models/contact';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  fragment!: string;
  fragmentSub!: Subscription;
  @Input() contact!: Contact;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }


}
