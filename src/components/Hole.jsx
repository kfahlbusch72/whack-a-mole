import { useGame } from "../context/GameContext";

export default function Hole({ hadMole, index }) {
  const { whackMole } = useGame();

  return (
    <div className="hole">
      {hadMole && (
        <img src="/mole.png" alt="Mole" className="mole" onClick={whackMole} />
      )}
    </div>
  );
}
