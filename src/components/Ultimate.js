import { useState } from "react";

import Tictactoe from "./Tictactoe";

import "./Ultimate.css";

export default function Ultimate() {
  const [turn, setTurn] = useState("x");
  const [activeUltimateCell, setActiveUltimateCell] = useState("all");

  const handleClick = () => {
    if (turn === "x") {
      setTurn("o");
    } else {
      setTurn("x");
    }
  };

  return (
    <div>
      <table className="ultimate-board">
        <tbody>
          <tr >
            <td className="ultimate-cell"><Tictactoe handleClick={handleClick} /></td>
            <td className="ultimate-cell"><Tictactoe handleClick={handleClick} /></td>
            <td className="ultimate-cell"><Tictactoe handleClick={handleClick} /></td>
          </tr>
          <tr>
            <td className="ultimate-cell"><Tictactoe handleClick={handleClick} /></td>
            <td className="ultimate-cell"><Tictactoe handleClick={handleClick} /></td>
            <td className="ultimate-cell"><Tictactoe handleClick={handleClick} /></td>
          </tr>
          <tr>
            <td className="ultimate-cell"><Tictactoe handleClick={handleClick} /></td>
            <td className="ultimate-cell"><Tictactoe handleClick={handleClick} /></td>
            <td className="ultimate-cell"><Tictactoe handleClick={handleClick} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}