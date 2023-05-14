import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-night-day-toggle',
  standalone: true,
  imports: [],
  templateUrl: './night-day-toggle.component.html',
  styleUrls: ['./night-day-toggle.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NightDayToggleComponent {
  isPressed = false;
  @Input() mode: 'dark' | 'light' = 'light';
  @Output() readonly modeChange = new EventEmitter<'dark' | 'light'>();

  toggle() {
    this.isPressed = !this.isPressed;
    this.modeChange.emit(this.isPressed ? 'dark' : 'light');
  }
}
