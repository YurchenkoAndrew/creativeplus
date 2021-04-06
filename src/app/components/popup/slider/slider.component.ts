import {Component, Inject, OnInit} from '@angular/core';
import {OwlOptions, SlidesOutputData} from 'ngx-owl-carousel-o';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PortfolioItem} from '../../../data/models/portfolio-item';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  portfolio!: PortfolioItem[];
  activeSlides!: SlidesOutputData;
  baseUrl = environment.baseUrl;
  id!: string;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    // autoWidth: true,
    // autoHeight: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    // nav: true
  };

  constructor(
    private dialogRef: MatDialogRef<SliderComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [PortfolioItem, PortfolioItem[]],
  ) {
    this.customOptions.startPosition = --data[0].id;
    this.portfolio = data[1];
  }

  ngOnInit(): void {
  }


  // getPassedData(data: SlidesOutputData): void {
  //   this.activeSlides = data;
  //   console.log(this.activeSlides);
  // }

}
