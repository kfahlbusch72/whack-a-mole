import { useGame } from "./context/GameContext";

import WelcomeScreen from "./components/WelcomeScreen";

import GameBoard from "./components/GameBoard";

export default function App() {
  const { isPlaying } = useGame();

  return (
    <div className="app">{isPlaying ? <GameBoard /> : <WelcomeScreen />}</div>
  );
}
