import Subboard from "./Subboard";
import "./board.css";

const Board = () => {
  return (
    <div className="ultimate-board-container">
      <table className="ultimate-board">
        <tbody>
          <tr >
            <td className="ultimate-subboard">
              <Subboard id={0} />
            </td>
            <td className="ultimate-subboard">
              <Subboard id={1} />
            </td>
            <td className="ultimate-subboard">
              <Subboard id={2} />
            </td>
          </tr>
          <tr>
            <td className="ultimate-subboard">
              <Subboard id={3} />
            </td>
            <td className="ultimate-subboard">
              <Subboard id={4} />
            </td>
            <td className="ultimate-subboard">
              <Subboard id={5} />
            </td>
          </tr>
          <tr>
            <td className="ultimate-subboard">
              <Subboard id={6} />
            </td>
            <td className="ultimate-subboard">
              <Subboard id={7} />
            </td>
            <td className="ultimate-subboard">
              <Subboard id={8} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Board;