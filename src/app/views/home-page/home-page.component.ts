import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {Contact} from '../../data/models/contact';
import {Title} from '@angular/platform-browser';
import {Portfolio} from '../../data/models/portfolio';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  fragment!: string;
  fragmentSub!: Subscription;
  @Input() contact!: Contact;
  @Output() portfolio: EventEmitter<Portfolio[]> = new EventEmitter<Portfolio[]>();
  portfolios: Portfolio[];

  constructor(
    public title: Title
  ) {
    this.title.setTitle('ВСЕ ВИДЫ НАРУЖНОЙ И ВНУТРЕННЕЙ РЕКЛАМЫ');
    this.portfolios = [];
  }

  ngOnInit(): void {
  }

  setPortfolio(portfolios: Portfolio[]): void {
    this.portfolios = portfolios;
    console.log(this.portfolios);
    this.portfolio.emit(this.portfolios);
  }
}
