import GameChoice from "../types/GameChoice";

interface IPlayer {
  updateChoice(choice: GameChoice): void;
  increasePoints(): void;
  decreasePoints(): void;
  resetPoints(): void;
  increaseWinTimes(): void;
  resetWinTimes(): void;
  get choice(): GameChoice;
  get points(): number;
  get winTimes(): number;
}

export default IPlayer;
