import GameChoice from "../types/GameChoice";
import GamePlayResult from "../types/GamePlayResult";
import RPSGameOptions from "../types/RPSGameOptions";
import Winner from "../types/Winner";
import Computer from "./Computer";
import ComputerUI from "./ComputerUI";
import Player from "./Player";
import PlayerUI from "./PlayerUI";
import RPSGameSettings from "./RPSGameSettings";
import RPSGameUI from "./RPSGameUI";

class RPSGame {
  private _player: Player;
  private _playerUI: PlayerUI;
  private _computer: Computer;
  private _computerUI: ComputerUI;
  private _gamePlayResult: GamePlayResult;
  private _winner: Winner;
  private _rpsGameSettings: RPSGameSettings;
  private _rpsGameUI: RPSGameUI;
  private _developer: string;
  private _version: number;

  public constructor(options: RPSGameOptions) {
    this._player = options.player;
    this._playerUI = new PlayerUI(this._player);
    this._computer = options.computer;
    this._computerUI = new ComputerUI(this._computer);
    this._gamePlayResult = "Play to start game!";
    this._winner = "no-one";
    this._rpsGameSettings = options.rpsGameSettings;
    this._rpsGameUI = new RPSGameUI(this);
    this._developer = "Aissa Bedr";
    this._version = 2.05;
  }

  public startGame(playerChoice: GameChoice): void {
    this.getPlayerChoice(playerChoice);

    this.getComputerChoice();

    this.roundResult();

    this.gameResult();
  }

  public resetGame(): void {
    this._winner = "no-one";

    this._player.updateChoice("not-selected");

    this._playerUI.updatePlayerChoice();

    this._player.resetPoints();

    this._playerUI.updatePlayerPoints();

    this._player.resetWinTimes();

    this._playerUI.updatePlayerWinTimes();

    this._computer.updateChoice("not-selected");

    this._computerUI.updateComputerChoice();

    this._computer.resetPoints();

    this._computerUI.updateComputerPoints();

    this._computer.resetWinTimes();

    this._computerUI.updateComputerWinTimes();

    this.updateGamePlayResult("Play to start game!");
  }

  private getPlayerChoice(playerChoice: GameChoice): void {
    this._player.updateChoice(playerChoice);

    this._playerUI.updatePlayerChoice();
  }

  private getComputerChoice(): void {
    if (this._rpsGameSettings.computerLevel === "easy") {
      const choices: Array<GameChoice> = ["rock", "paper", "scissors"];

      this._computer.updateChoice(
        choices[Math.floor(Math.random() * choices.length)]
      );

      this._computerUI.updateComputerChoice();

      return;
    }

    let booleansList: Array<boolean> = [];

    if (this._rpsGameSettings.computerLevel === "medium")
      booleansList = [false, true, false, true, false];
    else booleansList = [false, true, true, true, false];

    const isComputerSeeYou =
      booleansList[Math.floor(Math.random() * booleansList.length)];

    if (isComputerSeeYou) {
      switch (this._player.choice) {
        case "rock":
          this._computer.updateChoice("paper");
          break;

        case "paper":
          this._computer.updateChoice("scissors");
          break;

        case "scissors":
          this._computer.updateChoice("rock");
          break;

        default:
          this._computer.updateChoice("not-selected");
      }

      this._computerUI.updateComputerChoice();

      return;
    }

    const choices: Array<GameChoice> = ["rock", "paper", "scissors"];

    this._computer.updateChoice(
      choices[Math.floor(Math.random() * choices.length)]
    );

    this._computerUI.updateComputerChoice();
  }

  private roundResult(): void {
    if (
      (this._player.choice === "rock" && this._computer.choice === "rock") ||
      (this._player.choice === "paper" && this._computer.choice === "paper") ||
      (this._player.choice === "scissors" &&
        this._computer.choice === "scissors")
    ) {
      this._winner = "no-one";

      this.updateGamePlayResult("Draw!");
    }

    if (
      (this._player.choice === "rock" &&
        this._computer.choice === "scissors") ||
      (this._player.choice === "paper" && this._computer.choice === "rock") ||
      (this._player.choice === "scissors" && this._computer.choice === "paper")
    ) {
      this._winner = "You";

      this.updateGamePlayResult("You won!");

      this._player.increasePoints();

      this._playerUI.updatePlayerPoints();

      if (this._rpsGameSettings.decreasePointWEGI) {
        this._computer.decreasePoints();

        this._computerUI.updateComputerPoints();
      }
    }

    if (
      (this._computer.choice === "rock" &&
        this._player.choice === "scissors") ||
      (this._computer.choice === "paper" && this._player.choice === "rock") ||
      (this._computer.choice === "scissors" && this._player.choice === "paper")
    ) {
      this._winner = "Computer";

      this.updateGamePlayResult("Computer won!");

      this._computer.increasePoints();

      this._computerUI.updateComputerPoints();

      if (this._rpsGameSettings.decreasePointWEGI) {
        this._player.decreasePoints();

        this._playerUI.updatePlayerPoints();
      }
    }
  }

  private gameResult(): void {
    if (
      this._player.points === this._rpsGameSettings.playerMaxPoints ||
      this._computer.points === this._rpsGameSettings.playerMaxPoints
    )
      this.gameOver();
  }

  private gameOver(): void {
    this.getWinnerPlayResult();

    this._rpsGameUI.disablePlayerChoiceBtns();

    setTimeout(() => {
      this._winner = "no-one";

      this._player.updateChoice("not-selected");

      this._playerUI.updatePlayerChoice();

      this._player.resetPoints();

      this._playerUI.updatePlayerPoints();

      this._computer.updateChoice("not-selected");

      this._computerUI.updateComputerChoice();

      this._computer.resetPoints();

      this._computerUI.updateComputerPoints();

      this.updateGamePlayResult("Play to start game!");

      this._rpsGameUI.enablePlayerChoiceBtns();
    }, 1500);
  }

  private getWinnerPlayResult(): void {
    if (this._winner === "You") {
      this.updateGamePlayResult("Game over and the winner is You!");

      this._player.increaseWinTimes();

      this._playerUI.updatePlayerWinTimes();

      return;
    }

    this.updateGamePlayResult("Game over and the winner is The Computer!");

    this._computer.increaseWinTimes();

    this._computerUI.updateComputerWinTimes();
  }

  private updateGamePlayResult(gamePlayResult: GamePlayResult): void {
    this._gamePlayResult = gamePlayResult;

    this._rpsGameUI.updateGamePlayResult();
  }

  public get player(): Player {
    return this._player;
  }

  public get computer(): Computer {
    return this._computer;
  }

  public get gamePlayResult(): GamePlayResult {
    return this._gamePlayResult;
  }

  public get developer(): string {
    return this._developer;
  }

  public get version(): number {
    return this._version;
  }
}

export default RPSGame;
