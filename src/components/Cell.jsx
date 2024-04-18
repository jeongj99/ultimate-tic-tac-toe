import useUltimate from "../store/useUltimate";
import useGetWinner from "../hooks/useGetWinner";

const Cell = ({ id, subboardId }) => {
  const { turn, setTurn, ultimateState, setUltimateState, activeSubboard } = useUltimate();
  const { getSubboardWinner, getUltimateWinner } = useGetWinner();

  const handleOnClick = () => {
    if ((activeSubboard === subboardId || activeSubboard === null) && !ultimateState[subboardId][id]) {
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
      getSubboardWinner(id, subboardId, updatedUltimateState);
      getUltimateWinner(updatedUltimateState);
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