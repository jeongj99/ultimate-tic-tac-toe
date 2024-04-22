import useUltimate from "../store/useUltimate";

const Winner = () => {
  const { ultimateWinner, resetGame } = useUltimate();

  const handlePlayAgain = () => {
    resetGame();
  };

  return (
    <div className="ultimate-winner-container">
      <h1>{`The winner is "${ultimateWinner}"`}</h1>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default Winner;