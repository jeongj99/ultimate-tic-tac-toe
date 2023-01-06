import { useState } from "react";

import "./Tictactoe.css";

export default function Tictactoe(props) {
  const [turn, setTurn] = useState("x");

  const handleClick = () => {
    if (turn === "x") {
      setTurn("o");
    } else {
      setTurn("x");
    }
  };

  return (
    <table className="individual-board">
      <tbody>
        <tr>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
        </tr>
        <tr>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
        </tr>
        <tr>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
        </tr>
      </tbody>
    </table>
  );
};
