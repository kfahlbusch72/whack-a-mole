import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(Math.floor(Math.random() * 9));

  const startGame = () => {
    console.log("Starting game...");

    setScore(0);
    setMoleIndex(Math.floor(Math.random() * 9));
    setIsPlaying(true);
  };

  const [highScore, setHighScore] = useState(0);

  const stopGame = () => {
    setHighScore((prevHigh) => (score > prevHigh ? score : prevHigh));
    setIsPlaying(false);
  };

  const whackMole = () => {
    if (timeLeft <= 0) return;

    setScore((score) => score + 1);

    setMoleIndex((prev) => {
      let next;
      do {
        next = Math.floor(Math.random() * 9);
      } while (next === prev);
      return next;
    });
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            clearInterval(timerRef.current);
            setIsPlaying(false);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  return (
    <GameContext.Provider
      value={{
        isPlaying,
        score,
        highScore,
        timeLeft,
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
