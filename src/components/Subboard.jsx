import Cell from "./Cell";

const Subboard = () => {
  return (
    <div>
      <table className="subboard">
        <tbody>
          <tr>
            <td className="individual">
              <Cell />
            </td>
            <td className="individual">
              <Cell />
            </td>
            <td className="individual">
              <Cell />
            </td>
          </tr>
          <tr>
            <td className="individual">
              <Cell />
            </td>
            <td className="individual">
              <Cell />
            </td>
            <td className="individual">
              <Cell />
            </td>
          </tr>
          <tr>
            <td className="individual">
              <Cell />
            </td>
            <td className="individual">
              <Cell />
            </td>
            <td className="individual">
              <Cell />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Subboard;