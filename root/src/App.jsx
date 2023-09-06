import "./App.css";
import Board from "./components/Board";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Board />
        <Configurator />
        <footer className="footer">
          <a href="http://keyi48.com/" target="_blank">
            Built by keyi
          </a>
        </footer>
      </div>
    </CustomizationProvider>
  );
}

export default App;
