import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {share} from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  activeFragment!: any;

  constructor(public route: ActivatedRoute) {
    this.activeFragment = route.fragment.pipe(share());
  }

  ngOnInit(): void {
  }
}
