import useUltimate from "../store/useUltimate";

const useGetWinner = () => {
  const { setUltimateState } = useUltimate();

  const getSubboardWinner = (subboardId, ultimateState) => {
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
          return;
        }
      }
    }
  };

  return { getSubboardWinner };
};

export default useGetWinner;