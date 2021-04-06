import {Component, OnInit} from '@angular/core';
import {Services} from '../../data/models/services';
import {AdditionalServices} from '../../data/models/additional-services';
import {ServicesService} from '../../data/services/services.service';
import {AdditionalServicesService} from '../../data/services/additional-services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services!: Services[];
  additionalServices!: AdditionalServices[];

  constructor(
    private service: ServicesService,
    private additionalService: AdditionalServicesService
  ) {
  }

  ngOnInit(): void {
    this.initServices();
    this.initAdditionalServices();
  }

  initServices(): void {
    this.service.getAll().subscribe((response: Services[]) => {
      this.services = response;
    });
  }

  initAdditionalServices(): void {
    this.additionalService.getAll().subscribe(response => {
      this.additionalServices = response;
    });
  }

}
