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
  const [turn, setTurn] = useState("x");;
  const [cells, setCells] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    const squares = [...cells];

    if (!squares[index]) {
      squares[index] = turn;

      if (turn === "x") {
        setTurn("o");
      } else {
        setTurn("x");
      }

      setCells(squares);
    }
  };

  return (
    <table className="individual-board">
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
    </table>
  );
};
