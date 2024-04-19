import Cell from "./Cell";
import useUltimate from "../store/useUltimate";
import "./subboard.css";

const Subboard = ({ id }) => {
  const { ultimateState } = useUltimate();

  const subboardWinnerExists = Array.isArray(ultimateState[id]);
  const subboardWinnerColor = ultimateState[id] === "x" ? "red" : "blue";

  return (
    <div className="subboard-container">
      {!subboardWinnerExists ? <h2 className={`subboard-winner ${subboardWinnerColor}`}>{ultimateState[id]}</h2> :
        <table className="subboard">
          <tbody>
            <tr>
              <td className="subboard-cell">
                <Cell id={0} subboardId={id} />
              </td>
              <td className="subboard-cell">
                <Cell id={1} subboardId={id} />
              </td>
              <td className="subboard-cell">
                <Cell id={2} subboardId={id} />
              </td>
            </tr>
            <tr>
              <td className="subboard-cell">
                <Cell id={3} subboardId={id} />
              </td>
              <td className="subboard-cell">
                <Cell id={4} subboardId={id} />
              </td>
              <td className="subboard-cell">
                <Cell id={5} subboardId={id} />
              </td>
            </tr>
            <tr>
              <td className="subboard-cell">
                <Cell id={6} subboardId={id} />
              </td>
              <td className="subboard-cell">
                <Cell id={7} subboardId={id} />
              </td>
              <td className="subboard-cell">
                <Cell id={8} subboardId={id} />
              </td>
            </tr>
          </tbody>
        </table>}
    </div >
  );
};

export default Subboard;