import {createApplication} from "@angular/platform-browser";
import {createCustomElement} from "@angular/elements";
import {GalaxyButtonComponent} from "./app/galaxy-button/galaxy-button.component";

(async () => {
  const app = await createApplication({
    providers: [],
  });
  const galaxyButtonElement = createCustomElement(GalaxyButtonComponent, {
    injector: app.injector,
  });
  customElements.define('wc-galaxy-button', galaxyButtonElement);
})();
