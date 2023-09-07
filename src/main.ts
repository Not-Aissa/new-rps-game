import Computer from "./ts/helpers/classes/Computer";
import ComputerUI from "./ts/helpers/classes/ComputerUI";
import dom from "./ts/helpers/classes/Dom";
import Page from "./ts/helpers/classes/Page";
import PageUI from "./ts/helpers/classes/PageUI";
import Player from "./ts/helpers/classes/Player";
import PlayerUI from "./ts/helpers/classes/PlayerUI";
import RPSGame from "./ts/helpers/classes/RPSGame";
import RPSGameSettings from "./ts/helpers/classes/RPSGameSettings";
import RPSGameSettingsUI from "./ts/helpers/classes/RPSGameSettingsUI";
import RPSGameUI from "./ts/helpers/classes/RPSGameUI";
import ComputerLevel from "./ts/helpers/types/ComputerLevel";
import Theme from "./ts/helpers/types/Theme";
import Button from "./ts/types/elements/Button";
import Input from "./ts/types/elements/Input";
import Select from "./ts/types/elements/Select";

const playerChoiceBtns = dom.selectAll<Button>(".player-choice-btn");
const goHomeBtn = dom.select<Button>("#go_home_btn");
const goSettingsBtn = dom.select<Button>("#go_settings_btn");
const themeSelect = dom.select<Select>("#theme_select");
const computerLevelSelect = dom.select<Select>("#computer_level_select");
const playerMaxPointsInput = dom.select<Input>("#pm_points_input");
const decreasePointWEGISelect = dom.select<Select>(
  "#decrease_point_WEGI_select"
);
const resetGameBtn = dom.select<Button>("#reset_game_btn");

const page = new Page();

const pageUI = new PageUI(page);

const player = new Player();

const playerUI = new PlayerUI(player);

const computer = new Computer();

const computerUI = new ComputerUI(computer);

const rpsGameSettings = new RPSGameSettings();

const rpsGameSettingsUI = new RPSGameSettingsUI(rpsGameSettings);

const rpsGame = new RPSGame({ player, computer, rpsGameSettings });

const rpsGameUI = new RPSGameUI(rpsGame);

window.addEventListener("load", () => {
  pageUI.detectPageLocation();
  playerUI.updatePlayerChoice();
  playerUI.updatePlayerPoints();
  playerUI.updatePlayerWinTimes();
  computerUI.updateComputerChoice();
  computerUI.updateComputerPoints();
  computerUI.updateComputerWinTimes();
  rpsGameUI.updateGamePlayResult();
  rpsGameUI.showGameDeveloper();
  rpsGameUI.showGameVersion();
  rpsGameSettingsUI.handleGameTheme();
  rpsGameSettingsUI.handleGameThemeSelect();
  rpsGameSettingsUI.handleComputerLevelSelect();
  rpsGameSettingsUI.handlePlayerMaxPointsInput();
  rpsGameSettingsUI.handleDecreasePointWEGISelect();
});

playerChoiceBtns.forEach((playerChoiceBtn) => {
  playerChoiceBtn.addEventListener("click", (e: any) => {
    rpsGame.startGame(e.target.dataset.choice);
  });
});

goHomeBtn.addEventListener("click", () => {
  page.updateLocation("home");

  pageUI.detectPageLocation();
});

goSettingsBtn.addEventListener("click", () => {
  page.updateLocation("settings");

  pageUI.detectPageLocation();
});

themeSelect.addEventListener("change", (e: any) => {
  rpsGameSettings.updateTheme(e.target.value as Theme);

  rpsGameSettingsUI.handleGameTheme();
});

computerLevelSelect.addEventListener("change", (e: any) => {
  rpsGameSettings.updateComputerLevel(e.target.value as ComputerLevel);
});

playerMaxPointsInput.addEventListener("input", (e: any) => {
  rpsGameSettings.updatePlayerMaxPoints(parseInt(e.target.value));
});

decreasePointWEGISelect.addEventListener("change", (e: any) => {
  rpsGameSettings.updateDecreasePointWEGI(
    JSON.parse(e.target.value) as boolean
  );
});

resetGameBtn.addEventListener("click", () => {
  rpsGame.resetGame();
});
