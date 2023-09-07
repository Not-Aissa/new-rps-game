import storageGet from "../functions/storageGet";
import storageSet from "../functions/storageSet";
import PageLocation from "../types/PageLocation";

class Page {
  private _location: PageLocation;

  public constructor() {
    this._location = storageGet("location", false) || "home";
  }

  public updateLocation(location: PageLocation): void {
    this._location = location;

    storageSet("location", this._location);
  }

  public get location(): PageLocation {
    return this._location;
  }
}

export default Page;
