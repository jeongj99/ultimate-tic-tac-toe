import useUltimate from "../store/useUltimate";

const useGetWinner = () => {
  const { setUltimateState, setUltimateWinner, setActiveSubboard } = useUltimate();

  const getSubboardWinner = (id, subboardId, ultimateState) => {
    const combos = {
      horizontal: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
      vertical: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
      diagonal: [[0, 4, 8], [2, 4, 6]]
    };

    for (const combo in combos) {
      for (const pattern of combos[combo]) {
        const [a, b, c] = pattern;
        if (
          ultimateState[subboardId][a] &&
          ultimateState[subboardId][a] === ultimateState[subboardId][b] &&
          ultimateState[subboardId][a] === ultimateState[subboardId][c]
        ) {
          const updatedUltimateState = [...ultimateState];
          updatedUltimateState[subboardId] = ultimateState[subboardId][a];
          setUltimateState(updatedUltimateState);
          if (!Array.isArray(updatedUltimateState[id])) {
            setActiveSubboard(null);
          } else {
            setActiveSubboard(id);
          }
          return updatedUltimateState;
        }
        if (!Array.isArray(ultimateState[id])) {
          setActiveSubboard(null);
        } else {
          setActiveSubboard(id);
        }
      }
    }
  };

  const getUltimateWinner = ultimateState => {
    const combos = {
      horizontal: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
      vertical: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
      diagonal: [[0, 4, 8], [2, 4, 6]]
    };

    for (const combo in combos) {
      for (const pattern of combos[combo]) {
        const [a, b, c] = pattern;
        const aValue = ultimateState[a];
        const bValue = ultimateState[b];
        const cValue = ultimateState[c];

        if (
          aValue !== undefined && !Array.isArray(aValue) &&
          aValue === bValue && aValue === cValue
        ) {
          setUltimateWinner(aValue);
          return;
        }
      }
    }
  };

  return { getSubboardWinner, getUltimateWinner };

};

export default useGetWinner;