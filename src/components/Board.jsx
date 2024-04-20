import Subboard from "./Subboard";
import "./board.css";
import useUltimate from "../store/useUltimate";

const Board = () => {
  const { activeSubboard } = useUltimate();

  return (
    <div className="ultimate-board-container">
      <table className="ultimate-board">
        <tbody>
          <tr >
            <td className={`ultimate-subboard ${activeSubboard === 0 || activeSubboard === null ? "active" : ""}`}>
              <Subboard id={0} />
            </td>
            <td className={`ultimate-subboard ${activeSubboard === 1 || activeSubboard === null ? "active" : ""}`}>
              <Subboard id={1} />
            </td>
            <td className={`ultimate-subboard ${activeSubboard === 2 || activeSubboard === null ? "active" : ""}`}>
              <Subboard id={2} />
            </td>
          </tr>
          <tr>
            <td className={`ultimate-subboard ${activeSubboard === 3 || activeSubboard === null ? "active" : ""}`}>
              <Subboard id={3} />
            </td>
            <td className={`ultimate-subboard ${activeSubboard === 4 || activeSubboard === null ? "active" : ""}`}>
              <Subboard id={4} />
            </td>
            <td className={`ultimate-subboard ${activeSubboard === 5 || activeSubboard === null ? "active" : ""}`}>
              <Subboard id={5} />
            </td>
          </tr>
          <tr>
            <td className={`ultimate-subboard ${activeSubboard === 6 || activeSubboard === null ? "active" : ""}`}>
              <Subboard id={6} />
            </td>
            <td className={`ultimate-subboard ${activeSubboard === 7 || activeSubboard === null ? "active" : ""}`}>
              <Subboard id={7} />
            </td>
            <td className={`ultimate-subboard ${activeSubboard === 8 || activeSubboard === null ? "active" : ""}`}>
              <Subboard id={8} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Board;