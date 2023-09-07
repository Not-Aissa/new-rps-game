import Input from "../../types/elements/Input";
import Select from "../../types/elements/Select";
import dom from "./Dom";
import RPSGameSettings from "./RPSGameSettings";

const themeSelect = dom.select<Select>("#theme_select");
const playerMaxPointsInput = dom.select<Input>("#pm_points_input");
const decreasePointWEGISelect = dom.select<Select>(
  "#decrease_point_WEGI_select"
);
const computerLevelSelect = dom.select<Select>("#computer_level_select");

class RPSGameSettingsUI {
  public constructor(private _rpsGameSettings: RPSGameSettings) {}

  public handleGameTheme(): void {
    if (this._rpsGameSettings.theme === "light") {
      dom.classList(document.body, "remove", "dark");
      dom.classList(document.body, "add", "light");
    } else {
      dom.classList(document.body, "remove", "light");
      dom.classList(document.body, "add", "dark");
    }
  }

  public handleComputerLevelSelect(): void {
    computerLevelSelect.value = `${this._rpsGameSettings.computerLevel}`;
  }

  public handlePlayerMaxPointsInput(): void {
    playerMaxPointsInput.value = `${this._rpsGameSettings.playerMaxPoints}`;
  }

  public handleGameThemeSelect(): void {
    themeSelect.value = `${this._rpsGameSettings.theme}`;
  }

  public handleDecreasePointWEGISelect(): void {
    decreasePointWEGISelect.value = `${this._rpsGameSettings.decreasePointWEGI}`;
  }
}

export default RPSGameSettingsUI;
