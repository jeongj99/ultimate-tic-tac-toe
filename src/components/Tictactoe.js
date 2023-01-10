import { useState } from "react";

import "./Tictactoe.css";

function Cell({ value, onClick }) {
  return (
    <button className="individual-cell" onClick={onClick}>
      {value}
    </button>
  );
}

export default function Tictactoe(props) {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const combos = {
      horizontal: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
      vertical: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
      diagonal: [[0, 4, 8], [2, 4, 6]]
    };

    for (const combo in combos) {
      combos[combo].forEach(pattern => {
        if (squares[pattern[0]] && squares[pattern[0]] === squares[pattern[1]] && squares[pattern[0]] === squares[pattern[2]]) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (index) => {
    const squares = [...cells];

    if (!squares[index] && !winner) {
      squares[index] = props.turn;

      if (props.turn === "x") {
        props.setTurn("o");
      } else {
        props.setTurn("x");
      }

      checkWinner(squares);
      setCells(squares);
    }
  };

  return (
    <>
      {winner ? <h2>{winner}</h2> : <table className="individual-board">
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
