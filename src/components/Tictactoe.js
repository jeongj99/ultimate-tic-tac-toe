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
          <td className="individual">
            <Cell value={cells[0]} />
          </td>
          <td className="individual">
            <Cell value={cells[1]} />
          </td>
          <td className="individual">
            <Cell value={cells[2]} />
          </td>
        </tr>
        <tr>
          <td className="individual">
            <Cell value={cells[3]} />
          </td>
          <td className="individual">
            <Cell value={cells[4]} />
          </td>
          <td className="individual">
            <Cell value={cells[5]} />
          </td>
        </tr>
        <tr>
          <td className="individual">
            <Cell value={cells[6]} />
          </td>
          <td className="individual">
            <Cell value={cells[7]} />
          </td>
          <td className="individual">
            <Cell value={cells[8]} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
