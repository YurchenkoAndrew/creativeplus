import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewChecked {

  fragment!: string;
  fragmentSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url) {
          this.route.fragment.subscribe(fragment => this.fragment = fragment);
        }
      }
    });
    console.log(this.fragment);
  }

  ngAfterViewChecked(): void {

    try {
      if (this.fragment != null) {
        // @ts-ignore
        document.getElementById(this.fragment).scrollIntoView({behavior: 'smooth'});
      }
    } catch (e) {
      console.log(e, 'error');
    }
  }
}
