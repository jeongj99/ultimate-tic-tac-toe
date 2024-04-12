import Cell from "./Cell";

const Subboard = ({ id }) => {
  return (
    <div>
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
      </table>
    </div>
  );
};

export default Subboard;