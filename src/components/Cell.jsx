import useUltimate from "../store/useUltimate";

const Cell = ({ id, subboardId }) => {
  const { turn, setTurn, ultimateState, setUltimateState } = useUltimate();

  const handleOnClick = () => {
    if (!ultimateState[subboardId][id]) {
      const updatedUltimateState = ultimateState.map((subboard, subIndex) => {
        if (subIndex === subboardId) {
          return subboard.map((cell, cellIndex) => {
            if (cellIndex === id) {
              return turn;
            }
            return cell;
          });
        }
        return subboard;
      });
      setUltimateState(updatedUltimateState);
      if (turn === "x") {
        setTurn("o");
      } else {
        setTurn("x");
      }
    }
  };

  return (
    <button className="individual-cell" onClick={handleOnClick}>
      {ultimateState[subboardId][id]}
    </button>
  );
};

export default Cell;