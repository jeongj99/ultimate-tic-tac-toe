import useUltimate from "../store/useUltimate";
import useGetWinner from "../hooks/useGetWinner";
import "./cell.css";

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
      const subboardWinner = getSubboardWinner(id, subboardId, updatedUltimateState);
      if (subboardWinner) {
        getUltimateWinner(subboardWinner);
      }
      if (turn === "x") {
        setTurn("o");
      } else {
        setTurn("x");
      }
    }
  };

  const cellValue = ultimateState[subboardId][id];

  return (
    cellValue ? <div className="individual-cell">{cellValue}</div> :
      <button className="button-cell" onClick={handleOnClick}>
        {ultimateState[subboardId][id]}
      </button>
  );
};

export default Cell;