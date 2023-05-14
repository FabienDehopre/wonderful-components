import {Component, inject} from '@angular/core';
import {GalaxyButtonComponent} from "./galaxy-button/galaxy-button.component";
import {NightDayToggleComponent} from "./night-day-toggle/night-day-toggle.component";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [GalaxyButtonComponent, NightDayToggleComponent]
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  private _mode: 'dark' | 'light' = 'light';
  buttonLabel = 'Click me!';

  get mode(): 'dark' | 'light' {
    return this._mode;
  }

  set mode(value: 'dark' | 'light') {
    this._mode = value;
    this.document.body.classList.toggle('dark');
  }
}
