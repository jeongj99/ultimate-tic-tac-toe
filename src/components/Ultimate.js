import Tictactoe from "./Tictactoe";

import "./Ultimate.css";

export default function Ultimate() {
  return (
    <div>
      <table className="ultimate-board">
        <tbody>
          <tr >
            <td className="ultimate-cell"><Tictactoe /></td>
            <td className="ultimate-cell"><Tictactoe /></td>
            <td className="ultimate-cell"><Tictactoe /></td>
          </tr>
          <tr>
            <td className="ultimate-cell"><Tictactoe /></td>
            <td className="ultimate-cell"><Tictactoe /></td>
            <td className="ultimate-cell"><Tictactoe /></td>
          </tr>
          <tr>
            <td className="ultimate-cell"><Tictactoe /></td>
            <td className="ultimate-cell"><Tictactoe /></td>
            <td className="ultimate-cell"><Tictactoe /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}