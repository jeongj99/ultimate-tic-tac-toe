import useUltimate from "../store/useUltimate";

const Winner = () => {
  const { ultimateWinner } = useUltimate();

  return (
    <div className="ultimate-winner-container">
      <h1>{`The winner is "${ultimateWinner}"`}</h1>
      <button>Play Again</button>
    </div>
  );
};

export default Winner;