import useUltimate from "../store/useUltimate";

const Cell = ({ id }) => {
  const { turn, setTurn, cellValue, setCellValue } = useUltimate();

  const handleOnClick = () => {
    if (!cellValue[id]) {
      const updatedCellValue = [...cellValue];
      updatedCellValue[id] = turn;
      setCellValue(updatedCellValue);
      if (turn === "x") {
        setTurn("o");
      } else {
        setTurn("x");
      }
    }
  };

  return (
    <button className="individual-cell" onClick={handleOnClick}>
      {cellValue[id]}
    </button>
  );
};

export default Cell;