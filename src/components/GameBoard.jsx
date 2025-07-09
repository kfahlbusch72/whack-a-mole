import { useGame } from "../context/GameContext";

import Hole from "./Hole";

import ScoreBoard from "./Scoreboard";

export default function GameBoard() {
  const { moleIndex, stopGame } = useGame();

  return (
    <div className="game-board">
      <ScoreBoard />
      <div>Time Left: {timeLeft} seconds</div>
      <button onClick={stopGame}>Restart</button>

      <div className="holes">
        {Array.from({ length: 9 }).map((_, index) => (
          <Hole key={index} hasMole={index === moleIndex} index={index} />
        ))}
      </div>
    </div>
  );
}
