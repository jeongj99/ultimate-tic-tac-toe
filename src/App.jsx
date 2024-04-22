import Board from "./components/Board";
import Winner from "./components/Winner";
import './App.css';
import useUltimate from "./store/useUltimate";

const App = () => {
  const { ultimateWinner } = useUltimate();

  return (
    ultimateWinner ? <Winner /> : <Board />
  );
};

export default App;