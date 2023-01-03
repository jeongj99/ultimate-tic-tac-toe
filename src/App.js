import Tictactoe from './components/Tictactoe';

import './App.css';

function App() {
  return (
    <table>
      <tbody>
        <tr>
          <td><Tictactoe /></td>
          <td><Tictactoe /></td>
          <td><Tictactoe /></td>
        </tr>
        <tr>
          <td><Tictactoe /></td>
          <td><Tictactoe /></td>
          <td><Tictactoe /></td>
        </tr>
        <tr>
          <td><Tictactoe /></td>
          <td><Tictactoe /></td>
          <td><Tictactoe /></td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
