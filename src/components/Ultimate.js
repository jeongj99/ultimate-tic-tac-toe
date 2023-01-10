import { useState } from "react";

import Tictactoe from "./Tictactoe";

import "./Ultimate.css";

export default function Ultimate() {
  const [turn, setTurn] = useState("x");

  return (
    <div>
      <table className="ultimate-board">
        <tbody>
          <tr >
            <td className="ultimate-cell">
              <Tictactoe turn={turn} setTurn={setTurn} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe turn={turn} setTurn={setTurn} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe turn={turn} setTurn={setTurn} />
            </td>
          </tr>
          <tr>
            <td className="ultimate-cell">
              <Tictactoe turn={turn} setTurn={setTurn} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe turn={turn} setTurn={setTurn} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe turn={turn} setTurn={setTurn} />
            </td>
          </tr>
          <tr>
            <td className="ultimate-cell">
              <Tictactoe turn={turn} setTurn={setTurn} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe turn={turn} setTurn={setTurn} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe turn={turn} setTurn={setTurn} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}