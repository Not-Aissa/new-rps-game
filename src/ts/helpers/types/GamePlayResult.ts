type GamePlayResult =
  | "Play to start game!"
  | "You won!"
  | "Computer won!"
  | "Draw!"
  | `Game over and the winner is ${"You" | "The Computer"}!`;

export default GamePlayResult;
