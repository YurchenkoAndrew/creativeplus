import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../data/models/contact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() contact!: Contact;

  constructor() {
  }

  ngOnInit(): void {
  }

}
