import {Component, OnInit} from '@angular/core';
import {Execution} from '../../data/models/execution';
import {ExecutionService} from '../../data/services/execution.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-order-execution-scheme',
  templateUrl: './order-execution-scheme.component.html',
  styleUrls: ['./order-execution-scheme.component.scss']
})
export class OrderExecutionSchemeComponent implements OnInit {

  executions!: Execution[];
  baseUrl = environment.baseUrl;

  constructor(private service: ExecutionService) {
  }

  ngOnInit(): void {
    this.initExecutions();
  }

  initExecutions(): void {
    this.service.getAll().subscribe(response => this.executions = response);
  }
}
