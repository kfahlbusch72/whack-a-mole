import { useGame } from "../context/GameContext";

export default function Hole({ hasMole, index }) {
  const { whackMole } = useGame();

  return (
    <div
      className={`hole${hasMole ? " has-mole" : ""}`}
      onClick={() => hasMole && whackMole()}
    />
  );
}
