import { useState } from "react";

import "./Tictactoe.css";

function Cell({ value, onClick }) {
  return (
    <button onClick={onClick}>
      {value}
    </button>
  );
}

export default function Tictactoe(props) {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    const squares = [...cells];

    squares[index] = turn;

    if (turn === "x") {
      setTurn("o");
    } else {
      setTurn("x");
    }

    setCells(squares);
  };

  return (
    <table className="individual-board">
      <tbody>
        <tr>
          <td className="individual" onClick={handleClick}>
            <Cell />
          </td>
          <td className="individual" onClick={handleClick}>
            <Cell />
          </td>
          <td className="individual" onClick={handleClick}>
            <Cell />
          </td>
        </tr>
        <tr>
          <td className="individual" onClick={handleClick}>
            <Cell />
          </td>
          <td className="individual" onClick={handleClick}>
            <Cell />
          </td>
          <td className="individual" onClick={handleClick}>
            <Cell />
          </td>
        </tr>
        <tr>
          <td className="individual" onClick={handleClick}>
            <Cell />
          </td>
          <td className="individual" onClick={handleClick}>
            <Cell />
          </td>
          <td className="individual" onClick={handleClick}>
            <Cell />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
