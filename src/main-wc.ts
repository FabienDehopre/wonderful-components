import {createApplication} from "@angular/platform-browser";
import {createCustomElement} from "@angular/elements";
import {GalaxyButtonComponent} from "./app/galaxy-button/galaxy-button.component";
import {NightDayToggleComponent} from "./app/night-day-toggle/night-day-toggle.component";

(async () => {
  const app = await createApplication({
    providers: [],
  });
  const galaxyButtonElement = createCustomElement(GalaxyButtonComponent, {
    injector: app.injector,
  });
  const nightDayToggleElement = createCustomElement(NightDayToggleComponent, { injector: app.injector });
  customElements.define('wc-galaxy-button', galaxyButtonElement);
  customElements.define('wc-night-day-toggle', nightDayToggleElement);
})();
