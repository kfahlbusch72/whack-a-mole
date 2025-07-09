import { useGame } from "../context/GameContext";

import Hole from "./Hole";

import ScoreBoard from "./Scoreboard";

export default function GameBoard() {
  const { moleIndex, stopGame, timeLeft } = useGame();

  return (
    <div className="game-board">
      <ScoreBoard />
      <div>Time Left: {timeLeft} seconds</div>
      {timeLeft === 0 && <div className="game-over">Game Over!</div>}
      <button onClick={stopGame}>Restart</button>

      <div className="holes">
        {Array.from({ length: 9 }).map((_, index) => (
          <Hole
            key={index}
            hasMole={timeLeft > 0 && index === moleIndex}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
