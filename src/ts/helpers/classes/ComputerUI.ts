import Span from "../../types/elements/Span";
import Computer from "./Computer";
import dom from "./Dom";

const computerChoice = dom.select<Span>("#computer_choice");
const computerPoints = dom.select<Span>("#computer_points");
const computerWinTimes = dom.select<Span>("#computer_win_times");

class ComputerUI {
  public constructor(private _computer: Computer) {}

  public updateComputerChoice(): void {
    computerChoice.textContent =
      this._computer.choice === "not-selected"
        ? "Not selected"
        : this._computer.choice;
  }

  public updateComputerPoints(): void {
    computerPoints.textContent = `${this._computer.points}`;
  }

  public updateComputerWinTimes(): void {
    computerWinTimes.textContent = `${this._computer.winTimes}`;
  }
}

export default ComputerUI;
