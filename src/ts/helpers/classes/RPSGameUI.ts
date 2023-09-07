import Button from "../../types/elements/Button";
import Span from "../../types/elements/Span";
import dom from "./Dom";
import RPSGame from "./RPSGame";

const gamePlayResult = dom.select<Span>("#game_play_result");
const playerChoiceBtns = dom.selectAll<Button>(".player-choice-btn");
const developerElm = dom.select<Span>("#developer_elm");
const versionElm = dom.select<Span>("#version_elm");

class RPSGameOutput {
  public constructor(private _rpsGame: RPSGame) {}

  public updateGamePlayResult(): void {
    gamePlayResult.textContent = this._rpsGame.gamePlayResult;
  }

  public disablePlayerChoiceBtns(): void {
    playerChoiceBtns.forEach((playerChoiceBtn) => {
      dom.classList(playerChoiceBtn, "add", "hide");

      playerChoiceBtn.setAttribute("disabled", "true");
    });
  }

  public enablePlayerChoiceBtns(): void {
    playerChoiceBtns.forEach((playerChoiceBtn) => {
      dom.classList(playerChoiceBtn, "remove", "hide");

      playerChoiceBtn.removeAttribute("disabled");
    });
  }

  public showGameDeveloper(): void {
    developerElm.textContent = this._rpsGame.developer;
  }

  public showGameVersion(): void {
    versionElm.textContent = `${this._rpsGame.version}`;
  }
}

export default RPSGameOutput;
