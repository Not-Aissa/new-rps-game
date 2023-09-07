import Div from "../../types/elements/Div";
import dom from "./Dom";
import Page from "./Page";

const homeHeader = dom.select<Div>(".home-header");
const settingsHeader = dom.select<Div>(".settings-header");

class PageUI {
  public constructor(private _page: Page) {}

  public detectPageLocation(): void {
    switch (this._page.location) {
      case "home":
        dom.classList(homeHeader, "remove", "hide");
        dom.classList(settingsHeader, "add", "hide");
        break;

      case "settings":
        dom.classList(settingsHeader, "remove", "hide");
        dom.classList(homeHeader, "add", "hide");
        break;

      default:
        dom.classList(homeHeader, "remove", "hide");
        dom.classList(settingsHeader, "add", "hide");
    }
  }
}

export default PageUI;
