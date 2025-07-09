import { useGame } from "../context/GameContext";

export default function WelcomeScreen() {
  const { startGame } = useGame();

  return (
    <div className="welcome-screen">
      <h1>Whack-a-Mole!</h1>

      <p>Click the mole when it pops up to earn points.</p>

      <button onClick={startGame}>Play</button>
    </div>
  );
}
