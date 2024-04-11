import Cell from "./Cell";

const Subboard = () => {
  return (
    <div>
      <table className="subboard">
        <tbody>
          <tr>
            <td className="individual">
              <Cell id={0} />
            </td>
            <td className="individual">
              <Cell id={1} />
            </td>
            <td className="individual">
              <Cell id={2} />
            </td>
          </tr>
          <tr>
            <td className="individual">
              <Cell id={3} />
            </td>
            <td className="individual">
              <Cell id={4} />
            </td>
            <td className="individual">
              <Cell id={5} />
            </td>
          </tr>
          <tr>
            <td className="individual">
              <Cell id={6} />
            </td>
            <td className="individual">
              <Cell id={7} />
            </td>
            <td className="individual">
              <Cell id={8} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Subboard;