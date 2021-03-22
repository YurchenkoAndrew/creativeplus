import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainLeadService} from '../../data/services/main-lead.service';
import {MainLead} from '../../data/models/main-lead';
import {Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-main-lead',
  templateUrl: './main-lead.component.html',
  styleUrls: ['./main-lead.component.scss']
})
export class MainLeadComponent implements OnInit, OnDestroy {

  mainLead!: MainLead;
  mainLeadSub!: Subscription;
  baseUrl = environment.baseUrl;

  constructor(private service: MainLeadService) {
  }

  ngOnInit(): void {
    this.initData();
  }

  ngOnDestroy(): void {
    if (this.mainLeadSub) {
      this.mainLeadSub.unsubscribe();
    }
  }

  initData(): void {
    this.mainLeadSub = this.service.get(1).subscribe(response => {
      this.mainLead = response;
    });
  }

}
