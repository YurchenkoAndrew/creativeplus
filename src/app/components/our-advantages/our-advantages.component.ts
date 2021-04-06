import {Component, OnInit} from '@angular/core';
import {OurAdvantage} from '../../data/models/our-advantage';
import {OurAdvantageService} from '../../data/services/our-advantage.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-our-advantages',
  templateUrl: './our-advantages.component.html',
  styleUrls: ['./our-advantages.component.scss']
})
export class OurAdvantagesComponent implements OnInit {

  baseUrl = environment.baseUrl;
  ourAdvantages!: OurAdvantage[];

  constructor(private service: OurAdvantageService) {
  }

  ngOnInit(): void {
    this.initOurAdvantages();
  }

  initOurAdvantages(): void {
    this.service.getAll().subscribe(response => this.ourAdvantages = response);
  }

}
