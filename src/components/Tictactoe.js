import { useState } from "react";
import classNames from "classnames";
import "./Tictactoe.css";

function Cell({ value, onClick }) {
  return (
    <button className="individual-cell" onClick={onClick}>
      {value}
    </button>
  );
}

export default function Tictactoe(props) {
  const { id, turn, setTurn, ultimateCells, setUltimateCells, finalWinner, checkFinalWinner, activeBoard, setActiveBoard } = props;

  const [cells, setCells] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const tictactoeClass = classNames("individual-board", {
    "finish--x": winner === "x",
    "finish--y": winner === "o",
  });

  const checkCellWinner = (squares, ultimateSquares, id) => {
    const combos = {
      horizontal: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
      vertical: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
      diagonal: [[0, 4, 8], [2, 4, 6]]
    };

    for (const combo in combos) {
      combos[combo].forEach(pattern => {
        if (squares[pattern[0]] && squares[pattern[0]] === squares[pattern[1]] && squares[pattern[0]] === squares[pattern[2]]) {
          setWinner(squares[pattern[0]]);
          ultimateSquares[id] = squares[pattern[0]];
          setUltimateCells(ultimateSquares);
        }
      });
    }
  };

  const checkIfWinner = (squares) => {
    const combos = {
      horizontal: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
      vertical: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
      diagonal: [[0, 4, 8], [2, 4, 6]]
    };

    for (const combo in combos) {
      combos[combo].forEach(pattern => {
        if (squares[pattern[0]] && squares[pattern[0]] === squares[pattern[1]] && squares[pattern[0]] === squares[pattern[2]]) {
          return true;
        }
      });
    }

    return false;
  };

  const handleClick = (index) => {
    const squares = [...cells];
    const ultimateSquares = [...ultimateCells];

    if (!squares[index] && !winner && !finalWinner && (activeBoard === null || activeBoard === id)) {
      squares[index] = turn;

      if (turn === "x") {
        setTurn("o");
      } else {
        setTurn("x");
      }

      checkCellWinner(squares, ultimateSquares, id);
      checkFinalWinner(ultimateSquares);
      setCells(squares);

      const isWinnerOrFullBoard = (checkIfWinner(squares) || squares.every(cell => cell !== null));
      setActiveBoard(isWinnerOrFullBoard ? null : index);
    }
  };

  return (
    <>
      {winner ? <h2 className={tictactoeClass}>{winner}</h2> : <table className={tictactoeClass}>
        <tbody>
          <tr>
            <td className="individual">
              <Cell value={cells[0]} onClick={() => handleClick(0)} />
            </td>
            <td className="individual">
              <Cell value={cells[1]} onClick={() => handleClick(1)} />
            </td>
            <td className="individual">
              <Cell value={cells[2]} onClick={() => handleClick(2)} />
            </td>
          </tr>
          <tr>
            <td className="individual">
              <Cell value={cells[3]} onClick={() => handleClick(3)} />
            </td>
            <td className="individual">
              <Cell value={cells[4]} onClick={() => handleClick(4)} />
            </td>
            <td className="individual">
              <Cell value={cells[5]} onClick={() => handleClick(5)} />
            </td>
          </tr>
          <tr>
            <td className="individual">
              <Cell value={cells[6]} onClick={() => handleClick(6)} />
            </td>
            <td className="individual">
              <Cell value={cells[7]} onClick={() => handleClick(7)} />
            </td>
            <td className="individual">
              <Cell value={cells[8]} onClick={() => handleClick(8)} />
            </td>
          </tr>
        </tbody>
      </table>}
    </>
  );
};