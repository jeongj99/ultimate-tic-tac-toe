import "./Tictactoe.css";

export default function Tictactoe(props) {
  const { handleClick } = props;

  return (
    <table className="individual-board">
      <tbody>
        <tr>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
        </tr>
        <tr>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
        </tr>
        <tr>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
          <td className="individual" onClick={handleClick}></td>
        </tr>
      </tbody>
    </table>
  );
};
