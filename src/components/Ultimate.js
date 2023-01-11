import { useState } from "react";

import Tictactoe from "./Tictactoe";

import "./Ultimate.css";

export default function Ultimate() {
  const [turn, setTurn] = useState("x");
  const [ultimateCells, setUltimateCells] = useState(Array(9).fill(null));

  return (
    <div>
      <table className="ultimate-board">
        <tbody>
          <tr >
            <td className="ultimate-cell">
              <Tictactoe id={0} turn={turn} setTurn={setTurn} setUltimateCells={setUltimateCells} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={1} turn={turn} setTurn={setTurn} setUltimateCells={setUltimateCells} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={2} turn={turn} setTurn={setTurn} setUltimateCells={setUltimateCells} />
            </td>
          </tr>
          <tr>
            <td className="ultimate-cell">
              <Tictactoe id={3} turn={turn} setTurn={setTurn} setUltimateCells={setUltimateCells} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={4} turn={turn} setTurn={setTurn} setUltimateCells={setUltimateCells} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={5} turn={turn} setTurn={setTurn} setUltimateCells={setUltimateCells} />
            </td>
          </tr>
          <tr>
            <td className="ultimate-cell">
              <Tictactoe id={6} turn={turn} setTurn={setTurn} setUltimateCells={setUltimateCells} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={7} turn={turn} setTurn={setTurn} setUltimateCells={setUltimateCells} />
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={8} turn={turn} setTurn={setTurn} setUltimateCells={setUltimateCells} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}