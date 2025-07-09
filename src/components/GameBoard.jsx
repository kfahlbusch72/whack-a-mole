import { useGame } from "../context/GameContext";

import Hole from "./Hole";

import ScoreBoard from "./Scoreboard";

export default function GameBoard() {
  const { moleIndex, stopGame } = useGame();

  return (
    <div className="game-board">
      <ScoreBoard />

      <button onClick={stopGame}>Restart</button>

      <div className="holes">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Hole key={idx} hasMole={index === moleIndex} index={idx} />
        ))}
      </div>
    </div>
  );
}
