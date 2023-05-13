import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-night-day-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './night-day-toggle.component.html',
  styleUrls: ['./night-day-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NightDayToggleComponent {

}
