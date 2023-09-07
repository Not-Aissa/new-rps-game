import storageGet from "../functions/storageGet";
import storageSet from "../functions/storageSet";
import IPlayer from "../interfaces/IPlayer";
import GameChoice from "../types/GameChoice";

class Computer implements IPlayer {
  private _choice: GameChoice;
  private _points: number;
  private _winTimes: number;

  public constructor() {
    this._choice = "not-selected";
    this._points = 0;
    this._winTimes = storageGet("computerWinTimes", true) || 0;
  }

  public updateChoice(choice: GameChoice): void {
    this._choice = choice;
  }

  public increasePoints(): void {
    this._points += 1;
  }

  public decreasePoints(): void {
    this._points > 0 ? (this._points -= 1) : (this._points = 0);
  }

  public resetPoints(): void {
    this._points = 0;
  }

  public increaseWinTimes(): void {
    this._winTimes += 1;

    storageSet("computerWinTimes", this._winTimes);
  }

  public resetWinTimes(): void {
    this._winTimes = 0;

    storageSet("computerWinTimes", this._winTimes);
  }

  public get choice(): GameChoice {
    return this._choice;
  }

  public get points(): number {
    return this._points;
  }

  public get winTimes(): number {
    return this._winTimes;
  }
}

export default Computer;
