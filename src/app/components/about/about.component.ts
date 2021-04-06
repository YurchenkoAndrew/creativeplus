import {Component, OnInit} from '@angular/core';
import {About} from '../../data/models/about';
import {AboutService} from '../../data/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about!: About;

  constructor(private service: AboutService) {
  }

  ngOnInit(): void {
    this.initAbout();
  }

  initAbout(): void {
    this.service.get(1).subscribe(response => this.about = response);
  }

}
