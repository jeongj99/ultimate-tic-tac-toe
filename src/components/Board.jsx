import Subboard from "./Subboard";

const Board = () => {
  return (
    <div>
      <table className="ultimate-board">
        <tbody>
          <tr >
            <td className="ultimate-cell">
              <Subboard id={0} />
            </td>
            <td className="ultimate-cell">
              <Subboard id={1} />
            </td>
            <td className="ultimate-cell">
              <Subboard id={2} />
            </td>
          </tr>
          <tr>
            <td className="ultimate-cell">
              <Subboard id={3} />
            </td>
            <td className="ultimate-cell">
              <Subboard id={4} />
            </td>
            <td className="ultimate-cell">
              <Subboard id={5} />
            </td>
          </tr>
          <tr>
            <td className="ultimate-cell">
              <Subboard id={6} />
            </td>
            <td className="ultimate-cell">
              <Subboard id={7} />
            </td>
            <td className="ultimate-cell">
              <Subboard id={8} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Board;