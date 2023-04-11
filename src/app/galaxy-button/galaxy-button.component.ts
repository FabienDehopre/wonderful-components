import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-galaxy-button',
  standalone: true,
  imports: [],
  templateUrl: './galaxy-button.component.html',
  styleUrls: ['./galaxy-button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalaxyButtonComponent implements AfterViewInit {
  @ViewChildren('.star') stars!: QueryList<HTMLSpanElement>;

  ngAfterViewInit(): void {
    console.log('all stars', this.stars);
  }
}
