import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(Math.floor(Math.random() * 9));

  const startGame = () => {
    setScore(0);
    setMoleIndex(Math.floor(Math.random() * 9));
    setIsPlaying(true);
  };

  const stopGame = () => {
    setIsPlaying(false);
  };

  const whackMole = () => {
    setScore((score) => score + 1);
    setMoleIndex((prev) => {
      let next;
      do {
        next = Math.floor(Math.random() * 9);
      } while (next === prev);
      return next;
    });
  };

  return (
    <GameContext.Provider
      value={{
        isPlaying,
        score,
        moleIndex,
        startGame,
        stopGame,
        whackMole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
}
