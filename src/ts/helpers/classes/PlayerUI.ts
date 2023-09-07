import Span from "../../types/elements/Span";
import dom from "./Dom";
import Player from "./Player";

const playerChoice = dom.select<Span>("#player_choice");
const playerPoints = dom.select<Span>("#player_points");
const playerWinTimes = dom.select<Span>("#player_win_times");

class PlayerUI {
  public constructor(private _player: Player) {}

  public updatePlayerChoice(): void {
    playerChoice.textContent =
      this._player.choice === "not-selected"
        ? "Not selected"
        : this._player.choice;
  }

  public updatePlayerPoints(): void {
    playerPoints.textContent = `${this._player.points}`;
  }

  public updatePlayerWinTimes(): void {
    playerWinTimes.textContent = `${this._player.winTimes}`;
  }
}

export default PlayerUI;
