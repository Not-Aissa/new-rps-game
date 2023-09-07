import Computer from "../classes/Computer";
import Player from "../classes/Player";
import RPSGameSettings from "../classes/RPSGameSettings";

type RPSGameOptions = {
  player: Player;
  computer: Computer;
  rpsGameSettings: RPSGameSettings;
};

export default RPSGameOptions;
