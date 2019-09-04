import { Storage } from "@ionic/storage";

export class SettingsService {
  storage = new Storage({ name: "_myCitationsData" });
  private altBackground = false;

  setBackground(isAlt: boolean) {
    this.altBackground = isAlt;
    this.storage.set('backGroundSettings', this.altBackground);
  }

  isAltBackground() {
    return (this.altBackground);
  }

}
