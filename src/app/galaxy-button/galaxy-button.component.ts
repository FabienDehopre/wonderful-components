import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef, EventEmitter, Output, QueryList, ViewChildren,
  ViewEncapsulation
} from '@angular/core';

const RANDOM = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

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
  @Output() readonly click = new EventEmitter<void>();
  @ViewChildren('star') stars!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.stars.forEach(item => {
      (item.nativeElement as HTMLSpanElement).setAttribute('style', `
--angle: ${RANDOM(0, 360)};
--duration: ${RANDOM(6, 20)};
--delay: ${RANDOM(1, 10)};
--alpha: ${RANDOM(40, 90) / 100};
--size: ${RANDOM(2, 6)};
--distance: ${RANDOM(40, 200)};
    `);
    });
  }
}
