import { useState } from "react";

import Tictactoe from "./Tictactoe";

import "./Ultimate.css";

export default function Ultimate() {
  const [turn, setTurn] = useState("x");
  const [ultimateCells, setUltimateCells] = useState(Array(9).fill(null));
  const [finalWinner, setFinalWinner] = useState(null);
  const [activeBoard, setActiveBoard] = useState(null);

  const checkFinalWinner = (ultimateSquares) => {
    const combos = {
      horizontal: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
      vertical: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
      diagonal: [[0, 4, 8], [2, 4, 6]]
    };

    for (const combo in combos) {
      combos[combo].forEach(pattern => {
        if (ultimateSquares[pattern[0]] && ultimateSquares[pattern[0]] === ultimateSquares[pattern[1]] && ultimateSquares[pattern[0]] === ultimateSquares[pattern[2]]) {
          setFinalWinner(ultimateSquares[pattern[0]]);
        }
      });
    }
  };

  return (
    <div>
      <table className="ultimate-board">
        <tbody>
          <tr >
            <td className="ultimate-cell">
              <Tictactoe id={0} turn={turn} setTurn={setTurn} ultimateCells={ultimateCells} setUltimateCells={setUltimateCells} checkFinalWinner={checkFinalWinner} finalWinner={finalWinner} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={1} turn={turn} setTurn={setTurn} ultimateCells={ultimateCells} setUltimateCells={setUltimateCells} checkFinalWinner={checkFinalWinner} finalWinner={finalWinner} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={2} turn={turn} setTurn={setTurn} ultimateCells={ultimateCells} setUltimateCells={setUltimateCells} checkFinalWinner={checkFinalWinner} finalWinner={finalWinner} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>
            </td>
          </tr>
          <tr>
            <td className="ultimate-cell">
              <Tictactoe id={3} turn={turn} setTurn={setTurn} ultimateCells={ultimateCells} setUltimateCells={setUltimateCells} checkFinalWinner={checkFinalWinner} finalWinner={finalWinner} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={4} turn={turn} setTurn={setTurn} ultimateCells={ultimateCells} setUltimateCells={setUltimateCells} checkFinalWinner={checkFinalWinner} finalWinner={finalWinner} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={5} turn={turn} setTurn={setTurn} ultimateCells={ultimateCells} setUltimateCells={setUltimateCells} checkFinalWinner={checkFinalWinner} finalWinner={finalWinner} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>
            </td>
          </tr>
          <tr>
            <td className="ultimate-cell">
              <Tictactoe id={6} turn={turn} setTurn={setTurn} ultimateCells={ultimateCells} setUltimateCells={setUltimateCells} checkFinalWinner={checkFinalWinner} finalWinner={finalWinner} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={7} turn={turn} setTurn={setTurn} ultimateCells={ultimateCells} setUltimateCells={setUltimateCells} checkFinalWinner={checkFinalWinner} finalWinner={finalWinner} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>
            </td>
            <td className="ultimate-cell">
              <Tictactoe id={8} turn={turn} setTurn={setTurn} ultimateCells={ultimateCells} setUltimateCells={setUltimateCells} checkFinalWinner={checkFinalWinner} finalWinner={finalWinner} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>
            </td>
          </tr>
        </tbody>
      </table>
      {finalWinner && <h1>{finalWinner} is the winner</h1>}
    </div>
  );
}