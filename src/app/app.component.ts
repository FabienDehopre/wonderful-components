import { Component } from '@angular/core';
import {GalaxyButtonComponent} from "./galaxy-button/galaxy-button.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [GalaxyButtonComponent]
})
export class AppComponent {
  title = 'Hello World!';
}
