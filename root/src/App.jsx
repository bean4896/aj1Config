import "./App.css";
import Board from "./components/Board";
import Configurator from "./components/Configurator";

function App() {
  return (
    <div className="App">
      <Board />
      <Configurator />
      <footer>Built by keyi</footer>
    </div>
  );
}

export default App;
