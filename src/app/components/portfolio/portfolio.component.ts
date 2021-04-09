import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../data/services/portfolio.service';
import {Portfolio} from '../../data/models/portfolio';
import {PortfolioItem} from '../../data/models/portfolio-item';
import {environment} from '../../../environments/environment';
import {MatDialog} from '@angular/material/dialog';
import {SliderComponent} from '../popup/slider/slider.component';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


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

  portfolios!: Portfolio[];
  items!: PortfolioItem[];
  baseUrl = environment.baseUrl;

  constructor(
    private service: PortfolioService,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit(): void {
    this.initPortfolios();
  }

  initPortfolios(): void {
    this.service.getAll().subscribe(response => {
      this.portfolios = response;
    });
  }

  onOpenDialog(item: PortfolioItem, portfolio: PortfolioItem[], idxi: number): void {
    const dialogRef = this.dialog.open(SliderComponent, {
      data: [item, portfolio, idxi], width: '65%', height: 'auto', hasBackdrop: true, backdropClass: 'backdrop-class'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.dialog.closeAll();
    });
  }
}
