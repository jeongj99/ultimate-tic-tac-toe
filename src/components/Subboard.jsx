import Cell from "./Cell";
import useUltimate from "../store/useUltimate";

const Subboard = ({ id }) => {
  const { ultimateState } = useUltimate();

  const subboardWinnerExists = Array.isArray(ultimateState[id]);

  return (
    < div >
      {!subboardWinnerExists ? <h2>{ultimateState[id]}</h2> :
        <table className="subboard">
          <tbody>
            <tr>
              <td className="individual">
                <Cell id={0} subboardId={id} />
              </td>
              <td className="individual">
                <Cell id={1} subboardId={id} />
              </td>
              <td className="individual">
                <Cell id={2} subboardId={id} />
              </td>
            </tr>
            <tr>
              <td className="individual">
                <Cell id={3} subboardId={id} />
              </td>
              <td className="individual">
                <Cell id={4} subboardId={id} />
              </td>
              <td className="individual">
                <Cell id={5} subboardId={id} />
              </td>
            </tr>
            <tr>
              <td className="individual">
                <Cell id={6} subboardId={id} />
              </td>
              <td className="individual">
                <Cell id={7} subboardId={id} />
              </td>
              <td className="individual">
                <Cell id={8} subboardId={id} />
              </td>
            </tr>
          </tbody>
        </table>}
    </div >
  );
};

export default Subboard;