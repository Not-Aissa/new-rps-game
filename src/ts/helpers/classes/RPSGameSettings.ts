import storageGet from "../functions/storageGet";
import storageSet from "../functions/storageSet";
import ComputerLevel from "../types/ComputerLevel";
import Theme from "../types/Theme";

class RPSGameSettings {
  private _theme: Theme;
  private _computerLevel: ComputerLevel;
  private _playerMaxPoints: number;
  private _decreasePointWEGI: boolean;

  public constructor() {
    this._theme = storageGet("theme", false) || "light";
    this._computerLevel = storageGet("computerLevel", false) || "easy";
    this._playerMaxPoints = storageGet("playerMaxPoints", true) || 3;
    this._decreasePointWEGI = storageGet("decreasePointWEGI", true) || false;
  }

  public updateTheme(theme: Theme): void {
    this._theme = theme;

    storageSet("theme", this._theme);
  }

  public updateComputerLevel(computerLevel: ComputerLevel): void {
    this._computerLevel = computerLevel;

    storageSet("computerLevel", this._computerLevel);
  }

  public updatePlayerMaxPoints(points: number): void {
    this._playerMaxPoints = points >= 3 && points <= 10 ? points : 3;

    storageSet("playerMaxPoints", this._playerMaxPoints);
  }

  public updateDecreasePointWEGI(decreasePointWEGI: boolean): void {
    this._decreasePointWEGI = decreasePointWEGI;

    storageSet("decreasePointWEGI", this._decreasePointWEGI);
  }

  public get theme(): Theme {
    return this._theme;
  }

  public get computerLevel(): ComputerLevel {
    return this._computerLevel;
  }

  public get playerMaxPoints(): number {
    return this._playerMaxPoints;
  }

  public get decreasePointWEGI(): boolean {
    return this._decreasePointWEGI;
  }
}

export default RPSGameSettings;
