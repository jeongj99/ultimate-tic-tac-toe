import { useState } from "react";

import Tictactoe from "./Tictactoe";

import "./Ultimate.css";

export default function Ultimate() {
  const [activeUltimateCell, setActiveUltimateCell] = useState("all");

  return (
    <div>
      <table className="ultimate-board">
        <tbody>
          <tr >
            <td className="ultimate-cell"></td>
            <td className="ultimate-cell"></td>
            <td className="ultimate-cell"></td>
          </tr>
          <tr>
            <td className="ultimate-cell"></td>
            <td className="ultimate-cell"></td>
            <td className="ultimate-cell"></td>
          </tr>
          <tr>
            <td className="ultimate-cell"></td>
            <td className="ultimate-cell"></td>
            <td className="ultimate-cell"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}